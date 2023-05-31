const firstAngle = document.querySelector("#first-angle");
const secondAngle = document.querySelector("#second-angle");
const thirdAngle = document.querySelector("#third-angle");
const checkBtn = document.querySelector("#check-btn");

checkBtn.addEventListener("click", () => {
  const first = Number(firstAngle.value);
  const second = Number(secondAngle.value);
  const third = Number(thirdAngle.value);
  var sum = 0;

  calculateTriangle(first, second, third);
});

function calculateTriangle(first, second, third) {
  if (
    firstAngle.value.length === 0 ||
    secondAngle.value.length === 0 ||
    thirdAngle.value.length === 0
  ) {
    outputBoxForIsTriangle.innerText = "please input all of the fields! 😡";
  } else {
    if (first <= 0 || second <= 0 || third <= 0) {
      outputBoxForIsTriangle.innerText =
        "all inputs should be greater than zero(0)! 🥴";
    } else {
      sum = first + second + third;
      if (sum === 180) {
        console.log("this is triangle!");
        outputBoxForIsTriangle.innerText = "yeay, this is a Triangle! 😉";
      } else {
        outputBoxForIsTriangle.innerText = "this is not a Triangle! 😴";
      }
    }
  }
}