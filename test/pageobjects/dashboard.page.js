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
		alertConvoStatus:					{ get: function () { return $('label.toggle-button.toggle-button-ellipse'); } },
		alertConvoType:						{ get: function () { return $('insta-bot-triggers > div > div > div:nth-child(13) > instabot-triggers-email-settings > div > div > div:nth-child(1) > dropdown-v2 > div > span'); } },
		alertConvoFreq:				 		{ get: function () { return $('insta-bot-triggers > div > div > div:nth-child(13) > instabot-triggers-email-settings > div > div > div:nth-child(2) > dropdown-v2 > div > span'); } },
		alertConvoNote:						{ get: function () { return $('div.note'); } },
		alertOptionFirst:					{ get: function () { return $('.option:nth-of-type(1)'); } },
		alertOptionSecond:				{ get: function () { return $('.option:nth-of-type(2)'); } },


});

module.exports = formPage;
