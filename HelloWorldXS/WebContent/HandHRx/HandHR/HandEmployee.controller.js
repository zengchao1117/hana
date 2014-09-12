sap.ui.controller("HandHR.HandEmployee", {
	employeeid:null,
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf HandHRx.HandHR.HandEmployee
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf HandHRx.HandHR.HandEmployee
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf HandHRx.HandHR.HandEmployee
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf HandHRx.HandHR.HandEmployee
*/
//	onExit: function() {
//
//	}
	
	createEmployee: function(){
	  	var oEmployeeModel = sap.ui.getCore().byId("handEmployees").getModel();
	  	
		var oEntry = {};
		oEntry.EMPLOYEEID = "0000";
		oEntry.FIRSTNAME = sap.ui.getCore().byId("firstName").getValue();
		oEntry.LASTNAME = sap.ui.getCore().byId("lastName").getValue();
		oEntry.EMAIL = sap.ui.getCore().byId("eMail").getValue();
		oEntry.PHONENUMBER = sap.ui.getCore().byId("phoneNumber").getValue();
		oEntry.COUNTRY = sap.ui.getCore().byId("country").getValue();
		oEntry.SALARY = sap.ui.getCore().byId("salary").getValue();
		if(oEntry.FIRSTNAME === ''){
			jQuery.sap.require("sap.ui.commons.MessageBox");
			sap.ui.commons.MessageBox.alert("Please Input Email");			
		}else{
			oEmployeeModel.setHeaders({"content-type" : "application/json;charset=utf-8"});	
			oEmployeeModel.create('/Employees', oEntry, null, function() {
				alert("Create successful");
			}, function(oError) {
				alert("Create failed");
			});			
		}
	},
	
	deleteEmployee:function(){
		var oEmployeeModel = sap.ui.getCore().byId("handEmployees").getModel();
		if(employeeid !== null){
			var oParams = {};
			oParams.fnSuccess = function(){ alert("Delete successful");};
			oParams.fnError = function(){alert("Delete failed");};
			oEmployeeModel.setHeaders({"content-type" : "application/json;charset=utf-8"});				
			oEmployeeModel.remove(employeeid, oParams);	
			sap.ui.getCore().byId("handEmployees").setSelectedIndex(-1);
		}else{
			alert("Please Select a row");
		}
		
	},
	
	setSelectRow: function(Event){
		employeeid = Event.mParameters.rowContext.sPath;
	},
	
	updateEmployee:function(Event){
		var oEmployeeModel = sap.ui.getCore().byId("handEmployees").getModel();
		var index = Event.getSource().getEventingParent().getIndex();
		index %= sap.ui.getCore().byId("handEmployees").getVisibleRowCount();
		var oEntry = {};
		oEntry.EMPLOYEEID = sap.ui.getCore().byId("__field0-col0-row"+index).getValue();
		switch (Event.mParameters.id){
			case "__field1-col1-row"+index:
				oEntry.FIRSTNAME = Event.mParameters.newValue; break;
			case "__field2-col2-row"+index:
				oEntry.LASTNAME = Event.mParameters.newValue; break;
			case "__field3-col3-row"+index:
				oEntry.EMAIL = Event.mParameters.newValue; break;
			case "__field4-col4-row"+index:
				oEntry.PHONENUMBER = Event.mParameters.newValue; break;
			case "__field5-col5-row"+index:
				oEntry.COUNTRY = Event.mParameters.newValue; break;
			case "__field6-col6-row"+index:
				oEntry.SALARY = Event.mParameters.newValue; break;	
		}
	
		var oParams = {};
		oParams.fnSuccess = function(){// alert("Update successful");
			};
		oParams.fnError = function(){alert("Update failed");
		};
		oParams.bMerge = true;
		oEmployeeModel.setHeaders({"content-type" : "application/json;charset=utf-8"});				
		oEmployeeModel.update("/Employees("+oEntry.EMPLOYEEID+")", oEntry, oParams);
	}
});

var employeeid = null;