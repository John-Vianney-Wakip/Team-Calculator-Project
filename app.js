let number = document.querySelectorAll('.number');
let operators = document.querySelectorAll(".operator");
let displayAnsExpress = document.getElementById("output-value");
let history = document.getElementById("history-value");


//display the results
let result = ()=>{
  console.log("click");
  let pro = displayAnsExpress.innerHTML;
  console.log(pro);

}

//evalute the express & display the result
let solve = (expression)=>{
  try {
    return eval(expression);
    
  } catch (error) {
    alert(error);
  }
}

//display the express on screen


//loop through the buttons & get button value
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click",()=>{
    console.log("clicked..");
    displayAnsExpress.innerHTML += number[i].value;
  });
}

//loop through operator buttons
for(let x = 0; x< operators.length; x++){
  operators[x].addEventListener("click",()=>{
    let opt = operators[x].value;
    
    console.log("operator clicked");
    displayAnsExpress.innerHTML += opt;
    console.log("expression: "+displayAnsExpress.innerHTML);

    //clear btn
    if(operators[x] == operators[0]){
      displayAnsExpress.innerHTML = "";
      history.innerHTML = "";
    }

    //backspace btn
    if(operators[x] == operators[1]){
      displayAnsExpress.innerHTML = backspace(displayAnsExpress.innerHTML);
    }

    //percentage btn
    if(operators[x] == operators[2]){
      displayAnsExpress.innerHTML = eval(displayAnsExpress.innerHTML/100);
    }

    //listen for equals button click
    if(operators[x] == operators[7]){
      history.innerHTML = displayAnsExpress.innerHTML;
      displayAnsExpress.innerHTML = solve(displayAnsExpress.innerHTML);
    }

  })
}

//backspace
let backspace = (str)=>{
  
  return str.substring(0,str.length-1);
}