const inputResult = () => {
  let screenInputs = document.getElementById("answer").value;
  let lastIndex = screenInputs[screenInputs.length - 1];
  if (
    lastIndex == "+" ||
    lastIndex == "+" ||
    lastIndex == "*" ||
    lastIndex == "/" ||
    lastIndex == "."
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
  if (
    document.getElementById("answer").value == "undefine" ||
    document.getElementById("answer").value == "SyntaxError" ||
    document.getElementById("answer").value == "+" ||
    document.getElementById("answer").value == "-" ||
    document.getElementById("answer").value == "/" ||
    document.getElementById("answer").value == "*"
  ) {
    return (document.getElementById("answer").value = value);
  } else {
    return (document.getElementById("answer").value += value);
  }
};

const operatorInput = (value) => {
  let btn = document.getElementById("answer").value;
  let lastIndex = btn[btn.length - 1];
  if (
    lastIndex == "+" ||
    lastIndex == "*" ||
    lastIndex == "/" ||
    lastIndex == "-"
  ) {
    btn = btn.split("");
    btn.pop();
    btn = btn.join("");
    return (btn = document.getElementById("answer").value = btn + value);
  } else {
    return (document.getElementById("answer").value = btn + value);
  }
};

const deleteInput = () => {
  let btn = document.getElementById("answer").value;
  btn = btn.split("");
  btn[btn.length - 1] = "";
  btn = btn.join("");
  return (document.getElementById("answer").value = btn);
};

let root = document.querySelector(":root");

let defaultTheme = () => {
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

let secondTheme = () => {
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

let thirdTheme = () => {
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
