sap.ui.define(
	["sap/m/MessageBox"], 
	function (MessageBox) {
	"use strict";
	return {
		createTableTwo: function (oTableTwo, oModelTwo) {
			// var oModelTwoData = oModelTwo.getData().table[0].columns;
			for (var i = 0; i < oModelTwo.columns.length; i++) {
				oTableTwo.addColumn(new sap.m.Column({
					header: new sap.m.Text({
						text: oModelTwo.columns[i].name
					})
				}));
			}
			var newCells = [];
			// var oModelTwoDataItems = oModelTwo.getData().table[0].items[0];
			for (var key in oModelTwo.items[0]) {
				if (oModelTwo.items[0][key].semanticObject == null) {
					newCells.push(new sap.m.Text({
						text: "{oModelTwo>" + key + "/value}"
					}));
				} else {
					newCells.push(new sap.m.Link({
						text: "{oModelTwo>" + key + "/value}",
						press: function(oEvent) {  //this line is responsible for alert with getSource() function.
                            var text = oEvent.getSource().getProperty("text");
                            MessageBox.alert(text);
                        }
					}));
				}
			}
			var oTemplateTwo = (new sap.m.ColumnListItem({
				cells: newCells
			}));
			var detailedModel = new sap.ui.model.json.JSONModel();
			
			detailedModel.setData(oModelTwo);
			
			oTableTwo.setModel(detailedModel,"oModelTwo");
			oTableTwo.bindItems("oModelTwo>/items", oTemplateTwo);
		}
	};
});