sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Component",
	"sap/ui/model/json/JSONModel",
	"sap/ui/comp/odata/MetadataAnalyser",
	"sap/ui/comp/providers/ValueHelpProvider",
	"sap/ui/model/Sorter",
	"sap/ui/Device",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterType",
	"sap/ui/model/FilterOperator",
	"sap/ui/core/ValueState",
	"./SubControllerForShare",
	"nw/epm/refapps/ext/prod/manage/model/formatter"
], function(Controller, Component, JSONModel, MetadataAnalyser, ValueHelpProvider, Sorter, Device, Filter, FilterType, FilterOperator,
	ValueState, SubControllerForShare, formatter) {
	"use strict";
	
		function fnArrayFilteredTruthy(aArray) {
		var aCopy = null;
		for (var i = 0; i < aArray.length; i++) {
			var oEntry = aArray[i];
			if (oEntry) {
				if (aCopy) {
					aCopy.push(oEntry);
				}
			} else if (!aCopy) {
				aCopy = aArray.slice(0, i);
			}
		}
		return aCopy || aArray;
	}
	
	return Controller.extend("com.festo.fiori.apps.so.apv.controller.CreateOrder", {
		formatter: formatter,
		
		onInit: function() {
			this.oView = this.getView();
			this.initViewPropertiesModel();
			var oComponent = this.getOwnerComponent();
		}
	});
});