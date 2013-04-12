// JavaScript Document

$(document).ready(function(){
	$(document).keypress(function(event){

		switch(event.which)
		{
			case 48: addDigit('0');
					break;
			case 49: addDigit('1');
					break;
			case 50: addDigit('2');
					break;
			case 51: addDigit('3');
					break;
			case 52: addDigit('4');
					break;
			case 53: addDigit('5');
					break;
			case 54: addDigit('6');
					break;
			case 55: addDigit('7');
					break;
			case 56: addDigit('8');
					break;
			case 57: addDigit('9');
					break;					
			case 42: operate('*');
					break;
			case 43: operate('+');
					break;				
			case 45: operate('-');
					break;
			case 47: operate('/');
					break;
			case 46: checkDot();
					break;
			case 61:
			case 13: calculate(0);
					break;
			case 94: operate('^');
					break;
			case 76:
			case 108: operate('log');
					break;
			case 81:
			case 113: operate('sqrt');
		}		
	});
	
	$(document).keydown(function(event){
		
		switch(event.which)
		{
			case 27: allclear();
					break;
			case 8 : removeDigit();
					break;	
		}
		
	});
	
});