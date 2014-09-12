if($.request.method === $.net.http.GET) { 
// get query parameter named id 
var qpId = $.request.parameters.get("id"); 
// handle request for the given id parameter... 
var result = handleRequest(qpId); // send response 
$.response.contentType = "plain/test"; 
$.response.setBody("result: " + result); 
$.response.status = $.net.http.OK;
} else { 
// unsupported method 
$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
}
