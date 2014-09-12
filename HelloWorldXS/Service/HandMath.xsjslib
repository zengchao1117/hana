function add(num1,num2){
	return sub(num1,-num2) ;
}

function sub(num1,num2){
	return num1 - num2 ;
}

function div(num1,num2){
	if(num2 !== 0 ){
		return num1 / num2 ;
	}
	return 0 ;
}

function mul(num1,num2){
	return num1 * num2 ;
}
