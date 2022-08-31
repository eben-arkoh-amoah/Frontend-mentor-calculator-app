const inputResult = () => {
  return (document.getElementById("answer").value = eval(
    document.getElementById("answer").value
  ));
};

const resetInputs = () => {
  return (document.getElementById("answer").value = " ");
};

function display(value) {
  document.getElementById("answer").value += value;
}

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
