var LoginPage = require("../../pageobjects/login.page");

describe("login page - forgot password -", function() {
  it("error message with non-existing email", function() {
    LoginPage.open();
    LoginPage.forgotPassword.click();
    LoginPage.email.setValue(vFakeEmail);
    LoginPage.forgotPasswordReset.click();
    LoginPage.incorrectCreds.waitForVisible();
    LoginPage.incorrectCreds.getText().should.contain("Admin user with email passed not found.");
  });

  it("password reset succesful with existing email", function() {
    LoginPage.email.setValue(vRealEmail);
    LoginPage.forgotPasswordReset.click();
    LoginPage.forgotPasswordSuccess.waitForVisible();
    LoginPage.forgotPasswordSuccess.getText().should.contain("Email has been sent to your email address");
  });
});
