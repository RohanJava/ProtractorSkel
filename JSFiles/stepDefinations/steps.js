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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../pageObjects/calculator");
const protractor_1 = require("protractor");
const angularHomePage_1 = require("../pageObjects/angularHomePage");
const chai_1 = __importDefault(require("chai"));
let calc = new calculator_1.calculator();
let ah = new angularHomePage_1.angularHomePage();
var expect = chai_1.default.expect;
cucumber_1.Given('I will navigate to Calc site', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
cucumber_1.Given('I will navigate to {string} page', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    if (string == "Calc") {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (string == "Angularjs") {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
}));
cucumber_1.When('I clicked on header link', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield ah.angularLink.click();
}));
cucumber_1.When('you will navigate to angular page', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("navigate to new page");
});
cucumber_1.Then('you will enter {string} in search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    protractor_1.browser.sleep(3000);
    yield ah.search.sendKeys(string);
}));
cucumber_1.Then('the output displayed should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.go.click();
    yield calc.getResult.getText().then(function (text) {
        expect(text).to.equal(string);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMERBQXVEO0FBQ3ZELDJDQUFtQztBQUNuQyxvRUFBaUU7QUFDakUsZ0RBQXdCO0FBRXhCLElBQUksSUFBSSxHQUFDLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQzFCLElBQUksRUFBRSxHQUFDLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBQzdCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsZ0JBQUssQ0FBQyw4QkFBOEIsRUFBRSxHQUFRLEVBQUU7SUFDNUMsb0VBQW9FO0lBQ3BFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztBQUNqRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyxrQ0FBa0MsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQ3hELG9FQUFvRTtJQUNwRSxJQUFHLE1BQU0sSUFBRSxNQUFNLEVBQ3JCO1FBQ0ksTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0tBQ2xFO1NBQ0ksSUFBRyxNQUFNLElBQUUsV0FBVyxFQUMzQjtRQUNJLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztLQUMvQztBQUVDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMseUNBQXlDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsT0FBTyxFQUFDLEVBQUU7SUFDdkUsb0VBQW9FO0lBQ3BFLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLDBCQUEwQixFQUFFLEdBQVEsRUFBRTtJQUN6QyxvRUFBb0U7SUFDcEUsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQy9CLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsbUNBQW1DLEVBQUU7SUFDeEMsb0VBQW9FO0lBQ3BFLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx1Q0FBdUMsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQzVELG9FQUFvRTtJQUNwRSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMseUNBQXlDLEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUM5RCxvRUFBb0U7SUFDaEUsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1FBRTlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRW5DLENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9