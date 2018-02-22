var LoginPage = require("../../pageobjects/login.page");
var DashboardPage = require("../../pageobjects/dashboard.page");

describe("dashboard - conversations - alerts", function() {
  it("alerts switch is there", function() {
    LoginPage.login("products/instabot/conversations/70535588/deploy");
    DashboardPage.alertConvoSwitch.waitForVisible();
    DashboardPage.alertConvoSwitch.should.exist;
    DashboardPage.alertConvoDisabled.should.exist;
  });

  it("enabling alert switch unlock section", function() {
    DashboardPage.alertConvoSwitch.click();
    browser.pause(1000);
    DashboardPage.alertConvoStatus.getText().should.contain("On");
  });

  it("hide note when every time is selected", function() {
    DashboardPage.alertConvoDropdown.click();
    browser.pause(1000);
    DashboardPage.alertConvoDropdownEvery.click();
    DashboardPage.alertConvoNote.selector.should.not.be.visible;
  },3);

  it("disabling alert switch lock section", function() {
    DashboardPage.alertConvoSwitch.click();
    DashboardPage.alertConvoStatus.getText().should.contain("Off");
  });

});
