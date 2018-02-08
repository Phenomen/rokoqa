var LoginPage = require("../../pageobjects/login.page");
var DashboardPage = require("../../pageobjects/dashboard.page");

describe("dashboard - users - settings - properties -", function() {
  it("existing user is found", function() {
    LoginPage.login("user-management/settings");

  });
});
