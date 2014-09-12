sap.ui.controller("calcx.calc", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf Math.calc
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf Math.calc
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf Math.calc
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf Math.calc
*/
//	onExit: function() {
//
//	}
	
	onCalcAdd: function() {	
		sap.ui.getCore().byId("sign").setText("+");
		SendCmd("add");
	},
	
	onCalcSub: function( ) {
		sap.ui.getCore().byId("sign").setText("－");
        SendCmd("sub");
	},
	
	onCalcMul: function( ) {
		sap.ui.getCore().byId("sign").setText("×");
        SendCmd("mul");
	},
	onCalcDiv: function( ) {
		sap.ui.getCore().byId("sign").setText("÷");
        SendCmd("div");
	}
});

function ErrorCall(){
	jQuery.sap.require("sap.ui.commons.MessageBox");
	sap.ui.commons.MessageBox.alert("Error");
	return;		
}

function GetResult(result){
	var oResult = sap.ui.getCore().byId("result");
	 if(result==undefined){ 
		 oResult.setText(0); 
	 }else{
	   jQuery.sap.require("sap.ui.core.format.NumberFormat");
	   var oNumberFormat = sap.ui.core.format.NumberFormat.getIntegerInstance({
	      maxFractionDigits: 12,
	      minFractionDigits: 0,
	      groupingEnabled: true });
	   oResult.setText(oNumberFormat.format(result));
	 }
	 //sap.ui.getCore().byId("sign").setText(cmd.toString());
}
function SendCmd(cmd){
	var aUrl ;
	oNum1 = sap.ui.getCore().byId("val1").getValue();
	oNum2 = sap.ui.getCore().byId("val2").getValue();
	aUrl = '/hand/com/HelloWorldXS/Service/math.xsjs?num1=' + oNum1
	+ '&num2='+ oNum2 +'&cmd=' + cmd ;	
	jQuery.ajax({
		url: aUrl,
		method: 'GET',
		dataType: 'json',
		success: GetResult,
		error: ErrorCall });	
}



