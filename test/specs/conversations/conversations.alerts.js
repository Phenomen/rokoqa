var LoginPage = require("../../pageobjects/login.page");
var DashboardPage = require("../../pageobjects/dashboard.page");

describe("dashboard - conversations - alerts", function() {
  it("alerts switch is there", function() {
    LoginPage.login("products/instabot/conversations/70535588/deploy");
    DashboardPage.alertConvoSwitch.waitForVisible();
    DashboardPage.alertConvoSwitch.should.exist;
  });

  it("enabling alert switch unlock section", function() {
    DashboardPage.alertConvoSwitch.click();
    browser.pause(1000);
    DashboardPage.alertConvoStatus.getText().should.contain("On");
  });

  it("disabling alert switch lock section", function() {
    DashboardPage.alertConvoSwitch.click();
    browser.pause(1000);
    DashboardPage.alertConvoStatus.getText().should.contain("Off");
  });

  it("correct options in the list", function() {
    DashboardPage.alertConvoSwitch.click();
    browser.pause(1000);
    DashboardPage.alertConvoType.click();
    DashboardPage.alertOptionFirst.getText().should.contain("Goal Completion");
    DashboardPage.alertOptionSecond.getText().should.contain("All Engagements");
    DashboardPage.alertConvoFreq.click();
    DashboardPage.alertOptionFirst.getText().should.contain("Once Per User");
    DashboardPage.alertOptionSecond.getText().should.contain("Every Time");
  });

});
