var LoginPage = require("../../pageobjects/login.page");
var DashboardPage = require("../../pageobjects/dashboard.page");

describe("dashboard - users - settings - alerts", function() {
  it("alerts switch is there", function() {
    LoginPage.login("settings/accounts/account-1896/alerts");
    DashboardPage.alertRealTimeSwitch.waitForVisible();
    DashboardPage.alertRealTimeSwitch.should.exist;
  });

  it("alerts switch disable section", function() {
    DashboardPage.alertRealTimeSwitch.click();
    browser.pause(1000);
    DashboardPage.alertSelectAll.selector.should.not.be.visible;
  });

  it("alerts switch enable section", function() {
    DashboardPage.alertRealTimeSwitch.click();
    DashboardPage.alertSelectAll.waitForVisible();
    DashboardPage.alertSelectAll.selector.should.be.visible;
  });

  it("first dropdown options", function() {
    DashboardPage.alertFirstDropdown.click();
    DashboardPage.alertFirstDropdownOp1.waitForVisible();
    DashboardPage.alertFirstDropdownOp1.getText().should.contain("Goal Completion");
    DashboardPage.alertFirstDropdownOp2.getText().should.contain("All Engagements");
  });

  it("second dropdown options", function() {
    DashboardPage.alertSecondDropdown.click();
    DashboardPage.alertSecondDropdownOp1.waitForVisible();
    DashboardPage.alertSecondDropdownOp1.getText().should.contain("Once Per User");
    DashboardPage.alertSecondDropdownOp2.getText().should.contain("Every Time");
  });


});
