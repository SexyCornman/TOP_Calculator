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

function allClear(){
    currentOperand.innerText = "0";
    previousOperand.innerText ="";
}

function deleteNum(){
    if (currentOperand.innerText.length === 1){
        currentOperand.innerText = "0";
    }
    else {currentOperand.innerText = currentOperand.innerHTML.slice(0, -1);}
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

clearButtons.addEventListener("click",allClear);
deleteButtons.addEventListener("click",deleteNum);

numberButtons.forEach(button => {
    button.addEventListener("click", (e)=>{
        if (currentOperand.innerText === "0"){
            currentOperand.innerHTML = button.innerText
        }
        else if (currentOperand.innerText.includes(".") && button.innerText === ".") {}
        else {
            currentOperand.innerHTML += button.innerText
        }
    })
    
});

