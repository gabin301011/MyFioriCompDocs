/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"name1/project1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
