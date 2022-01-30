console.log("JS")
const plusBTN = document.querySelector(".plus");
const minusBTN = document.querySelector(".minus");
const unswer = document.getElementById("unswer");

let writeNum = 0;

function changeunswer() {
  unswer.innerText = `${writeNum}`;
}

function plus() {
  writeNum++;
  changeunswer();
  return writeNum;
}

function minus() {
  writeNum--;
  changeunswer();
  return writeNum;
}

plusBTN.addEventListener("click", plus)
minusBTN.addEventListener("click", minus)

