jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/festo/fiori/apps/so/apv/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/festo/fiori/apps/so/apv/test/integration/pages/App",
	"com/festo/fiori/apps/so/apv/test/integration/pages/Browser",
	"com/festo/fiori/apps/so/apv/test/integration/pages/Master",
	"com/festo/fiori/apps/so/apv/test/integration/pages/Detail",
	"com/festo/fiori/apps/so/apv/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.festo.fiori.apps.so.apv.view."
	});

	sap.ui.require([
		"com/festo/fiori/apps/so/apv/test/integration/NavigationJourneyPhone",
		"com/festo/fiori/apps/so/apv/test/integration/NotFoundJourneyPhone",
		"com/festo/fiori/apps/so/apv/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});