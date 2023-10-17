function add() {
   result = Number(currentOperand.innerText)+Number(previousOperand.innerText);
   return result
}

function subtract(){
    result = Number(currentOperand.innerText) - Number(previousOperand.innerText);
   return result

}

function multiply(){
    result = Number(currentOperand.innerText) * Number(previousOperand.innerText);
   return result

}

function divide(){
    result = Number(currentOperand.innerText) / Number(previousOperand.innerText);
   return result

}

function clear(){
    currentOperand.innerText = "0";
    previousOperand.innerText ="";
}

function operation(){


}



const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const clearButtons = document.querySelector('[data-clear]');
const deleteButtons = document.querySelector('[data-delete]');
const equalButtons = document.querySelector('[data-equal]');
const previousOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]');

