let firstValue ='';
let secondValue = '';
let operator = '';
let displayValue = false;




function add(firstValue,secondValue) {
    return firstValue + secondValue;   
}

function subtract(firstValue,secondValue){
    return firstValue - secondValue;    

}

function multiply(firstValue,secondValue){    
    return firstValue * secondValue; 
}

function divide(firstValue,secondValue){
    return firstValue / secondValue;   
}

function allClear(){
    currentOperand.innerText = "0";
    previousOperand.innerText ="";
     firstValue ='';
     secondValue = '';
     operator = "";
}

function deleteNum(){
    if (currentOperand.innerText.length === 1){
        currentOperand.innerText = "0";
    }
    else {currentOperand.innerText = currentOperand.innerHTML.slice(0, -1);}
}


function operation(){
    firstValue = parseFloat(previousOperand.innerText)
    secondValue = parseFloat(currentOperand.innerText)
    
    if (operator === ""||
    displayValue === true){}

    
    else if (operator === "+"){
        previousOperand.innerText = firstValue + operator + secondValue    
        currentOperand.innerText = add(firstValue,secondValue);
        
    }

    else if (operator === "-"){
        previousOperand.innerText = firstValue + operator + secondValue    
        currentOperand.innerText = subtract(firstValue,secondValue);
        
    }

    else if (operator === "*"){
        previousOperand.innerText = firstValue + operator + secondValue    
        currentOperand.innerText = multiply(firstValue,secondValue);
        
    }

    else if (operator === "÷"){
        previousOperand.innerText = firstValue + operator + secondValue    
        currentOperand.innerText = divide(firstValue,secondValue);
        
    }
    
    displayValue = true;
  
}




const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const clearButtons = document.querySelector('[data-clear]');
const deleteButtons = document.querySelector('[data-delete]');
const equalButtons = document.querySelector('[data-equal]');
const previousOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]');

clearButtons.addEventListener("click",allClear);
deleteButtons.addEventListener("click",deleteNum);
equalButtons.addEventListener("click",operation);

numberButtons.forEach(button => {
    button.addEventListener("click", (e)=>{
        if (displayValue === true){
            previousOperand.innerText = currentOperand.innerText + operator;
            currentOperand.innerText = "0";
            displayValue = false;
        }

        if ((currentOperand.innerText === "0" && button.innerText === ".")||   
         (currentOperand.innerText === "0" && button.innerText === ".") ||
         (currentOperand.innerText.includes(".") && button.innerText === ".")||
         (currentOperand.innerText.length > 15)){}
        
         else if (currentOperand.innerText === "0"){
            currentOperand.innerHTML = button.innerText            
        }
        else {
            currentOperand.innerHTML += button.innerText
        }
    })
    
});

operationButtons.forEach(button =>{
    button.addEventListener("click", e =>{ 
        operation();        
       operator = button.innerText
       previousOperand.innerText = currentOperand.innerText + operator;       
       console.log(operator);
       
    }) 
})

