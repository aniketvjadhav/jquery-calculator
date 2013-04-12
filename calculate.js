// JavaScript Document

var current='0';
var memory='0';
var operation = '0';
//var dot = 1;
var totaldig = 0;
var countDecimal = 0;

function checkDot()
{
  //  dot++;
  
    if (countDecimal == 0)
	{
        addDigit('.');
		countDecimal = 1;
	}
}

function removeDigit()
{
	if(totaldig == 0)
	{		
		if(calc.opdisp.value != "")
		{
			calc.opdisp.value = "";
			operation = 0;
		}
	} //removing the operand

	if (totaldig != 0)
	{	
		if(totaldig == 1)
		{
			calc.disp.value = "";
			totaldig = 0;
			countDecimal = 0;
		}
		else
		{
			calc.disp.value = calc.disp.value.substr(0,totaldig-1);
			totaldig--;
			
			if(calc.disp.value.indexOf('.') == -1)
				countDecimal = 0;
		}
		current = calc.disp.value;
	}
}

function addDigit(dig)
{
	
	if(calc.disp1.value.indexOf("!")==-1 && calc.disp1.value != "-Infinity")	//not in error
	{
		
		if(countDecimal != 0)
		{		
			countDecimal++;
		}
		
	    totaldig++;
		if(current==0 && calc.disp1.value.indexOf(".")==-1)	//zero in disp
		{		
			current=dig;
		}
		else 
        {
			
			if(calc.disp1.value != "" && calc.opdisp.value == "" && calc.disp.value == "") // for fresh calculation after equal to
			{				
				current = "";
			}
			
		    if (totaldig < 15)
			current=current+dig;
		}
		// current = current.toLowerCase(); //FORCE LOWER CASE

	}
	else
	{
		current="Press A/C !";
	}
	calc.disp.value=current;
}

function Clear()
{
    current = '0';
   // dot = 1;
	current = current.toLowerCase();
	calc.disp.value = current;
	totaldig = 0;
	countDecimal = 0;	
}

function allclear()
{
	current = '0';
	memory = '0';
	operation = '0';
	maxlength = '0';
    totaldig = 0;
	calc.disp.value=current;
	calc.disp1.value = "";
	calc.opdisp.value = "";
	countDecimal = 0;
}

function operate(op) {
	
	countDecimal = 0;
	if(operation !=0 && totaldig != 0)
	{
		calculate(1);
	}
	
	if(op=="+")
	{
		operation=1;
		calc.opdisp.value = '+';
	}
	
	if(op=="-")
	{
		operation=2;
		calc.opdisp.value = '-';
	}
	
	if(op=="*")
	{
		operation=3;
		calc.opdisp.value = '×';
	}
	
	if (op=="/") 
	{
		operation = 4;
		calc.opdisp.value = '÷';
	}
	
	if (op=='^')
	{
		operation = 5;
		calc.opdisp.value = '^';
	}
	
	if (op=="log")
	{
		operation = 6;
		calculate(1);
	}
	
	if(op=="sqrt")
	{
		operation = 7;
		calculate(1);
	}
	
	if(op=="sin")
	{
		operation = 8;
		calculate(1);
	}
	
	if(op=="cos")
	{
		operation = 9;
		calculate(1);
	}
	
	if(op=="tan")
	{
		operation = 10;
		calculate(1);
	}
	
	if(op=="square")
	{
		operation = 11;
		calculate(1);
	}
	
	if(op=="cube")
	{
		operation = 12;
		calculate(1);
	}
	
	if (op=="sinh")
	{
		operation = 13;
		calculate(1);
	}
	
	if(op == "cosh")
	{
		operation = 14;
		calculate(1);
	}
	
	if(op == "tanh")
	{
		operation = 15;
		calculate(1);
	}
	
	if(op == "fact")
	{
		operation = 16;
		calculate(1);
	}
	
	if(op == "E")
	{
		operation = 17;
		calculate(1);
		totaldig = 1;
	}
	
	
	if(totaldig == 0) {return; }
//	alert('current = '+current +" memory = " + memory + " totaldig = " + totaldig);
	memory=current;
	calc.disp1.value = current;
	current='';
	calc.disp.value = current;
	totaldig = 0;
	//alert(totaldig);
	//alert("mermory = " + memory + "\n current =" + current);

}

function calculate(ch)
{
	if (current == "")
		return;
		
	//alert(memory);
	
    if (operation == 1) 
    {
	    current = ((eval(current) * Math.pow(10, countDecimal)) + (eval(memory) * Math.pow(10, countDecimal))) / Math.pow(10, countDecimal);	    
	}
	
	if(operation==2)
	{
	    current = ((eval(memory) * Math.pow(10, countDecimal)) - (eval(current) * Math.pow(10, countDecimal))) / Math.pow(10, countDecimal);
	}

	if(operation==3)
	{
	    current = ((eval(current) * Math.pow(10, countDecimal)) * (eval(memory) * Math.pow(10, countDecimal))) / (Math.pow(10, countDecimal)*Math.pow(10, countDecimal));
	}
	if(operation==4)
	{
		if(eval(current)==0)
		{
			current="Divide by zero !";
		}
		else
		{
			current=eval(memory) / eval(current);
		}
	}
	
	if (operation == 5)
	{
		current = Math.pow(eval(memory), eval(current));
	}
	
	if (operation == 6)
	{
		current = Math.log(eval(current));
	}
	
	if (operation == 7)
	{
		current = Math.sqrt(eval(current));
	}
	
	if (operation == 8)
	{
		//alert(eval(current)/180*Math.PI);
		current = Math.sin((eval(current)/180)*Math.PI);
	}
	
	if (operation == 9)
	{
		//alert(eval(current)/180*Math.PI);
		current = Math.cos((eval(current)/180)*Math.PI);
	}
	
	if (operation == 10)
	{
		if(eval(current) == 90)
		{
			current = "Error!";
		}
		else
		{
			current = Math.tan((eval(current)/180)*Math.PI);
		}
	}
	
	if (operation == 11)
	{
		current = Math.pow(eval(current), 2);
	}
	
	if (operation == 12)
	{
		current = Math.pow(eval(current), 3);
	}
	
	if (operation == 13)
	{
		
		var a = Math.pow(Math.E,eval(current));
		var b = Math.pow(Math.E,eval(current*-1));
		current = (a-b)/2;
	}
	
	if (operation == 14)
	{
		var a = Math.pow(Math.E,eval(current));
		var b = Math.pow(Math.E,eval(current*-1));
		current = (a+b)/2;
	}
	
	if (operation == 15)
	{
		var a = Math.pow(Math.E,eval(current));
		var b = Math.pow(Math.E,eval(current*-1));
		current = (a-b)/(a+b);
	}
	
	if (operation == 16)
	{
		var a = 1;
		for (i = 1; i<= current; i++)
			a = a * i;
		
		current = a;
	}
	
	if (operation == 17)
	{
		current = Math.E;
	}
	
	operation = 0; // for additions like 1+1 = 2 + 1 = 3 + 1 = 4
	calc.disp1.value=current;
	calc.disp.value='';
	calc.opdisp.value='';
	
	if(ch == 0)
	{
		totaldig = 0;
		memory = current;
		current = "";
	}
}