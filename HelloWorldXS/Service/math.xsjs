$.import("hand.com.HelloWorldXS.Service", "HandMath"); 
var handMath = $.hand.com.HelloWorldXS.Service.HandMath;
var numa ,numb;
numa = $.request.parameters.get('num1');
numb = $.request.parameters.get('num2');

var aCmd = $.request.parameters.get('cmd');
switch(aCmd){
case "add":
	var result = handMath.add(numa,numb);
	$.response.setBody(result.toString());
	$.response.status = $.net.http.OK;	
	break;
case "sub":
	var result = handMath.sub(numa,numb);
	$.response.setBody(result.toString());
	$.response.status = $.net.http.OK;	
	break;
case "mul":
	var result = handMath.mul(numa,numb);
	$.response.setBody(result.toString());
	$.response.status = $.net.http.OK;	
	break;
case "div":
	var result = handMath.div(numa,numb);
	$.response.setBody(result.toString());
	$.response.status = $.net.http.OK;	
	break;
default:
	$.response.status = $.net.http.BAD_REQUEST;
    $.response.setBody("Error Command");
}
