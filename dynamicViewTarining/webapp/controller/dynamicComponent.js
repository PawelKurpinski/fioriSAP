sap.ui.define([
	], function () {
		"use strict";
		return {
			createTable : function (oTable, oModel) {
				
				for (var key in oModel.getData().players[0]) {
					oTable.addColumn(new sap.m.Column({
						header: new sap.m.Text({
							text: [key]
						})
					}));
				}
	 
				var oTemplate = (new sap.m.ColumnListItem({
					cells: [
						new sap.m.Text({
							text: "{oModel>id}"
						}),
						new sap.m.Text({
							text: "{oModel>firstName}"
						}),
						new sap.m.Text({
							text: "{oModel>lastName}"
						}),
						new sap.m.Text({
							text: "{oModel>code}"
						}),
						new sap.m.Text({
							text: "{oModel>trainingId}"
						}),
						new sap.m.Text({
							text: "{oModel>positionId}"
						})
					]
				}));
	
				oTable.setModel(oModel, "oModel");
				oTable.bindItems("oModel>/players", oTemplate);
			}
		};
	}
);