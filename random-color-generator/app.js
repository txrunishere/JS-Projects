const div = document.querySelector(".main-div");
const inputBtn = document.querySelector(".input-btn");
const colorInput = document.querySelector(".color-input");


inputBtn.addEventListener("click", () => {
  const input = colorInput.value;
  // console.log(input);

  if (input) {
    if (input.length < 7 || input.length > 7) {
      alert("Enter a valid color code");
    } else {
      div.style.backgroundColor = input;
    }
  } else {
    alert("Enter a Hex Value!!");
  }
});
