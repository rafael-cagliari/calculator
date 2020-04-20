
let num1=''
let num2 =''
let operator=''
let total = 'a'
let display = ''


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {


button.addEventListener('click', () => {
    console.log('button id: ' + button.id);
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
    		console.log(total)
    		changeDisplay(total)
    		operator = ''
	num1 = total
	num2 = ''		
    	}
    	else{
    		num2+=button.id

    		console.log('num 2 '+ num2)
    		changeDisplay(button.id)
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
    num1+= button.id
    console.log('num 1 '+num1)
    changeDisplay(button.id)
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
if(character == total){
		display = total
		document.getElementById("numbers_on_display").innerHTML = display
		console.log('display depois do igual ' +display)
	}
else if(character == ''){
	display = '0'
	document.getElementById("numbers_on_display").innerHTML = display
}
else{
		
	document.getElementById("numbers_on_display").innerHTML = num1+operator+num2
	
	}
}

