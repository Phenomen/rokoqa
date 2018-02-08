var LoginPage = require("../../pageobjects/login.page");
var DashboardPage = require("../../pageobjects/dashboard.page");

describe("dashboard users segments", function() {
  it("search for segment show correct results", function() {
    LoginPage.login();
    browser.url(vEnvironment + "user-management/segments-v2");
    DashboardPage.searchField.waitForVisible();
    DashboardPage.searchField.setValue("Power");
    DashboardPage.searchButton.click();
    browser.waitUntil(function() { return DashboardPage.segmentFirstRowP.getText() === 'Power Sharers' }, 5000);
    DashboardPage.segmentFirstRowP.getText().should.contain("Power Sharers");
  });

  it("clear button resets filters", function() {
    DashboardPage.clearButton.click();
    browser.waitUntil(function() { return DashboardPage.segmentFirstRow.getText() != 'Power Sharers' }, 5000);
    DashboardPage.segmentFirstRow.getText().should.not.contain("Power Sharers");
  });

  it("deactivate segment button change status of selected segment to inactive", function() {
    browser.pause(1000);
    DashboardPage.firstCheckbox.click();
    DashboardPage.deactivateButton.waitForVisible();
    DashboardPage.deactivateButton.click();
    browser.waitUntil(function() { return DashboardPage.rowStatus.getText() === 'Inactive' }, 5000);
    DashboardPage.rowStatus.getText().should.contain("Inactive");
  });

  it("activate segment button change status of selected segment to active", function() {
    browser.pause(1000);
    DashboardPage.firstCheckbox.click();
    DashboardPage.activateButton.waitForVisible();
    DashboardPage.activateButton.click();
    browser.waitUntil(function() { return DashboardPage.rowStatus.getText() === 'Active' }, 5000);
    DashboardPage.rowStatus.getText().should.contain("Active");
  });
});
