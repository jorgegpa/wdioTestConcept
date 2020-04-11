const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://localhost:9000',
       options : {
       'sonar.tests' : 'test/specs/',
       'sonar.test.inclusions': 'test/specs/',
       'sonar.exclusions':'test/specs/'
       }
     }, () => {});