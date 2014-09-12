sap.ui.jsview("Sales.PieSalesByCountry", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf SalesAnalytic.Sales.PieSalesByCountry
	*/ 
	getControllerName : function() {
		return "Sales.PieSalesByCountry";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf SalesAnalytic.Sales.PieSalesByCountry
	*/ 
	createContent : function(oController) {
		var salesByCountryPanel = new sap.ui.commons.Panel().setText("SALES_BY_COUNTRY");
	    var layoutNew = new sap.ui.commons.layout.MatrixLayout({width:"100%"});
	    salesByCountryPanel.addContent(layoutNew);  
		salesByCountryPanel.setHeight("800px");
		salesByCountryPanel.setWidth("100%");
		
  	    var oModel = new sap.ui.model.odata.ODataModel("/hand/com/HelloWorldXS/Service/SalesByCountry.xsodata", true);
  	    var sort1 = new sap.ui.model.Sorter("NAME");
  	    
  	    var dataset = new sap.viz.ui5.data.FlattenedDataset({	  	    
	        dimensions : [ { axis : 1, 
	                         name : "Country", 
	                         value : "{NAME}" } ],
	        measures : [ 
	                { name : "Profit", 
	                  value : '{PROFIT}' 
	                }]       
  	    });
  	    dataset.setModel(oModel);
	    dataset.bindData("/SalesByCountry",sort1);
	    
	    var oSalesCountryPie = new sap.viz.ui5.Pie("salesByCountryPie",{
			width : "100%",
			height : "600px",
			plotArea : {
			},			
			title : {
				text: "Profti by Country",
				visible : false				
			},
			dataset : dataset
		});
	       
        layoutNew.createRow(oSalesCountryPie); 
        
        return salesByCountryPanel;	    
	    
	}

});
