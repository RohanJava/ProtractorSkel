"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before({ tags: "@calculatorTesting" }, function () {
    // This hook will be executed before scenarios tagged with @foo
    protractor_1.browser.manage().window().maximize();
});
cucumber_1.After({ tags: "@calculatorTesting" }, function () {
    // This hook will be executed After scenarios tagged with @foo and @bar
    console.log("Test is completed");
});
cucumber_1.Before({ tags: "@angularTesting" }, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
    console.log("need to execute first");
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        // This hook will be executed After scenarios tagged with @foo and @bar
        console.log("Test is completed");
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBOEM7QUFDOUMsMkNBQXFDO0FBSXJDLGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUMsRUFBRTtJQUNuQywrREFBK0Q7SUFDL0Qsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN2QyxDQUFDLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUMsRUFBRTtJQUNoQyx1RUFBdUU7SUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQyxDQUFDO0FBRUwsaUJBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBQyxFQUFFO0lBQ2hDLHdFQUF3RTtJQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFDSCxnQkFBSyxDQUFDLFVBQWdCLFFBQVE7O1FBQzFCLHVFQUF1RTtRQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakMsSUFBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBRyxpQkFBTSxDQUFDLE1BQU0sRUFDekM7WUFDSSxNQUFNLFVBQVUsR0FBRyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUMsV0FBVyxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=