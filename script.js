let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");
let totalDays = document.getElementById("total-days");
let seconds = document.getElementById("seconds");

// Add event listener to userInput
userInput.addEventListener("change", calculateAge);

function calculateAge() {
  let birthDate = new Date(userInput.value);
  if (isNaN(birthDate.getTime())) {
    result.innerHTML = "Invalid Date";
    return;
  }

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;
  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(m2 - 1, y2) + d2 - d1;
  }

  if (m3 < 0) {
    y3--;
    m3 = 12 + m3;
  }

  if (y3 < 0) {
    result.innerHTML = "Invalid Date";
  } else {
    result.innerHTML = `Age: ${y3} years ${m3} months ${d3} days`;
    totalDays.innerHTML = `Total days: ${y3 * 365 + m3 * 30 + d3}`;
  }

  console.log(y3, m3, d3);
}

function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
