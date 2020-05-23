/*eslint-disable no-console, no-alert */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("docusign_ui5.docusign_ui5.controller.View1", {

		_pressButton: function () {
			var oModel = this.getView().getModel().getData();

			console.log(oModel.employeeFullName);
			console.log(oModel.date);
			console.log(oModel.date2);

			var sinceDate = oModel.date;
			var splitSinceDate = sinceDate.split("/");
			var sinceMonth = splitSinceDate[0];
			var sinceDay = splitSinceDate[1];
			var sinceYear = splitSinceDate[2];

			var toDate = oModel.date2;
			var splitToDate = toDate.split("/");
			var toMonth = splitToDate[0];
			var toDay = splitToDate[1];
			var toYear = splitToDate[2];

			var templateData = {
				"templateId": "<templateId>",
				"emailSubject": "Envio de Docusign",
				"status": "sent",
				"emailAccount": "<emailAccount>", //Email account from docusign
				"password": "<password>", //Password from docusign (I know, it just a demo!!!)
				"integratorKey": "<integratorKey>",
				"accountId": "<accountId>",
				"templateRoles": [{
					"email": "<email>",
					"name": "<name>",
					"roleName": "Signer",
					"tabs": {
						"textTabs": [{
							"tabLabel": "employeeFullName",
							"value": "Mariajose Martinez"
						}, {
							"tabLabel": "occupation",
							"value": "Ingeniero de Preventa"
						}, {
							"tabLabel": "CU_1",
							"value": oModel.CURP[0]
						}, {
							"tabLabel": "CU_2",
							"value": oModel.CURP[1]
						}, {
							"tabLabel": "CU_3",
							"value": oModel.CURP[2]
						}, {
							"tabLabel": "CU_4",
							"value": oModel.CURP[3]
						}, {
							"tabLabel": "CU_5",
							"value": oModel.CURP[4]
						}, {
							"tabLabel": "CU_6",
							"value": oModel.CURP[5]
						}, {
							"tabLabel": "CU_7",
							"value": oModel.CURP[6]
						}, {
							"tabLabel": "CU_8",
							"value": oModel.CURP[7]
						}, {
							"tabLabel": "CU_9",
							"value": oModel.CURP[8]
						}, {
							"tabLabel": "CU_10",
							"value": oModel.CURP[9]
						}, {
							"tabLabel": "CU_11",
							"value": oModel.CURP[10]
						}, {
							"tabLabel": "CU_12",
							"value": oModel.CURP[11]
						}, {
							"tabLabel": "CU_13",
							"value": oModel.CURP[12]
						}, {
							"tabLabel": "CU_14",
							"value": oModel.CURP[13]
						}, {
							"tabLabel": "CU_15",
							"value": oModel.CURP[14]
						}, {
							"tabLabel": "CU_16",
							"value": oModel.CURP[15]
						}, {
							"tabLabel": "CU_17",
							"value": oModel.CURP[16]
						}, {
							"tabLabel": "job",
							"value": oModel.job
						}, {
							"tabLabel": "companyName",
							"value": oModel.companyName
						}, {
							"tabLabel": "RF_1",
							"value": ""
						}, {
							"tabLabel": "RF_2",
							"value": oModel.RFC[0]
						}, {
							"tabLabel": "RF_3",
							"value": oModel.RFC[1]
						}, {
							"tabLabel": "RF_4",
							"value": oModel.RFC[2]
						}, {
							"tabLabel": "RF_5",
							"value": oModel.RFC[3]
						}, {
							"tabLabel": "RF_6",
							"value": oModel.RFC[4]
						}, {
							"tabLabel": "RF_7",
							"value": oModel.RFC[5]
						}, {
							"tabLabel": "RF_8",
							"value": oModel.RFC[6]
						}, {
							"tabLabel": "RF_9",
							"value": oModel.RFC[7]
						}, {
							"tabLabel": "RF_10",
							"value": oModel.RFC[8]
						}, {
							"tabLabel": "RF_11",
							"value": oModel.RFC[9]
						}, {
							"tabLabel": "RF_12",
							"value": oModel.RFC[10]
						}, {
							"tabLabel": "RF_13",
							"value": oModel.RFC[11]
						}, {
							"tabLabel": "courseName",
							"value": oModel.courseArea
						}, {
							"tabLabel": "hourDuration",
							"value": oModel.hourDuration
						}, {
							"tabLabel": "since_year_1",
							"value": "2"
						}, {
							"tabLabel": "since_year_2",
							"value": "0"
						}, {
							"tabLabel": "since_year_3",
							"value": sinceYear[0]
						}, {
							"tabLabel": "since_year_4",
							"value": sinceYear[1]
						}, {
							"tabLabel": "since_month_1",
							"value": sinceMonth[0]
						}, {
							"tabLabel": "since_month_2",
							"value": sinceMonth[1]
						}, {
							"tabLabel": "since_day_1",
							"value": sinceDay[0]
						}, {
							"tabLabel": "since_day_2",
							"value": sinceDay[1]
						}, {
							"tabLabel": "to_year_1",
							"value": "2"
						}, {
							"tabLabel": "to_year_2",
							"value": "0"
						}, {
							"tabLabel": "to_year_3",
							"value": toYear[0]
						}, {
							"tabLabel": "to_year_4",
							"value": toYear[1]
						}, {
							"tabLabel": "to_month_1",
							"value": toMonth[0]
						}, {
							"tabLabel": "to_month_2",
							"value": toMonth[1]
						}, {
							"tabLabel": "to_day_1",
							"value": toDay[0]
						}, {
							"tabLabel": "to_day_2",
							"value": toDay[1]
						}, {
							"tabLabel": "courseArea",
							"value": oModel.courseArea
						}, {
							"tabLabel": "agentName",
							"value": oModel.agentName
						}, {
							"tabLabel": "instructorName",
							"value": oModel.instructorName
						}]
					}
				}]
			};

			console.log(templateData);

			var settings = {
				"url": "/docusign_api_cpi/http/docusigndemo/form",
				"method": "POST",
				"data": JSON.stringify(templateData),
				"headers": {
					"Content-Type": "application/json"
				}
			};

			var docusignContainerId = this.getView().byId("docusign_container");

			$.ajax(settings).done(function (response) {
				console.log(response);

				if (document.querySelector("#docusign") === null) {
					var html = new sap.ui.core.HTML({
						// content: "<iframe width='100%' height='1500px' id='docusign'></iframe>",
						content: "<iframe width='100%' height='1000px' id='docusign'></iframe>",
						afterRendering: function () {
							var div = document.querySelector("#docusign");
							div.src = response.url; //ese src es del iframe y el response es el que trae la URL
						}
					});
					docusignContainerId.addItem(html);
				} else {
					var div = document.querySelector("#docusign");
					div.src = response.url;
				}

				// deferred.resolve(response);
			}.bind(this)).fail(function (error) {
				console.log(error);
				// deferred.reject(error);
			}.bind(this));

		},

		onInit: function () {
			var dataObject = {
				employeeFullName: "Rosendo Perez",
				occupation: "Licenciado en Informática",
				job: "Gerente de Preventas",
				CURP: "PERX850211MNER010",
				companyName: "SAP Mexico SA de CV",
				//					courseName: "Seguridad y Salud",
				//					hourDuration: "40 horas",
				//    				courseArea: "Seguridad e Higiene Ambiental",
				agentName: "Javier Garcia",
				instructorName: "Mariajose Martinez",
				RFC: "SME940408510"
			};

			var oModel = new JSONModel();
			oModel.setData(dataObject);
			this.getView().setModel(oModel);
		}
	});
});