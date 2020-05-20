/*eslint-disable no-console, no-alert */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("docusign_ui5.docusign_ui5.controller.View1", {
		
		_pressButton: function () {
			var oModel = this.getView().getModel().getData();
			console.log(oModel.firstName);

			var templateData = {
							"emailSubject": "DocuSign API DEMO",
							"emailBlurb": "Sample Template",
							"status": "sent",
							"compositeTemplates": [{
								"serverTemplates": [{
									"sequence": "1",
									"templateId": "b02716e3-d2ca-47f6-adca-c3dfa46c87bf"
								}],
								"inlineTemplates": [{
									"sequence": "1",
									"recipients": {
										"signers": [{
											"email": oModel.email,
											"name": oModel.firstName,
											"recipientId": "1",
											"routingOrder": "1",
											"roleName": "Signer",
											"clientUserId": "12345678",
											"tabs": {
												"textTabs": [{
													"tabLabel": "firstName",
													"value": oModel.firstName
												}, {
													"tabLabel": "lastName",
													"value": oModel.lastName
												}, {
													"tabLabel": "phoneNo",
													"value": oModel.phoneNo
												}, {
													"tabLabel": "email",
													"value": oModel.email
												}]
			
											}
										}]
									}
								}]
							}]
						};
						
			var settings = {
				"async": true,
				"crossDomain": true,
				"url": "/docusign/envelopes",
				"method": "POST",
				"data": JSON.stringify(templateData),
				"headers": {
					"Authorization": "User XYjt+foObG50viSimqsfUXR5qiP4rHiwXQ42lKMcuuI=, Organization 2bb821f388f5511aa859a01dcc4472bf, Element 3n5Btff3vgVkAwZrRHvqTMYYOe9Cm94TRaCIUpqEGAQ=",
					"Content-Type": "multipart/form-data"
				}
			};
			
			// var deferred = $.Deferred();
			$.ajax(settings).done(function (response) { 
				console.log(response);
				// deferred.resolve(response);
			}.bind(this)).fail(function (error) {
				console.log(error);
				// deferred.reject(error);
			}.bind(this));

			

		},

		sendForm: function () {
			var accountId = "622cc488-4f1f-46f2-b256-ce85df664f28";
			var envelopeId = "036afa17-f228-4e2e-8b5b-631f692a4863";
			var authToken = "Bearer eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQoAAAABAAUABwCAz4aWOPzXSAgAgA-qpHv810gCAD_DroiAsANDkxI1SHNuViYVAAEAAAAYAAEAAAAFAAAADQAkAAAANzY2MTc4ODUtMWMzNi00YTVlLTk4YjItZjc0Y2RmNWE3MzZiIgAkAAAANzY2MTc4ODUtMWMzNi00YTVlLTk4YjItZjc0Y2RmNWE3MzZiMACAztTRN_zXSDcArb1hv9RNa0iXfEy-1HM88A.ra1iQ01N4hZqlPr-MPpkkCkShVQ0dKHizWrC513aUqSM4yZ5_7BMGhqxXnycvsuJtyRJ9hFojjr_b29Ypz_p2cq-N6dN2-PBzyAx2pdoFaRyKXwY2nP0kmMuE5Q3-zhxIwf8f8bTUkrebhlGsESt6S4gyBF6G0-yEGOCwe8Rnv2VKVqzv4ML4eb2iRr6iAq5hC53_p8qq1Leyk9RDvcG039yfknkuJzBh4j0B0jWo2WErh5iY1OOYcFyAPS76WGFf5f-nmpZ33tshR_oXXPAgWyGrxwK51pTzrN7U7mzMLTdOvaWg1mTYIlD00NDfSLs4N4sO-Bn8Tpp5PhSIoiRKg";
			var recipientBody =	{
					"authenticationMethod": "None",
					"clientUserId": "1",
					"email": "mariajose.martinez@sap.com",
					"recipientId": "1",
					"returnUrl": "/docusign_api/restapi/v2/accounts/" + accountId + "/envelopes/" + envelopeId,
					"userName": "Mariajose Martinez"
				};
				
			this.getURL(recipientBody, accountId, envelopeId, authToken);
			
		},
		loginWithDocuSign: function(){
			
			var scope = "signature";
			var integration_key = "76617885-1c36-4a5e-98b2-f74cdf5a736b";
			var state = Math.floor(Math.random()*10000000);
			var redirect_uri = "https://sap.com/callback/";
			
			var url = "https://account-d.docusign.com/oauth/auth?response_type=code&scope=" + scope + "&client_id=" + integration_key +"&state=" + state + "&redirect_uri=" + redirect_uri;
			var loginWin = window.open(url, "hola", "height=200,width=200");
			
			$(window)
			
			
			
		},
		getAccessToken: function(){
			var scope = "signature";
			var integration_key = "76617885-1c36-4a5e-98b2-f74cdf5a736b";
			var state = Math.floor(Math.random()*10000000);
			var redirect_uri = "https://sap.com/callback/";
			
			var url = "https://account-d.docusign.com/oauth/auth?response_type=code&scope=" + scope + "&client_id=" + integration_key +"&state=" + state + "&redirect_uri=" + redirect_uri;
			
		},
		getAuthToken: function(){
			
		},
		
		getURL: function (recipientBody,accountId,envelopeId,authToken) {
			var settings = {
				"async": true,
				"crossDomain": true,
				"url": "/docusign_api/restapi/v2/accounts/" + accountId + "/envelopes/" + envelopeId + "/views/recipient",
				"method": "POST",
				"data": JSON.stringify(recipientBody),
				"headers": {
					"Authorization": authToken,
					"Content-Type": "application/json"
				}
			};
			
			
			var docusignContainerId = this.getView().byId("docusign_container");
				
			// var deferred = $.Deferred();
			$.ajax(settings).done(function (response) { 
				console.log(response);
				
				if(document.querySelector("#docusign") === null){
				var html = new sap.ui.core.HTML({
					    // content: "<iframe width='100%' height='1500px' id='docusign'></iframe>",
					    content: "<iframe width='800px' height='1000px' id='docusign'></iframe>",
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
			                firstName: "Juan",
			                lastName: "Rivas",
			                phoneNo: "554678950",
			                email: "juan@rivas.com"
			              };
			             
			var oModel = new JSONModel();
			oModel.setData(dataObject);
			this.getView().setModel(oModel);			
		}
	});
});