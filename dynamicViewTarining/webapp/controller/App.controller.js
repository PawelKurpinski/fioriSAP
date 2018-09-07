sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"statement/test/controller/dynamicComponent"
], function(Controller, dynamicComponent) {
	"use strict";
	return Controller.extend("statement.test.controller.App", {

		doIt: function() {
			var oTable = this.getView().byId("table"),
				oModel = this.getView().getModel("players");
			dynamicComponent.createTable(oTable, oModel);
		}
	});
});