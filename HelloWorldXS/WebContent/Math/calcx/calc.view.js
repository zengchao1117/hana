sap.ui.jsview("calcx.calc", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf Math.calc
	*/ 
	getControllerName : function() {
		return "calcx.calc";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf Math.calc
	*/ 
	createContent : function(oController) {
  		  var oLayout = new sap.ui.commons.layout.MatrixLayout();
		  var oPanel = new sap.ui.commons.Panel().setText("Hand Calculator");
		  
		  var layoutNew = new sap.ui.commons.layout.MatrixLayout({width:"auto"});
		  
		  var oVal1 = new sap.ui.commons.TextField("val1",{
			  tooltip: "Value #1", 
			  editable:true,
			  width: "100px" });
		  var oVal2 = new sap.ui.commons.TextField("val2",{
			  tooltip: "Value #2", 
			  editable:true,
			  width: "100px"});
		  var oResult = new sap.ui.commons.TextView("result",{
			  tooltip: "Results",
			  width: "100px"});
		  var oEqual = new sap.ui.commons.TextView("equal",{
			  tooltip: "Equals", 
			  text: " = ",
			  width: "20px"});	      
		  var oMult = new sap.ui.commons.TextView("sign",{
			  tooltip: "", 
			  text: "",
			  width: "20px" });	      	
		  layoutNew.createRow(oVal1, oMult, oVal2, oEqual, oResult);
		  oPanel.addContent(layoutNew);		  
		  
		  var layoutBtn = new sap.ui.commons.layout.MatrixLayout({width:"auto"});
		  var oAdd = new sap.ui.commons.Button("add");
		  oAdd.setText("Add");
		  oAdd.attachPress(oController.onCalcAdd)
		  oAdd.setWidth("40px");
		  var oSub = new sap.ui.commons.Button("sub");	
		  oSub.setText("Sub");
		  oSub.attachPress(oController.onCalcSub);
		  oSub.setWidth("40px");
		  var oMul = new sap.ui.commons.Button("mul");	
		  oMul.setText("Mul");
		  oMul.attachPress(oController.onCalcMul);
		  oMul.setWidth("40px");
		  var oDiv = new sap.ui.commons.Button("div");
		  oDiv.setText("Div");
		  oDiv.attachPress(oController.onCalcDiv);
		  oDiv.setWidth("40px");
		  layoutBtn.createRow(oAdd, oSub, oMul, oDiv);
		  oPanel.addContent(layoutBtn);

	      oLayout.createRow(oPanel);
		  return oLayout;		
	}

});
