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
			   "templateData": {
			      "emailAccount": "mariajose.martinez@sap.com",
			      "password": "Mex18341341",
			      "integratorKey": "76617885-1c36-4a5e-98b2-f74cdf5a736b",
			      "accountId": "10543448",
			      "templateId": "b4f59517-fc5d-4cd5-9332-1f2c13dc30ca",
			      "employeeFullName": oModel.employeeFullName,
			      "occupation": oModel.occupation,
			      "job": oModel.job,
			      "companyName": oModel.companyName,
			      "courseName": oModel.courseName,
			      "hourDuration": oModel.hourDuration,     
			      "courseArea": oModel.courseArea,
			      "agentName": oModel.agentName,
			      "instructorName": oModel.instructorName,
			      "CU_1": oModel.CURP[0],
			      "CU_2": oModel.CURP[1],
			      "CU_3": oModel.CURP[2],
			      "CU_4": oModel.CURP[3],
			      "CU_5": oModel.CURP[4],
			      "CU_6": oModel.CURP[5],
			      "CU_7": oModel.CURP[6],
			      "CU_8": oModel.CURP[7],
			      "CU_9": oModel.CURP[8],
			      "CU_10": oModel.CURP[9],
			      "CU_11": oModel.CURP[10],
			      "CU_12": oModel.CURP[11],
			      "CU_13": oModel.CURP[12],
			      "CU_14": oModel.CURP[13],
			      "CU_15": oModel.CURP[14],
			      "CU_16": oModel.CURP[15],
			      "CU_17": oModel.CURP[16],
			      "RF_1": "",
			      "RF_2": oModel.RFC[0],
			      "RF_3": oModel.RFC[1],
			      "RF_4": oModel.RFC[2],
			      "RF_5": oModel.RFC[3],
			      "RF_6": oModel.RFC[4],
			      "RF_7": oModel.RFC[5],
			      "RF_8": oModel.RFC[6],
			      "RF_9": oModel.RFC[7],
			      "RF_10": oModel.RFC[8],
			      "RF_11": oModel.RFC[9],
			      "RF_12": oModel.RFC[10],
			      "RF_13": oModel.RFC[11],
			      "since_year_1": "2",
			      "since_year_2": "0",
			      "since_year_3": sinceYear[0],
			      "since_year_4": sinceYear[1],
			      "since_month_1": sinceMonth[0],
			      "since_month_2": sinceMonth[1],
			      "since_day_1": sinceDay[0],
			      "since_day_2": sinceDay[1],
			      "to_year_1": "2",
			      "to_year_2": "0",
			      "to_year_3": toYear[0],
			      "to_year_4": toYear[1],
			      "to_month_1": toMonth[0],
			      "to_month_2": toMonth[1],
			      "to_day_1": toDay[0], 
			      "to_day_2": toDay[1]
			   }
			};
			
			console.log(templateData);
			
			var settings = {
				"url": "/docusign_api_py/envelopes",
				"method": "POST",
				"data": JSON.stringify(templateData),
				"headers": {
					"Content-Type": "application/json"
				}
			};
			
			var docusignContainerId = this.getView().byId("docusign_container");
			
			$.ajax(settings).done(function (response) { 
				response = JSON.parse(response); 
				console.log(response);
				
				if(document.querySelector("#docusign") === null){
				var html = new sap.ui.core.HTML({
					    // content: "<iframe width='100%' height='1500px' id='docusign'></iframe>",
					    content: "<iframe width='1200px' height='1000px' id='docusign'></iframe>",
						afterRendering: function () {
						var div = document.querySelector("#docusign");
						   div.src = response.url.replace(/.*t=/,'https://demo.docusign.net/Signing/StartInSession.aspx?t='); //ese src es del iframe y el response es el que trae la URL
					    }
					});
					docusignContainerId.addItem(html);
				}else{
					 var div = document.querySelector("#docusign");
					 div.src = response.url.replace(/.*t=/,'https://demo.docusign.net/Signing/StartInSession.aspx?t=');
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