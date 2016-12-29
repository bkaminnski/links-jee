#!/usr/bin/jjs -fv

load("./scripts/docker.js");
load("./scripts/scriptsCopier.js");
load('./scripts/command.js');
load('./scripts/parallelExecutor.js');

var postgresPreRun = function() {
	var scriptsCopier = new ScriptsCopier("../sources/services/", "-db", ["sh"], "./postgres-dev/docker-entrypoint-initdb.d/");
	scriptsCopier.deleteScriptsInTargetDirectory();
	scriptsCopier.copyScriptsFromSourcesToTargetDirectory();
};

var wildflyPreRun = function() {
	var scriptsCopier = new ScriptsCopier("../sources/services/", "-mw", ["cli"], "./wildfly-dev/docker-entrypoint-initmw.d/");
	scriptsCopier.deleteScriptsInTargetDirectory();
	scriptsCopier.copyScriptsFromSourcesToTargetDirectory();
};

var dockerImages = new DockerImages();
dockerImages.build('java', 'links/java');
dockerImages.build('wildfly', 'links/wildfly');
dockerImages.build('wildfly-dev', 'links/wildfly-dev', wildflyPreRun);
dockerImages.build('postgres-dev', 'links/postgres-dev', postgresPreRun);

var dockerContainers = new DockerContainers();
dockerContainers.run('postgres-dev', 'links/postgres-dev', '-p 5432:5432 -e POSTGRES_PASSWORD=postgressecretpassword');
dockerContainers.waitFor('postgres-dev', 'database system is ready to accept connections');
dockerContainers.run('wildfly-dev', 'links/wildfly-dev', '-p 8080:8080 -p 9990:9990 --link=postgres-dev');
dockerContainers.waitFor('wildfly-dev', 'WildFly Full 10.1.0.Final (WildFly Core 2.2.0.Final) started');

new Command('../sources/libs/', 'mvn clean install').execute();
new Command('../sources/libs/accessibility', 'mvn clean install').execute();
new Command('../sources/libs/monitoring', 'mvn clean install').execute();
new Command('../sources/libs/events', 'mvn clean install').execute();
new Command('../sources/services', 'mvn clean install').execute();

new ParallelExecutor().withTimeoutInMillis(60000).execute(
	[
		[
			new Command('../sources/services/links-ui/', 'npm install'),
			new Command('../sources/services/links-ui/', 'npm run build-once'),
			new Command('../sources/services/links/', 'mvn clean install -P wildfly-local')
		],
		[
			new Command('../sources/services/description/', 'mvn clean install -P wildfly-local')
		]
	]
);
