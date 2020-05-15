/*eslint-disable no-console, no-alert */
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("docusign_ui5.docusign_ui5.controller.View1", {
		
		_pressButton: function () {
			var oModel = this.getView().getModel("/");
			console.log(oModel);
			var oProperty = oModel.getProperty("/");
			
			var firstName = oProperty.firstName;
			var lastName = oProperty.lastName;
			var phoneNo = oProperty.phoneNo;
			var email = oProperty.email;
			
			var templateData = {
							"emailSubject": "DocuSign API DEMO",
							"emailBlurb": "Samplete Template",
							"status": "sent",
							"compositeTemplates": [{
								"serverTemplates": [{
									"sequence": "1",
									"templateId": "your docusign template id"
								}],
								"inlineTemplates": [{
									"sequence": "1",
									"recipients": {
										"signers": [{
											"email": email,
											"name": firstName + ' ' + lastName,
											"recipientId": "1",
											"routingOrder": "1",
											"roleName": "Signer",
											"clientUserId": "12345678",
											"tabs": {
												"textTabs": [{
													"tabLabel": "firstName",
													"value": firstName
												}, {
													"tabLabel": "lastName",
													"value": lastName
												}, {
													"tabLabel": "phoneNo",
													"value": phoneNo
												}, {
													"tabLabel": "email",
													"value": email
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
				"url": '/docusign/envelopes',
				"method": "POST",
				"data": JSON.stringify(templateData),
				"headers": {
					"Authorization": 'User XYjt+foObG50viSimqsfUXR5qiP4rHiwXQ42lKMcuuI=, Organization 2bb821f388f5511aa859a01dcc4472bf, Element 3n5Btff3vgVkAwZrRHvqTMYYOe9Cm94TRaCIUpqEGAQ=',
					"Content-Type": 'multipart/form-data;'
				}
			};
			
			// var deferred = $.Deferred();
			$.ajax(settings).done(function (response) { 
				console.log(done);
				console.log(done);
				// deferred.resolve(response);
			}.bind(this)).fail(function (error) {
				// deferred.reject(error);
			}.bind(this));
		},
		
		onInit: function () {
			
		}
	});
});