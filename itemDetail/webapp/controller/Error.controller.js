sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ZDPVMS.ITEM_DISPLAY.controller.Error", {
		
			// onInit: function(){
			// 	this.getOwnerComponent().getRouter().getRoute("main").attachPatternMatched(this._onMasterMatched, this);	
			// },
			// _onMasterMatched :  function() {
			// 	var objectId;
			// 	var startupParams = this.getOwnerComponent().getComponentData().startupParameters;
			// },
			goToSecondPage : function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("second");
		}
	});
});