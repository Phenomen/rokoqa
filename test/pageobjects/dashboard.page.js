var page = require('./page');

var formPage = Object.create(page, {

		// General
		rokoTitle:								{ get: function () { return $('.page-header .page-title'); } },
		pageTitle:								{ get: function () { return $('.page-title .title'); } },
		searchField:							{ get: function () { return $('.search'); } },
		searchButton:							{ get: function () { return $('.search-btn'); } },
		clearButton:							{ get: function () { return $('.clear span'); } },
		platformSelect:						{ get: function () { return $('client-platform-filter'); } },
		platformMobile:						{ get: function () { return $('span*=Mobile'); } },
		appSelect:								{ get: function () { return $('app-filter'); } },
		appMain:									{ get: function () { return $('span*='+vApplication); } },
		userNotFound:							{ get: function () { return $('.no-records-message'); } },
    settingsButton:						{ get: function () { return $('.settings-btn a'); } },
		firstUserRow:							{ get: function () { return $('div:nth-of-type(2) .grid-cell.name a'); } },
		filteredUserRow:					{ get: function () { return $('.grid .grid-row .grid-cell.name'); } },
		firstCheckbox:         		{ get: function () { return $('.grid div:nth-child(2) div:nth-child(1) input[type="checkbox"]'); } },
		deactivateButton:        	{ get: function () { return $('.actions span:nth-child(5)'); } },
		activateButton:        		{ get: function () { return $('.actions span:nth-child(6)'); } },
		rowStatus:        				{ get: function () { return $('.grid div:nth-of-type(2) .grid-cell.status'); } },
		blueButton:     					{ get: function () { return $('.btn.blue'); } },
		backButton:     					{ get: function () { return $('.filter .back-btn'); } },

		// Segments
		segmentNameInput:					{ get: function () { return $('.main-section div:nth-child(1) input'); } },
		segmentPropertyA1:				{ get: function () { return $('.col.filter-type-col dropdown-v2 input[type="text"]'); } },
		segmentPropertyA2:				{ get: function () { return $('.col.filter-col div:nth-child(1) input[type="text"]'); } },
		segmentPropertyA3:				{ get: function () { return $('.col.filter-col div:nth-child(2) input[type="text"]'); } },
		segmentPropertyA4:				{ get: function () { return $('.col.filter-col div:nth-child(3) input[type="text"]'); } },
    segmentPropertyA4A:				{ get: function () { return $('li.option span'); } },
		segmentEdit:							{ get: function () { return $('.page-top-actions .buttons .btn.empty'); } },
		segmentDelete:						{ get: function () { return $('.page-top-actions .buttons .btn.red'); } },
		segmentDeleteConfirm:			{ get: function () { return $('.dialog-overlay.confirmation-dialog footer .btn.btn-red'); } },
		segmentFirstRow:					{ get: function () { return $('.grid div:nth-of-type(2) div:nth-of-type(2) a'); } },
		segmentFirstRowP:					{ get: function () { return $('.grid div:nth-of-type(2) div:nth-of-type(2) a'); } },

		// Properties
		propertyName:							{ get: function () { return $('#Name'); } },
		propertyType:							{ get: function () { return $('div:nth-of-type(2) div:nth-of-type(1) dropdown-v2 div.input-box input'); } },
		propertyString:						{ get: function () { return $('div:nth-of-type(4) ul li:nth-of-type(1) a'); } },
		propertyDescription:			{ get: function () { return $('#Description'); } },
		propertySave:							{ get: function () { return $('.btn.btn-blue'); } },
		propertyRow:							{ get: function () { return $('span*=Autotest'); } },

		// Alerts in settings
		alertRealTimeSwitch: 			{ get: function () { return $('div:nth-of-type(2) > div:nth-of-type(1) > label.toggle-button > div.switch'); } },
		alertSelectAll:						{ get: function () { return $('div:nth-of-type(2) > label.common-checkbox.small > span.icon'); } },
  	alertFirstCheckbox:				{ get: function () { return $('div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > dropdown-v2:nth-child(2)'); } },
		alertFirstDropdown: 			{ get: function () { return $('div:nth-of-type(2) > div:nth-of-type(2) > div.conversations > div:nth-of-type(1) > dropdown-v2:nth-of-type(1) > div.input-box.has-options > span'); } },
		alertFirstDropdownOp1: 		{ get: function () { return $('div:nth-of-type(5) > ul > li:nth-of-type(1) > a > span'); } },
		alertFirstDropdownOp2:		{ get: function () { return $('span > span'); } },
		alertSecondDropdown: 			{ get: function () { return $('div:nth-of-type(2) > div:nth-of-type(2) > div.conversations > div:nth-of-type(1) > dropdown-v2:nth-of-type(2) > div.input-box.has-options > span'); } },
		alertSecondDropdownOp1: 	{ get: function () { return $('div:nth-of-type(6) > ul > li:nth-of-type(1) > a'); } },
		alertSecondDropdownOp2:		{ get: function () { return $('span > span'); } },

		// Alerts in conversations
		alertConvoSwitch:					{ get: function () { return $('label.toggle-button.toggle-button-ellipse > div.switch'); } },
		alertConvoStatus:					{ get: function () { return $('label.toggle-button'); } },
		alertConvoDisabled: 			{ get: function () { return $('div.form-groups > div:nth-of-type(2) > div.label.disabled'); } },
		alertConvoNote:						{ get: function () { return $('div.note'); } },
		alertConvoDropdown:				{ get: function () { return $('div.form-groups > div:nth-of-type(2) > dropdown-v2 > div.input-box.has-options > span'); } },
		alertConvoDropdownEvery: 	{ get: function () { return $('ul > li:nth-of-type(2)'); } },

		// Billing
		billingBlueButton:				{ get: function () { return $('div.page-content.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > div.btn.blue'); } },
		billingName:							{ get: function () { return $('body > div.dialog-overlay.billing-dialog > div > div:nth-child(1) > div.dialog-body > div > div:nth-child(2) > div > input'); } },
		billingNumber:						{ get: function () { return $('#root > form > span:nth-child(4) > label > input'); } },
		billingExpiration:				{ get: function () { return $('#root > form > span:nth-child(4) > label > input'); } },
		billingCVC:								{ get: function () { return $('input[name="cvc"]'); } },
		billingEmail:							{ get: function () { return $('div.form > div:nth-of-type(4) > div:nth-of-type(1) > input'); } },
		billingZip:								{ get: function () { return $('input[name="postal"]'); } },
		billingNotify:						{ get: function () { return $('div.notification-bar.notify-error > div > div.text'); } },
		billingSubmit:						{ get: function () { return $('div.btn.blue.submit'); } },

});

module.exports = formPage;
