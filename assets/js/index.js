let clearButton = document.getElementById("reset");
let resultButton = document.getElementById("results");
let deleteButton = document.getElementById("delete");
let themeOne = document.getElementById("first-theme");
let themeTwo = document.getElementById("second-theme");
let themeThree = document.getElementById("third-theme");
let buttons = document.querySelectorAll(".input-button")
let screen = document.getElementById("answer") ;
let sign = document.getElementById("left-box");
let digits = [0,1,2,3,4,5,6,7,8,9,"."]
let operators = ["=","x","/","+","-"]
let operand1 = "" ;
let operand2 = "" ;
let operator = "" ;


function isDigit(value){
  return digits.includes(value)
}
function isOperator(value){
  return operators.includes(value)
}

function processClick(e){
  let value = e.target.innerText;
  if (isOperator(value) && value == "x") {
    operator = "*";
    return sign.innerText = "x";
}
  if (isOperator(value) && value !== "x") {
    operator = value;
return  sign.innerText = operator;
  }
  else if(operator.length < 1){
    operand1 += value;
    return screen.value = operand1;
  }
  else {
    operand2 += value;
    return screen.value = operand2;
  }
}

function convertInputToLocaleString() {
  let num = screen.value;
  let convertedNum = Number(num.replace(",", "")).toLocaleString("en-US");
  if (num.includes(".")) {
    return screen.value = convertedNum.replace(".",".");
  }
  else {
    return screen.value = Number(num.replace(",","")).toLocaleString("en-US")
  }
}

function inputResult(){
  let result = eval(operand1 + operator + operand2);
  operand2 = ""
  operand1 = result;
  let num = operand1;
  let convertedNum = Number(num).toLocaleString("en-US");
  return  screen.value = convertedNum;
  
};

function deleteInput(){
  if (screen.value == operand1) {
    let lastDigit = operand1.charAt(operand1.length - 1);
    operand1 = operand1.replace(lastDigit,""); 
    return screen.value = operand1
  }
  else if (screen.value == operand2){
     let lastDigit = operand2.charAt(operand2.length - 1);;
    operand2 = operand2.replace(lastDigit,""); 
    return screen.value = operand2;
  }
  else if(operand1.charAt() == false){
    operand1.toString();
     let lastDigit = operand1.charAt(operand1.length - 1);
    operand1 = operand1.replace(lastDigit,""); 
    return screen.value = operand1
  }
}

function clearOperands() {
  operand2 = "";
  operand1 = "";
  operator = "";
  sign.innerText = "";
  return( screen.value = "");
}

let root = document.querySelector(":root");

function defaultTheme(){
  return (
    root.style.setProperty("--body-background", "#3A4663"),
    root.style.setProperty("--main-color", "#FFFFFF"),
    root.style.setProperty("--switch-background", "#242D44"),
    root.style.setProperty("--switch-and-answer-bottons", "#F96B5B"),
    root.style.setProperty("--screen-background", "#181F33"),
    root.style.setProperty("--edit-buttons-color", "#FFFFFF"),
    root.style.setProperty("--inputs-color", "#434A59"),
    root.style.setProperty("--edit-buttons-background", "#647198"),
    root.style.setProperty("--keyboard-background", "#242D44"),
    root.style.setProperty("--answer-button-color", "#FFFFFF"),
    root.style.setProperty("--switch-left-margin", "0"),
    root.style.setProperty("--inputs-box-shadow", "inset 0px -2px 0px #B3A497"),
    root.style.setProperty("--keys-background", "#EAE3DC"),
    root.style.setProperty("--edit-box-shadow", "inset 0px -2px 0px #414E73"),
    root.style.setProperty("--answer-box-shadow", "inset 0px -2px 0px #93261A"),
    root.style.setProperty("--hover-edit-background", "#A2B2E1"),
    root.style.setProperty("--hover-input-color", "#FFFFFE"),
    root.style.setProperty("--answer-button", "#F96B5B")
  );
};

function secondTheme(){
  return (
    root.style.setProperty("--body-background", "#E6E6E6"),
    root.style.setProperty("--main-color", "#36362C"),
    root.style.setProperty("--switch-background", "#D2CDCD"),
    root.style.setProperty("--switch-and-answer-bottons", "#C85402"),
    root.style.setProperty("--screen-background", "#EEEEEE"),
    root.style.setProperty("--edit-buttons-color", "#FFFFFF"),
    root.style.setProperty("--inputs-color", "#36362C"),
    root.style.setProperty("--edit-buttons-background", "#378187"),
    root.style.setProperty("--keyboard-background", "#D2CDCD"),
    root.style.setProperty("--answer-button-color", "#FFFFFF"),
    root.style.setProperty("--switch-left-margin", "35%"),
    root.style.setProperty("--inputs-box-shadow", "inset 0px -4px 0px #A79E91"),
    root.style.setProperty("--keys-background", "#E5E4E1"),
    root.style.setProperty("--edit-box-shadow", "inset 0px -4px 0px #1B6066"),
    root.style.setProperty("--answer-box-shadow", "inset 0px -4px 0px #873901"),
    root.style.setProperty("--hover-edit-background", "#62B5BC"),
    root.style.setProperty("--hover-input-color", "#FFFFFF"),
    root.style.setProperty("--answer-button", "#FF8A38")
  );
};

function thirdTheme(){
  return (
    root.style.setProperty("--body-background", "#17062A"),
    root.style.setProperty("--main-color", "#FFE53D"),
    root.style.setProperty("--switch-background", "#1E0936"),
    root.style.setProperty("--switch-and-answer-bottons", "#00DED0"),
    root.style.setProperty("--screen-background", "#1E0936"),
    root.style.setProperty("--edit-buttons-color", "#FFFFFF"),
    root.style.setProperty("--inputs-color", "#FFE53D"),
    root.style.setProperty("--edit-buttons-background", "#56077C"),
    root.style.setProperty("--keyboard-background", "#1E0936"),
    root.style.setProperty("--switch-left-margin", "75%"),
    root.style.setProperty("--inputs-box-shadow", "inset 0px -4px 0px #881C9E"),
    root.style.setProperty("--answer-button-color", "#1A2327"),
    root.style.setProperty("--keys-background", "#331C4D"),
    root.style.setProperty("--edit-box-shadow", "inset 0px -4px 0px #BE15F4"),
    root.style.setProperty("--answer-box-shadow", "inset 0px -4px 0px #6CF9F1"),
    root.style.setProperty("--hover-edit-background", "#8631AF"),
    root.style.setProperty("--hover-input-color", "#6C34AC"),
    root.style.setProperty("--answer-button", "#93FFF8")
  );
};


themeOne.addEventListener("click", defaultTheme);
themeTwo.addEventListener("click", secondTheme);
themeThree.addEventListener("click", thirdTheme);
deleteButton.addEventListener("click", deleteInput);
resultButton.addEventListener("click", inputResult);
clearButton.addEventListener("click", clearOperands);

buttons.forEach(btn => btn.addEventListener("click", processClick))

buttons.forEach( btn => btn.addEventListener("click", convertInputToLocaleString
))