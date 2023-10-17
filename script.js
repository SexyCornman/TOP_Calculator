function add() {

    
}

function subtract(){
   
 

}

function multiply(){    
   

}

function divide(){
      

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
equalButtons.addEventListener("click",operation);

numberButtons.forEach(button => {
    button.addEventListener("click", (e)=>{
        if (currentOperand.innerText === "0" && button.innerText === ".") {}     
        else if (currentOperand.innerText === "0" && button.innerText === ".") {}
        else if (currentOperand.innerText.includes(".") && button.innerText === ".") {}
        else if (currentOperand.innerText.length > 15){}
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
        if (button.innerText === "+")add();
        else if (button.innerText === "-")subtract();
        else if (button.innerText === "*")multiply();
        else if (button.innerText === "÷")divide();
        else{};
    
    }) 
})

