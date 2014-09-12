sap.ui.jsview("HandHR.HandEmployee", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf HandHRx.HandHR.HandEmployee
	*/ 
	getControllerName : function() {
		return "HandHR.HandEmployee";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf HandHRx.HandHR.HandEmployee
	*/ 
	createContent : function(oController) {
		var oLayout = new sap.ui.commons.layout.MatrixLayout();
    	// Create Employee  	    
	    var updatePanel = new sap.ui.commons.Panel("updPanel").setText('New Hand Employee Record Details');
  		var layoutNew = new sap.ui.commons.layout.MatrixLayout({width:"auto"}); 
  		
		var oFirsName = new sap.ui.commons.TextField("firstName",{tooltip: "First Name",maxLength:30, width: "200px", editable:true});
	    var oLastName = new sap.ui.commons.TextField("lastName",{tooltip: "Last Name",maxLength:30, width: "200px", editable:true});
	    var oEmail =    new sap.ui.commons.TextField("eMail",{tooltip: "Email", maxLength:60,width: "200px", editable:true});
	    var oPhoneNumber = new sap.ui.commons.TextField("phoneNumber",{tooltip: "Phone Number",maxLength:11, width: "200px", editable:true});
	    var oCountry =    new sap.ui.commons.TextField("country",{tooltip: "Country", maxLength:2,width: "200px", editable:true});
	    var oSalary =    new sap.ui.commons.TextField("salary",{tooltip: "Salary", maxLength:15,width: "200px", editable:true});
	  
		var oCreateBtn = new sap.ui.commons.Button({
			text : "Create Employee",
			press : 
				oController.createEmployee
//				function(){
//				oController.oView.createNewDialog(oController)}
		});
		
		var oDeleteBtn = new sap.ui.commons.Button({
			text : "Delete Employee",
			press : oController.deleteEmployee });
		
	    layoutNew.createRow(new sap.ui.commons.Label({text: "First Name: "}), oFirsName ); 
	    layoutNew.createRow(new sap.ui.commons.Label({text: "Last Name: "}), oLastName ); 	    
	    layoutNew.createRow(new sap.ui.commons.Label({text: "Email: "}), oEmail ); 	      
	    layoutNew.createRow(new sap.ui.commons.Label({text: "Phone Number: "}), oPhoneNumber ); 
	    layoutNew.createRow(new sap.ui.commons.Label({text: "Country: "}), oCountry ); 
	    layoutNew.createRow(new sap.ui.commons.Label({text: "Salary: "}), oSalary ); 
	    layoutNew.createRow(oCreateBtn,oDeleteBtn ); 
	    
	    updatePanel.addContent(layoutNew);
	    oLayout.createRow(updatePanel);	    
	    
		  // Table
	  	  var oModel = new sap.ui.model.odata.ODataModel("/hand/com/HelloWorldXS/Service/Employee.xsodata", true);
		  
		  var arrayHeaders = new Array(); 
		  oTable = new sap.ui.table.Table("handEmployees",{tableId: "HandEmployeeTable", 
		    navigationMode:sap.ui.table.NavigationMode.Paginator,
		    selectionMode:sap.ui.table.SelectionMode.Single,
		    selectionBehavior:sap.ui.table.SelectionBehavior.Row,
		    rowSelectionChange:oController.setSelectRow}); 
		  oTable.setTitle("Hand Employees"); 
		  
		  //Table Column Definitions
		  var oMeta = oModel.getServiceMetadata();
	      var oControl;
	      
	   	  for ( var i = 0; i < oMeta.dataServices.schema[0].entityType[0].property.length; i++) {
	   		  var property = oMeta.dataServices.schema[0].entityType[0].property[i];
	   		  
	          oControl = new sap.ui.commons.TextField().bindProperty("value",property.name);
	          if( property.name === "EMPLOYEEID"){
		          oControl.setEditable(false) ;	        	  
	          }
	          oControl.attachChange(oController.updateEmployee);
	          oTable.addColumn(
	        		  new sap.ui.table.Column({
				        	  label:new sap.ui.commons.Label({
				        	  text: property.name}), 
				        	  template: oControl, 
				        	  sortProperty: property.name, 
				        	  filterProperty: property.name, 
				        	  filterOperator: sap.ui.model.FilterOperator.EQ, 
				        	  flexible: true, 
				        	  width: "125px" }
	        		  )
	           );
	      }		  		    	  
		  oTable.setModel(oModel); 	
		  var sort1 = new sap.ui.model.Sorter("EMPLOYEEID");
		  oTable.bindRows("/Employees",sort1);
		  		  
	      var layoutTable = new sap.ui.commons.layout.MatrixLayout({width:"auto"});
	      layoutTable.createRow(oTable); 	      
		  oLayout.createRow(layoutTable);
		  
		  return oLayout;
	},
	
    createNewDialog: function(oController) {
	    view = this;
		view.oDialog = new sap.ui.commons.Dialog({modal: true});
		var layoutNew = new sap.ui.commons.layout.MatrixLayout({width:"auto"}); 
		
		var oFirsName = new sap.ui.commons.TextField("firstName",{tooltip: "First Name",maxLength:30, width: "200px", editable:true});
		var oLastName = new sap.ui.commons.TextField("lastName",{tooltip: "Last Name",maxLength:30, width: "200px", editable:true});
		var oEmail =    new sap.ui.commons.TextField("eMail",{tooltip: "Email", maxLength:60,width: "200px", editable:true});
		var oPhoneNumber = new sap.ui.commons.TextField("phoneNumber",{tooltip: "Phone Number",maxLength:11, width: "200px", editable:true});
		var oCountry =    new sap.ui.commons.TextField("country",{tooltip: "Country", maxLength:2,width: "200px", editable:true});
		var oSalary =    new sap.ui.commons.TextField("salary",{tooltip: "Salary", maxLength:15,width: "200px", editable:true});
		  

		
		layoutNew.createRow(new sap.ui.commons.Label({text: "First Name: "}), oFirsName ); 
		layoutNew.createRow(new sap.ui.commons.Label({text: "Last Name: "}), oLastName ); 	    
		layoutNew.createRow(new sap.ui.commons.Label({text: "Email: "}), oEmail ); 	      
		layoutNew.createRow(new sap.ui.commons.Label({text: "Phone Number: "}), oPhoneNumber ); 
		layoutNew.createRow(new sap.ui.commons.Label({text: "Country: "}), oCountry ); 
		layoutNew.createRow(new sap.ui.commons.Label({text: "Salary: "}), oSalary ); 	
		
		var osubmitSave = new sap.ui.commons.Button({
				text : "Save",
				style: sap.ui.commons.ButtonStyle.Accept,
				press :oController.createEmployee
		});		  

		view.oDialog.setTitle("Create Employee");
		view.oDialog.addContent(layoutNew);
		view.oDialog.addButton(osubmitSave);
		view.oDialog.open();
	},

});


