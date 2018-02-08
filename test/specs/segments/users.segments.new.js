var LoginPage = require("../../pageobjects/login.page");
var DashboardPage = require("../../pageobjects/dashboard.page");

describe("dashboard users segments create and delete", function() {
  it("new segment is created", function() {
    LoginPage.login();
    browser.url(vEnvironment + "user-management/segments-v2/0/edit");
    DashboardPage.rokoTitle.waitForVisible();
    DashboardPage.segmentNameInput.setValue("Autotest Segment");
    DashboardPage.segmentPropertyA1.waitForVisible();
    DashboardPage.segmentPropertyA1.setValue("User Property");
    DashboardPage.segmentPropertyA2.waitForVisible();
    DashboardPage.segmentPropertyA2.setValue("Country");
    DashboardPage.segmentPropertyA3.waitForVisible();
    DashboardPage.segmentPropertyA3.setValue("Is");
    DashboardPage.segmentPropertyA4.waitForVisible();
    DashboardPage.segmentPropertyA4.click();
    DashboardPage.segmentPropertyA4A.waitForVisible();
    DashboardPage.segmentPropertyA4A.click();
    DashboardPage.blueButton.click();
    browser.url(vEnvironment + "user-management/segments-v2");
    DashboardPage.segmentFirstRow.waitForVisible();
    DashboardPage.searchField.setValue("Autotest");
    DashboardPage.searchButton.click();
    browser.waitUntil(function() { return DashboardPage.segmentFirstRow.getText() === 'Autotest Segment' }, 5000);
    DashboardPage.segmentFirstRow.getText().should.contain("Autotest Segment");
  });

  it("created segment is deleted", function() {
    DashboardPage.segmentFirstRow.click();
    DashboardPage.segmentEdit.waitForVisible();
    DashboardPage.segmentEdit.click();
    DashboardPage.segmentDelete.waitForVisible();
    DashboardPage.segmentDelete.click();
    DashboardPage.segmentDeleteConfirm.waitForVisible();
    DashboardPage.segmentDeleteConfirm.click();
    DashboardPage.segmentFirstRow.waitForVisible();
    DashboardPage.rokoTitle.getText().should.contain("User Segments");
  });
});
