/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"docusign_ui5/docusign_ui5/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});