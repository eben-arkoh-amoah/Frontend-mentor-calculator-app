let userInputs = document.getElementById("answer").value;
let lastIndex = userInputs[userInputs.length - 1];
let firstIndex = userInputs[0];

const inputResult = () => {
if (
  lastIndex == "*" ||
  lastIndex == "+" ||
  lastIndex == "-" ||
  lastIndex == "/"
) {
  return (document.getElementById("answer").value = "SyntaxError");
} else {
  return (document.getElementById("answer").value = eval(
    document.getElementById("answer").value
  ));
}
};

const resetInputs = () => {
  return (document.getElementById("answer").value = " ");
};

function displayNumbers(value) {
  let screenInputs = document.getElementById("answer").value;
  let firstIndex = screenInputs[0];
  if (
    document.getElementById("answer").value == "undefined" ||
    document.getElementById("answer").value == "SyntaxError" ||
    document.getElementById("answer").value == "+" ||
    document.getElementById("answer").value == "-" ||
    document.getElementById("answer").value == "/" ||
    document.getElementById("answer").value == "*" ||
    firstIndex == "u" ||
    firstIndex == "S" 
  ) {
    return (document.getElementById("answer").value = value);
  } else {
    return (document.getElementById("answer").value += value);
  }
};


const operatorInput = (value) => {
  if (
    lastIndex == "+" ||
    lastIndex == "*" 
  ) {
    userInputs = userInputs.split("");
    userInputs.pop();
    userInputs = userInputs.join("");
    return (userInputs = document.getElementById("answer").value =
      userInputs + value);
  } else if (firstIndex == "u" || firstIndex == "S" || userInputs == " ") {
    return (document.getElementById("answer").value = "SyntaxError");
  } else {
    return (document.getElementById("answer").value = userInputs + value);
  }
};


const fullStopInput = (value) => {
  if (lastIndex == ".") {
    userInputs = userInputs.split("");
    userInputs.pop();
    userInputs = userInputs.join("");
    return (userInputs = document.getElementById("answer").value =
      userInputs + value);
//     userInputs = userInputs.split("");
//     userInputs.pop();
//     userInputs = btn.join("");
//     return ( document.getElementById("answer").value = userInputs + value);
//   } else {
//     return (document.getElementById("answer").value = btn + value);
//     return (document.getElementById("answer").value = userInputs + value);
  }
};

const deleteInput = () => {
  let userInputs = document.getElementById("answer").value;
  userInputs = userInputs.split("");
  userInputs[userInputs.length - 1] = "";
  userInputs = userInputs.join("");
  return (document.getElementById("answer").value = userInputs);
};
