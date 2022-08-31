const inputResult = () => {
  return( document.getElementById("answer").value = eval(
     document.getElementById("answer").value
   ))
}

const resetInputs = () => {
   return (document.getElementById("answer").value = " ");
}


function display(value){
  document.getElementById("answer").value += value;
}

const deleteInput = () => {
    let btn = document.getElementById("answer").value;
    btn = btn.split("");
    btn[btn.length - 1] = "";
    btn = btn.join("");
    return (document.getElementById("answer").value = btn);
}