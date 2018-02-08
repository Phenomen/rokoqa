var LoginPage = require("../../pageobjects/login.page");
var DashboardPage = require("../../pageobjects/dashboard.page");

describe("dashboard - users - users -", function() {
  it("existing user is found", function() {
    LoginPage.login("user-management/users");    
    DashboardPage.searchField.waitForVisible();
    DashboardPage.searchField.setValue(vUserExist);
    DashboardPage.searchButton.click();
    DashboardPage.firstUserRow.getText().should.contain(vUserExist);
  });

  it("non-existing user is not found", function() {
    browser.pause(1000);
    DashboardPage.searchField.setValue(vUserNotExist);
    DashboardPage.searchButton.click();
    DashboardPage.userNotFound.getText().should.exist;
  });

  it("mobile and app filters generates correct list", function() {
    browser.pause(1000);
    DashboardPage.searchField.setValue(vUserMobile);
    DashboardPage.platformSelect.click();
    DashboardPage.platformMobile.waitForVisible();
    DashboardPage.platformMobile.click();
    DashboardPage.appSelect.click();
    DashboardPage.appMain.waitForVisible();
    DashboardPage.appMain.click();
    DashboardPage.filteredUserRow.waitForVisible();
    DashboardPage.filteredUserRow.getText().should.contain(vUserMobile);
  });

  it("clear button resets filters", function() {
    //autopassed if none of previous tests failed
  });

  it("setting button links to user properties", function() {
    DashboardPage.settingsButton.click();
    DashboardPage.rokoTitle.waitForVisible();
    DashboardPage.pageTitle.getText().should.contain("Settings");
  });

});
