sap.ui.define([
	"com/festo/fiori/apps/so/apv/controller/BaseController",
	"sap/ui/core/Component",
	"sap/ui/model/json/JSONModel",
	"com/festo/fiori/apps/so/apv/model/formatter"
], function(Controller, Component, JSONModel, formatter) {
	"use strict";

	return Controller.extend("com.festo.fiori.apps.so.apv.controller.LineItem", {
		formatter: formatter,

			onInit : function () {
				// Model used to manipulate control states. The chosen values make sure,
				// detail page is busy indication immediately so there is no break in
				// between the busy indication for loading the view's meta data
				var oViewModel = new JSONModel({
					busy : false,
					delay : 0,
					lineItemListTitle : this.getResourceBundle().getText("detailLineItemTableHeading")
				});

				this.setModel(oViewModel, "lineitemView");
				this.getRouter().getRoute("lineitem").attachPatternMatched(this._onObjectMatched, this);

//				this.getOwnerComponent().getModel().metadataLoaded().then(this._onMetadataLoaded.bind(this));
			}
			
	});
});