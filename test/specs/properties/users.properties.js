var LoginPage = require("../../pageobjects/login.page");
var DashboardPage = require("../../pageobjects/dashboard.page");

describe("dashboard - users - settings - properties", function() {
  it("new property is created", function() {
    LoginPage.login("user-management/settings");
    DashboardPage.blueButton.waitForVisible();
    DashboardPage.blueButton.click();
    DashboardPage.propertyName.waitForVisible();
    DashboardPage.propertyName.setValue("Autotest");
    DashboardPage.propertyType.waitForVisible();
    DashboardPage.propertyType.click();
    DashboardPage.propertyString.waitForVisible();
    DashboardPage.propertyString.click();
    DashboardPage.propertyDescription.setValue("Autotest Property Description");
    DashboardPage.propertySave.click();

  });

  it("property is deleted", function() {



  });

});
