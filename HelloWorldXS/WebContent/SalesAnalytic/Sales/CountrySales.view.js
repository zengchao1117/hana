sap.ui.jsview("Sales.CountrySales", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf SalesAnalytic.Sales.CountrySales
	*/ 
	getControllerName : function() {
		return "Sales.CountrySales";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf SalesAnalytic.Sales.CountrySales
	*/ 
	createContent : function(oController) {
	    //Sales by Country Panel
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
	                { name : "Cost", 
	                  value : '{COST}' 
	                },
	                { name : "Profit", 
		              value : '{PROFIT}' 
		            },
		            {name : "Revenue", 
			         value : '{REVENUE}'		            	
		            }]       
  	    });
  	    dataset.setModel(oModel);
	    dataset.bindData("/SalesByCountry",sort1);  

	    var oSalesCountryBarChart = new sap.viz.ui5.Column({
			width : "100%",
			height : "600px",
			title : {
				text:"Sales By Country",
				visible : true
			 },
		    dataset : dataset,
		    selectData: oController.onSelectData
	    });
	    var xAxis = oSalesCountryBarChart.getXAxis();
	    var yAxis = oSalesCountryBarChart.getYAxis();

		xAxis.setTitle(new sap.viz.ui5.types.Axis_title({
		visible: true,
		text: "Country Name"
		}));

		yAxis.setTitle(new sap.viz.ui5.types.Axis_title({
			visible: true,
			text: "Cost Profit Revenue"
		}));
      
//        oSalesCountryBarChart.getLegend().setVisible(true);      
        layoutNew.createRow(oSalesCountryBarChart); 
        
        return salesByCountryPanel;
	}	
});
