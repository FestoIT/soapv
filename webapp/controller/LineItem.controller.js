sap.ui.define([
		"com/festo/fiori/apps/so/apv/controller/LineItem",
		"sap/ui/model/json/JSONModel",
		"com/festo/fiori/apps/so/apv/model/formatter"
	], function (BaseController, JSONModel, formatter) {
		"use strict";
		
		return BaseController.extend("com.festo.fiori.apps.so.apv.controller.LineItem", {

			formatter: formatter,
			
			handleNavBack : function (oEvent) { 
				this.nav.back("Detail");
			}
		});
});