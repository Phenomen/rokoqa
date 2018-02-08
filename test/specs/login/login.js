var LoginPage = require("../../pageobjects/login.page");
var DashboardPage = require("../../pageobjects/dashboard.page");

describe("login page", function() {
  it("error message with empty fields", function() {
    LoginPage.open();
    LoginPage.submit();
    LoginPage.emailError.getText().should.contain("The Email field is required.");
    LoginPage.passwordError.getText().should.contain("This field is required.");
  });

  it("error message with non-valid email", function() {
    LoginPage.email.setValue(vFakeUsername);
    LoginPage.submit();
    LoginPage.emailError.getText().should.contain("Please enter a valid Email address.");
  });

  it("deny access with wrong credentials", function() {
    LoginPage.email.setValue(vFakeEmail);
    LoginPage.password.setValue(vFakePassword);
    LoginPage.submit();
    LoginPage.incorrectCreds.waitForVisible();
    LoginPage.incorrectCreds.getText().should.contain("We're sorry but that email doesn't exist in our system. Please check the spelling or click sign up to create an account");
  });

  it("allow access with correct credentials", function() {
    LoginPage.login();
    DashboardPage.rokoTitle.waitForVisible();
    DashboardPage.rokoTitle.getText().should.exist;
  });
});
