"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("cucumber-html-reporter"));
// An example configuration file
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/demo.feature'],
    cucumberOpts: {
        // require step definitions
        // tags: "@angularTesting",
        format: 'json:./cucumberreport.json',
        require: [
            './stepDefinations/*.js',
        ]
    },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberreport.json',
            output: './cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    }
    // Options to be passed to Jasmine-node.
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxpRUFBbUQ7QUFHbkQsZ0NBQWdDO0FBQ3JCLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLDRDQUE0QztJQUM1QyxrREFBa0Q7SUFDcEQsYUFBYSxFQUFDLElBQUk7SUFDbEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFJN0QsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBRUQsdUVBQXVFO0lBQ3ZFLDJDQUEyQztJQUMzQyxrQ0FBa0M7SUFDbEMsS0FBSyxFQUFFLENBQUMsMEJBQTBCLENBQUM7SUFDbkMsWUFBWSxFQUFFO1FBQ1YsMkJBQTJCO1FBQzVCLDJCQUEyQjtRQUMxQixNQUFNLEVBQUMsNEJBQTRCO1FBQ25DLE9BQU8sRUFBRTtZQUNMLHdCQUF3QjtTQUN6QjtLQUNGO0lBQ0QsVUFBVSxFQUFFLEdBQUUsRUFBRTtRQUVaLElBQUksT0FBTyxHQUFHO1lBQ1YsS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxNQUFNLEVBQUUsd0JBQXdCO1lBQ2hDLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ04sYUFBYSxFQUFDLE9BQU87Z0JBQ3JCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLFNBQVMsRUFBRSxzQkFBc0I7Z0JBQ2pDLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7YUFDdkI7U0FDSixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUdqQyxDQUFDO0lBRUgsd0NBQXdDO0NBRXpDLENBQUMifQ==