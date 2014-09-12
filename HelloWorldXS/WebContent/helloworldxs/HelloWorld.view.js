sap.ui.jsview("helloworldxs.HelloWorld", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf helloworldxs.HelloWorld
	*/ 
	getControllerName : function() {
		return "helloworldxs.HelloWorld";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf helloworldxs.HelloWorld
	*/ 
	createContent : function(oController) {
		var myButton = new sap.ui.commons.Button("btn");
		myButton.setText("Hello World Zengchao");
		myButton.attachPress(function(){$("#btn").fadeOut();});
		return myButton;
	}

});
