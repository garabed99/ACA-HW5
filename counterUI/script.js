let counterElement = document.getElementById("counter-display");
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");
const increaseBtn = document.getElementById("increase-btn");

let counter = 0;
increaseBtn.addEventListener("click", () => {
  counter = counter + 1;
  localStorage.setItem("key", counter);
  render();
});

decreaseBtn.addEventListener("click", () => {
  if (counter != 0) {
    counter = counter - 1;

    localStorage.setItem("key", counter);
  }
  render();
});

resetBtn.addEventListener("click", () => {
  counter = 0;

  localStorage.setItem("key", counter);
  render();
});

function render() {
  console.log(localStorage.getItem("key"));
  let count = Number(localStorage.getItem("key"));
  counterElement.textContent = count;
}
