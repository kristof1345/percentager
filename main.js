// buttons
const countPercentageBtn = document.getElementById("count-per-btn");
const countHeigthBtn = document.getElementById("count-height-btn");
const resetFields = document.getElementById("reset");

// input fields
const runForPer = document.getElementById("run-for-percentage");
const heigthForPer = document.getElementById("height-for-percentage");

const runForHeight = document.getElementById("run-for-height");
const perForHeight = document.getElementById("percentage-for-height");

// result fields
const perResults = document.getElementById("count-percentage-results");
const heightResults = document.getElementById("count-height-results");

countPercentageBtn.addEventListener("click", () => {
  let runPer = runForPer.value;
  let heightPer = heigthForPer.value;

  if (runPer === "" || +runPer <= 0) {
    alert("Please enter a valid run number");
  }
  if (heightPer === "" || +heightPer <= 0) {
    alert("Please enter a valid height");
  }

  let percentage = (heightPer / runPer) * 100;

  const rounded = Math.round(percentage * 1000) / 1000;

  perResults.innerHTML = `The slope's percentage is: ${rounded}%`;
});

countHeigthBtn.addEventListener("click", () => {
  let runH = runForHeight.value;
  let perH = perForHeight.value;

  if (runH === "" || +runH <= 0) {
    alert("Please enter a valid run number");
  }
  if (perH === "" || +perH <= 0) {
    alert("Please enter a valid percentage");
  }

  let percentage = runH * (perH / 100);

  const rounded = Math.round(percentage * 1000) / 1000;

  heightResults.innerHTML = `The slope's heigth is: ${rounded} meters`;
});

resetFields.addEventListener("click", () => {
  runForHeight.value = "";
  runForPer.value = "";
  perForHeight.value = "";
  heigthForPer.value = "";

  heightResults.innerHTML = "";
  perResults.innerHTML = "";
});
