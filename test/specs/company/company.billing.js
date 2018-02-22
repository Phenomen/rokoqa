var LoginPage = require("../../pageobjects/login.page");
var DashboardPage = require("../../pageobjects/dashboard.page");

describe("dashboard - company settings - billing", function() {
  it("add incorrect card", function() {
    LoginPage.login("settings/billing");
    DashboardPage.billingBlueButton.waitForVisible();
    DashboardPage.billingBlueButton.click();
    DashboardPage.billingName.waitForVisible();
    DashboardPage.billingName.setValue("John Smith");
    DashboardPage.billingNumber.setValue("4000000000000127");
    DashboardPage.billingExpiration.setValue("12/24");
    DashboardPage.billingCVC.setValue("777");
    DashboardPage.billingEmail.setValue("foo@bar.com");
    DashboardPage.billingZip.setValue("60125");
    DashboardPage.billingSubmit.click();
    DashboardPage.billingNotify.waitForVisible();
    DashboardPage.billingNotify.getText().should.contain("Your card's security code is incorrect.");
  });
});
