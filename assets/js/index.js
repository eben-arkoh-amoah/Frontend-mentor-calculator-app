let clearButton = document.getElementById("reset");
let resultButton = document.getElementById("results");
let deleteButton = document.getElementById("delete");
let themeOne = document.getElementById("first-theme");
let themeTwo = document.getElementById("second-theme");
let themeThree = document.getElementById("third-theme");
let buttons = document.querySelectorAll(".input-button")
let screen = document.getElementById("answer") ;
let sign = document.getElementById("left-box");
let operandOne = document.getElementById("first-operator");
let floater = document.getElementById("full-stop");


let digits = [0,1,2,3,4,5,6,7,8,9,"."]
let operators = ["=","x","/","+","-"]
let operand1 = "" ;
let operand2 = "" ;
let operator = "";
String.prototype.convertString = function () {
    return Number(this.replace(",", "")).toLocaleString("en-US");
}

function isDigit(value){
  return digits.includes(value)
}
function isOperator(value){
  return operators.includes(value)
}

function processClick(e){
  let value = e.target.innerText;
  if (isOperator(value) && value == "x") {
    screen.style.paddingTop = "35px";
    screen.placeholder = "";
    screen.value = "";
    operandOne.innerText = parseInt(operand1).toLocaleString("en");
    operator = "*";
    return sign.innerText = "x";
  }
  else if (isOperator(value) && value !== "x") {
    screen.style.paddingTop = "35px";
    screen.placeholder = "";
    operator = value;
    screen.value = "";
    operandOne.innerText = parseInt(operand1).toLocaleString("en");
return  sign.innerText = operator;
  }
  else if ((operator.length < 1)) {
    operand1 += value;
    let screenValue = operand1.convertString();
    return screen.value = screenValue;
  }
  else if ((operator.length == 1)) {
    console.log(operand2.length);
    operand2 += value;
     let screenValue = operand2.convertString();
    return screen.value = screenValue;
  }
}

function checkLength() {
  if ((screen.value).length < 15) {
    screen.style.fontSize = "30px";
  }
 else if (((screen.value).length) === 15) {
    screen.style.fontSize = "22px";
    console.log("hello world")
  }
  else if (((screen.value).length) === 20) {
    screen.style.fontSize = "20px";
    operandOne.style.fontSize = "20px";
  }
  else if (((screen.value).length) === 25) {
    screen.style.fontSize = "15px";
    operandOne.style.fontSize = "15px";
  }
  else {
    return;
  }
}


function inputResult() {
    screen.style.paddingTop = "15px";
  if (operand1 == "") {
    return screen.value = "0";
  }
  else if (operand2 == "" && operator.length > 0) {
    operandOne.innerText = "";
    return screen.value = Number(operand1).toLocaleString("en");
  }
  else{
    screen.style.paddingTop = "15px";
  let result = eval(operand1 + operator + operand2);
  operand2 = ""
    sign.innerText = "";
    operandOne.innerText = "";
  operand1 = result;
    let num = operand1;
  let convertedNum = Number(num).toLocaleString("en-US");
  return  screen.value = convertedNum;}
  
};

function deleteInput() {
  if ((screen.value).replaceAll(",","") == operand1 || operator == "" ) {
    let lastDigit = operand1.charAt(operand1.length - 1);
    operand1 = operand1.replace(lastDigit, ""); 
    console.log(operand1);
    let result = operand1.convertString();
    console.log(typeof  operand1)
    return screen.value = result;
  }
  else if ((screen.value).replaceAll(",", "") == operand2) {
    let lastDigit = operand2.charAt(operand2.length - 1);
    operand2 = operand2.replace(lastDigit, ""); 
    let result = operand2.convertString();
    return screen.value = result;
  }
}

function clearOperands() {
  screen.style.fontSize = "30px";
  screen.style.paddingTop = "15px";
    screen.placeholder = "0";
  operand2 = "";
  operand1 = "";
  operator = "";
  operandOne.innerText = "";
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


buttons.forEach(btn => btn.addEventListener("click", processClick));
buttons.forEach(btn => btn.addEventListener("click", checkLength));
themeOne.addEventListener("click", defaultTheme);
themeTwo.addEventListener("click", secondTheme);
themeThree.addEventListener("click", thirdTheme);
deleteButton.addEventListener("click", deleteInput);
resultButton.addEventListener("click", inputResult);
clearButton.addEventListener("click", clearOperands);
