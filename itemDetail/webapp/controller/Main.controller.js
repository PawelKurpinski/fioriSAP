sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"ZDPVMS/ITEM_DISPLAY/controller/dynamicComponent",
	"sap/ui/core/routing/History"
], function(Controller, dynamicComponent, History) {
	"use strict";

	return Controller.extend("ZDPVMS.ITEM_DISPLAY.controller.Main", {
			onShowSecondTable: function() {
			var oTableTwo = this.getView().byId("table"),
				oModelTwo = this.getView().getModel("table").getData().table[0];
				dynamicComponent.createTableTwo(oTableTwo, oModelTwo);
		},
		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-2);
			} 
			else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("main", {}, true);
			}
		},
		onIconTabBarChanged : function(oEvent, onShowSecondTab  ) {
            var key = oEvent.getParameters().key;
            if(key ==='1') {
              this.onShowSecondTable();
            }
        },
        onPrint : function(oEvent) {
    		 var oTarget = this.getView(),
				$domTarget = oTarget.$()[0],
                sTargetContent = $domTarget.innerHTML,
                sOriginalContent = document.body.innerHTML;
	            document.body.innerHTML = sTargetContent;
	            window.print();
	            document.body.innerHTML = sOriginalContent;
		 }
	});
});