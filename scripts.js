//Can probably just do split() on the operators and take each piece for the variables

//CURRENT PROBLEM:
//Expresions with multiple operators do not split correctly 



//TO DO:
//ADD KEYBOARD SUPPORT
//ADD BACKSPACE

let num1=""
let num2=""
let operator="+"
let displayText=document.querySelector(".display")
let commaString=","


const add = function(num1,num2,runoffARR) {
    let sum=Number(num1)+Number(num2)
    displayText.textContent=sum+" "+runoffARR
    console.log("ADDITION")
	return Number(sum)

};

const subtract = function(num1,num2,runoffARR) {
   let newNum1= num1.replace("-","")
   let newNum2= num2.replace("-","")
   console.log(newNum1,newNum2,"newNum1,newNum2")
    let remainder=Number(newNum1)-Number(newNum2)
    displayText.textContent=remainder+" "+runoffARR
    console.log("SUBTRACT")
	return Number(remainder)
};


const multiply = function(num1,num2,runoffARR) {
    let product=Number(num1)*Number(num2)
    displayText.textContent=product+" "+runoffARR
    console.log(num1,num2,"MULTIPLY")
	return Number(product)
};

const divide = function(num1,num2,runoffARR){
    let quotient=Number(num1)/Number(num2)
    displayText.textContent=quotient+" "+runoffARR
    console.log("DIVIDE")
	return Number(quotient)
}


document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', btnAction);
  });
  
  function btnAction(event) {
    
    const btn = event.target;
    let buttonText=btn.innerText
    
    
    if(btn.classList.contains("clear")){
        displayText.innerText=""
    }
    else if(btn.classList.contains("operators")){
        displayText.innerText=displayText.innerText+" "+buttonText
    }
    else if(btn.classList.contains("equalbutton"))
    {
        console.log("equals")
        operate()
    }
        else displayText.innerText=displayText.innerText+buttonText
        
     
   
        
   //Split on each operator then check for sign
       function operate(){
 
        if( displayText.textContent.includes("+") ||
            displayText.textContent.includes("-")||
            displayText.textContent.includes("*")||
            displayText.textContent.includes("÷")){
            let newARR= displayText.textContent.split(" ")
            let expStr= newARR[0]+newARR[1]
            let runoffARR= newARR.slice(2).join(" ")
            console.log(runoffARR,"runoffARR")
            console.log(expStr,"expStr")
                if(expStr.includes("+")){
                    expARR= expStr.split("+")
                    let num1= expARR[0]
                    let num2= expARR[1]
                     add(num1,num2,runoffARR)
             }
                if(expStr.includes("-")){
                    expARR= expStr.split("-")
                    let num1= expARR[0]
                    let num2= expARR[1]
                    subtract(num1,num2,runoffARR)
             }
             if(expStr.includes("*")){
                expARR= expStr.split("*")
                let num1= expARR[0]
                let num2= expARR[1]
                multiply(num1,num2,runoffARR)
            }
            if(expStr.includes("÷")){
                expARR= expStr.split("÷")
                let num1= expARR[0]
                let num2= expARR[1]
                divide(num1,num2,runoffARR)
            }
        }
        
    }
 
      
  }
  