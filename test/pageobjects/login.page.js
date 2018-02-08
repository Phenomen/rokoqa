var page = require('./page');
var DashboardPage = require('./dashboard.page');

var formPage = Object.create(page, {

		email:                    { get: function () { return $('input[type="email"]'); } },
		password:                 { get: function () { return $('input[type="password"]'); } },
		submitButton:             { get: function () { return $('.submit.button'); } },
		emailError:               { get: function () { return $('#Email-error'); } },
		passwordError:            { get: function () { return $('#Password-error'); } },
		forgotPassword:           { get: function () { return $('.reset-password'); } },
		forgotPasswordReset:      { get: function () { return $('.submit[data-bind="click: sendResetPasswordEmail"]'); } },
		forgotPasswordSuccess:    { get: function () { return $('.password-reset-message'); } },
		incorrectCreds:						{ get: function () { return $('.error'); } },


		open: { value: function() {
				page.open.call(this, '');
		} },

		submit: { value: function() {
				this.submitButton.click();
		} },

		login: { value: function() {
				this.open();
				this.email.setValue(vRealUsername);
				this.password.setValue(vRealPassword);
				this.submit();
				DashboardPage.rokoTitle.waitForExist();
		} }


});

module.exports = formPage;
