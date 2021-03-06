# CI environment

## Provisioning

### Vagrant

Tested on Windows 10 Pro, Vagrant 1.9.1, Oracle VirtualBox 5.1.10.

1. Install [Oracle VirtualBox](http://www.oracle.com/technetwork/server-storage/virtualbox/downloads/index.html)
1. Install [Vagrant](https://www.vagrantup.com/downloads.html)
2. Open console and install [vagrant-vbguest plugin](https://github.com/dotless-de/vagrant-vbguest): `vagrant plugin install vagrant-vbguest`
3. Clone [this git project](https://github.com/bkaminnski/links.git) or download [this Vagrantfile](https://raw.githubusercontent.com/bkaminnski/links/master/ci/vagrant/Vagrantfile)
4. Go to a folder with `Vagrantfile` and run `vagrant up` with the following parameters (in between `vagrant` and `up`, custom vagrant parameters won't work otherwise):
    - `--os_user_name=<OS user name>`
        - the name of a new OS user (obligatory)
    - `--git_user_name=<GIT full user name>`
        - GIT full user name (optional - only to be able to commit)
    - `--git_email=<GIT e-mail>` 
        - GIT e-mail (optional - only to be able to commit)
4. Sample commands:
    - just to run the project: `vagrant --os_user_name=baka up`
    - full contribution: `vagrant --os_user_name=baka --git_user_name="Bartosz Kamiński" --git_email=bartosz.kaminski@zoho.com up` 

### From scratch

Tested on [arubacloud.com](http://arubacloud.com), Server Smart.

1. Create a new VM (CentOS 7.x 64bit)
2. Login as root and download provisioning script `curl -O https://raw.githubusercontent.com/bkaminnski/links/master/ci/provisionCentOS7.sh && chmod 755 ./provisionCentOS7.sh`
3. Run the script with the following parameters:
    - `--os_user_name <OS user name>`
        - the name of a new OS user (obligatory)
    - `--git_user_name <GIT full user name>`
        - GIT full user name (optional - only to be able to commit)
    - `--git_email <GIT e-mail>` 
        - GIT e-mail (optional - only to be able to commit)
4. Sample commands:
    - just to run the project: `./provisionCentOS7.sh --os_user_name baka` 
    - full contribution: `./provisionCentOS7.sh --os_user_name baka --git_user_name "Bartosz Kamiński" --git_email bartosz.kaminski@zoho.com` 

### Provisioning script

The script will:

1. create a new OS user (with `os_user_name` name, added to sodoers),
2. update OS,
3. install all the software necessary to run the system:
    - Oracle JDK to run javascript shell scripts (version 1.8.0 update 102),
    - GIT,
    - Docker,
    - npm,
    - mvn
4. clone this GIT repository in `/home/os_user_name/links` folder,
5. generate public/private keys for authentication (to be found in `/home/new_OS_user/.ssh` folder)
6. in case of provisioning in Vagrant environment, the private key will be copied also here `/vagrant/ci/vagrant/.vagrant/machines/default/virtualbox/private_key_<os_user_name>` for more convenient access from the host machines
7. make `up.sh` run on system startup, to run docker containers, compile and deploy application,
8. call `up.sh` script,

## Development environment in Windows

1. Download and install
    - [JDK 1.8 latest version](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
    - [Apache Maven](http://maven.apache.org/install.html)
    - [Docker Toolbox](https://github.com/docker/toolbox/releases) or [Native Windows Docker](https://download.docker.com/win/stable/InstallDocker.msi) (note that Hyper-V is required in the latter case, and in such case Oracle VirtualBox will not work).
    - [NodeJS](https://nodejs.org/en/)
2. Configure environment variables 
    - Add JDK `bin` folder and Maven `bin` folder to `Path` 
    - Set proper value of `JAVA_HOME`  
3. In case of Docker Toolbox, go to a `ci` folder and run `windowsDockerMachineUp.ps1` in PowerShell window (`Run as Administrator` might be required) to create/start docker machine. Docker machine is not required in case of Native Windows Docker. 
4. Go to a `ci` folder and run `jjs .\up.js` and next `jjs .\deploy.js`.

## Explanations

1. I decided to use JavaScript executed in [Nashorn](http://www.oracle.com/technetwork/articles/java/jf14-nashorn-2126515.html) (delivered by default with Java 8) for better operating system interoperability. The same script ([`up.js`](https://github.com/bkaminnski/links/blob/master/ci/up.js)) is used to start docker containers, recompile and redeploy the application on both Linux and Windows machines.
2. All middleware and database infrastructure initialization scripts (database driver installation, topic configuration, datasources definition in wildfly, creating databases) are kept in the [`wildfly ci folder`](https://github.com/bkaminnski/links/tree/master/ci/docker/wildfly-configured/docker-entrypoint-initmw.d) and [`postgres ci folder`](https://github.com/bkaminnski/links/tree/master/ci/docker/postgres-configured/init-databases). Other database scripts are kept in the sources in a separate directory for each project, like [`links-db`](https://github.com/bkaminnski/links/tree/master/sources/links-db).
3. There is a wrapper around docker API, to help the [`up.js`](https://github.com/bkaminnski/links/blob/master/ci/up.js) script work with docker containers regardless of their state. For example in case a container has already been created, but is currently down, it will be only started (`docker start ...`). If the container is already running - nothing will happen. And in case it does not exist yet - it will be created (`docker run ...`).
4. Have a look in the [scripts](https://github.com/bkaminnski/links/tree/master/ci/scripts) directory to see all the auxiliary scripts.