jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 SalesOrders in the list
// * All 3 SalesOrders have at least one Items

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
		"com/festo/fiori/apps/so/apv/test/integration/MasterJourney",
		"com/festo/fiori/apps/so/apv/test/integration/NavigationJourney",
		"com/festo/fiori/apps/so/apv/test/integration/NotFoundJourney",
		"com/festo/fiori/apps/so/apv/test/integration/BusyJourney",
		"com/festo/fiori/apps/so/apv/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});