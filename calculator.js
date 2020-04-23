
let num1=''
let num2 =''
let operator=''
let total = 'a'
let display = ''


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {


button.addEventListener('click', () => {
    console.log('button id: ' + button.id);
    if(button.id =='del'){
    	deleteCharacter()
    	return
    }

    if(button.id=='ac'){
    	allClear()
    	changeDisplay('')
    	return
    }

    if(operator !=''){
    	
    	if(button.id=='*'||button.id=='/'||button.id=='-'||button.id=='+'){
    	operator = button.id
    	console.log('operator ' + button.id)
    	changeDisplay(button.id)
    }
    	else if(button.id=='equal'){
    		total = operate(operator, parseFloat(num1),parseFloat(num2))
    		total = total
    		console.log(total)
    		changeDisplay(total)
    		operator = ''
	
			if(total > 999999999){num1 = total.toExponential(4)
			num2 = ''		
			}
			else{
				num1 = total;
				num2= '';
			
			}
    	}
    	else{
    		if(num2.length<9){
    		num2+=button.id

    		console.log('num 2 '+ num2)
    		changeDisplay(button.id)}
    		else{

    		}
    	}
    }
    else {
    if(button.id=='equal'){

    }	
    else if(button.id=='*'||button.id=='/'||button.id=='-'||button.id=='+'){
    	
    	operator = button.id
    	console.log('operator ' + button.id)
    	changeDisplay(button.id)}
    else{
    	if(num1==total){
    		num1= ''
    	}
    if(num1.length<9){	
    num1+= button.id
    console.log('num 1 '+num1)
    changeDisplay(button.id)}
    else{

    }
}
}
  });
});




function operate(operator, num1, num2){
	if(operator=='+'){
	return num1 + num2}
	else if(operator=='-'){
	return num1 - num2}
	else if(operator =='*'){
		return num1 * num2}
	else if(operator=='/'){
		return num1 / num2 
	}
	}

function allClear(){
	num1=''
	num2=''
	operator=''
	changeDisplay('')

}

function changeDisplay(character){
if(total >= 9.9999999995e+99){
	document.getElementById("results_on_display").innerHTML ='Max. value reached'
}
if(character == total){
		display = total.toFixed(3)
		display = parseFloat(display)
		console.log('display parseado =')
		if(display > 99999999999){
		document.getElementById("results_on_display").innerHTML =display.toExponential(4)
		}
		else{
		document.getElementById("results_on_display").innerHTML = display
		console.log('display depois do igual ' +display)
	}
	}
else if(character == ''){
	display = '0'
	document.getElementById("results_on_display").innerHTML = display
	document.getElementById("operations_on_display").innerHTML = display
}
else{
		
	document.getElementById("operations_on_display").innerHTML = num1+operator+num2
	
	}
}


function deleteCharacter(){
	if(num2 == '' && num1 != ''){
		num1 = num1.substring(0, num1.length-1)
		changeDisplay()
	}
	else if(num2 != ''){
		 num2 = num2.substring(0, num2.length-1)
		 changeDisplay()
	}
	else{
	}
}