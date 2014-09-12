var stock = $.request.parameters.get("stock");
var amount = $.request.parameters.get("amount");
var dest = $.net.http.readDestination("hand.com.HelloWorldXS.Service", "Yahoo");
var client = new $.net.http.Client();
var req = new $.web.WebRequest($.net.http.GET, "&s=SAP.DE");
client.request(req, dest);
var response = client.getResponse();
var co = [], he = []; 

for(var c in response.cookies) { 
co.push(response.cookies[c]);
}
for(var c in response.headers) { 
he.push(response.headers[c]);
}
var body = '';
if(response.body) 
var body = response.body.asString();
$.response.contentType = "application/json";
var res = parseInt(response.body.asString()) * amount;
$.response.setBody(amount + " of your " + stock + " are worth: " + res);
$.response.setBody(body)
$.response.status = $.net.http.OK;
