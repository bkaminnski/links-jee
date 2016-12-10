var Thread =  Java.type("java.lang.Thread");
var Date =  Java.type("java.util.Date");

function DockerImages() {
    this.existingImages = loadExistingImages();

    function loadExistingImages () {
        $EXEC('docker images');
        return $OUT;
    }

    this.build = function(folder, image) {
        if (this.exists(image)) {
            print(image + ' image already exists');
            return;
        }
        print('building ' + image + ' image...');
        $ENV.PWD = './' + folder;
        $EXEC('docker build -t ' + image + ' .');
        print($OUT)
    }

    this.exists = function(image) {
        return this.existingImages.indexOf(image) >= 0;
    }
}

function DockerContainers() {
    this.runningContainers = loadRunningContainers();
    this.existingContainers = loadExistingContainers();
    
    function loadRunningContainers() {
        $EXEC('docker ps');;
        return $OUT;
    }

    function loadExistingContainers() {
        $EXEC('docker ps -a');
        return $OUT;
    }

    this.run = function(container, image, parameters) {
        if (this.isRunning(container)) {
            print(container + ' container is already running');
            return;
        }

        if (!this.exists(container)) {
            print('running ' + container + ' container...');
            $EXEC('docker run --name ' + container + ' -d ' + parameters + ' ' + image);
            print($OUT);
            return;
        }

        print('starting ' + container + ' container...');
        $EXEC('docker start ' + container);
        print($OUT);
    }

    this.isRunning = function(container) {
        return this.runningContainers.indexOf(container) >= 0;
    }

    this.exists = function(container) {
        return this.existingContainers.indexOf(container) >= 0;
    }

    this.waitFor = function(container, logEntry) {
        var lastLogLines = this.queryForLastLogs(container);
        var timeStarted = new Date().getTime();
        while (lastLogLines.indexOf(logEntry) === -1) {
            Thread.sleep(500);
            print('Waiting for ' + container + ' for ' + (new Date().getTime() - timeStarted) + ' millis');
            lastLogLines = this.queryForLastLogs(container);
        }
    }

    this.queryForLastLogs = function(container) {
        $EXEC('docker logs --tail=100 ' + container);
        return $OUT;
    }
}
