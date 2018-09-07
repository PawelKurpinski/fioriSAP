sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ZDPVMS.ITEM_DISPLAY.controller.App", {
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var sParsedUrl = new URL(window.location.href);
			var sId = parseInt(sParsedUrl.hash.valueOf("id").slice(25));
			//var sId = sParsedUrl.searchParams.get("id");
			if (sId === null) {
				oRouter.navTo("second");
			} else {
				oRouter.navTo("main");
			}
		}
	});
});