const day = document.getElementById("days");
const month = document.getElementById("months");
const year = document.getElementById("years");
const dayLabel = document.getElementById("day-label");
const monthLabel = document.getElementById("month-label");
const yearLabel = document.getElementById("year-label");
const errorMessage = document.querySelectorAll(".error-message");
const topele = document.querySelector(".top");
if (day.value == "" && month.value == "" && year.value == "") {
  errorMessage[0].textContent = "This field is required";
  errorMessage[1].textContent = "This field is required";
  errorMessage[2].textContent = "This field is required";
  day.style.borderColor = "rgba(255, 0, 0, 0.5)";
  day.style.borderRadius = "5px";
  month.style.borderColor = "rgba(255, 0, 0, 0.5)";
  month.style.borderRadius = "5px";
  year.style.borderColor = "rgba(255, 0, 0, 0.5)";
  year.style.borderRadius = "5px";
  dayLabel.style.color = "rgba(255, 0, 0, 0.5)";
  monthLabel.style.color = "rgba(255, 0, 0, 0.5)";
  yearLabel.style.color = "rgba(255, 0, 0, 0.5)";
}
day.addEventListener("input", calculateAge);
month.addEventListener("input", calculateAge);
year.addEventListener("input", calculateAge);
function calculateAge() {
  if (day.value !== "" && month.value !== "" && year.value !== "") {
    errorMessage.forEach((err) => {
      err.textContent = "";
    });
    day.style.borderColor = "";
    month.style.borderColor = "";
    year.style.borderColor = "";
    dayLabel.style.color = "inherit";
    monthLabel.style.color = "inherit";
    yearLabel.style.color = "inherit";

    const birthdate = new Date(`${year.value}-${month.value}-${day.value}`);
    const today = new Date();

    const yearsDiff = today.getFullYear() - birthdate.getFullYear();
    const monthsDiff = today.getMonth() - birthdate.getMonth();
    const daysDiff = today.getDate() - birthdate.getDate();

    let ageYears = yearsDiff;
    let ageMonths = monthsDiff;
    let ageDays = daysDiff;

    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
      ageYears--;
      ageMonths = 12 + monthsDiff;
      if (daysDiff < 0) {
        ageMonths--;
        ageDays =
          new Date(today.getFullYear(), today.getMonth(), 0).getDate() +
          daysDiff;
      }
    } else if (daysDiff < 0) {
      ageMonths--;
      ageDays =
        new Date(today.getFullYear(), today.getMonth(), 0).getDate() + daysDiff;
    }

    document.getElementById(
      "age-years"
    ).innerHTML = `<span class="value">${ageYears}</span> years`;
    document.getElementById(
      "age-months"
    ).innerHTML = `<span class="value">${ageMonths}</span> months`;
    document.getElementById(
      "age-days"
    ).innerHTML = `<span class="value">${ageDays}</span> days`;
  } else {
    if (day.value === "") {
      errorMessage[0].textContent = "This field is required";
      day.style.borderColor = "rgba(255, 0, 0, 0.5)";
      day.style.borderRadius = "5px";
      dayLabel.style.color = "rgba(255, 0, 0, 0.5)";
      if (year.value !== "") {
        errorMessage[2].textContent = "";
        year.style.borderColor = "";
        year.style.borderRadius = "5px";
        yearLabel.style.color = "hsl(0, 1%, 44%)";
      }
      if (month.value !== "") {
        errorMessage[1].textContent = "";
        month.style.borderColor = "";
        month.style.borderRadius = "5px";
        monthLabel.style.color = "hsl(0, 1%, 44%)";
      }
    }
    if (month.value === "") {
      if (day.value !== "") {
        errorMessage[0].textContent = "";
        day.style.borderColor = "";
        day.style.borderRadius = "5px";
        dayLabel.style.color = "hsl(0, 1%, 44%);";
      }
      if (year.value !== "") {
        errorMessage[2].textContent = "";
        year.style.borderColor = "";
        year.style.borderRadius = "5px";
        yearLabel.style.color = "hsl(0, 1%, 44%)";
      }
      errorMessage[1].textContent = "This field is required";
      month.style.borderColor = "rgba(255, 0, 0, 0.5)";
      month.style.borderRadius = "5px";
      monthLabel.style.color = "rgba(255, 0, 0, 0.5)";
    }
    if (year.value === "") {
      if (day.value !== "") {
        errorMessage[0].textContent = "";
        day.style.borderColor = "";
        day.style.borderRadius = "5px";
        dayLabel.style.color = "hsl(0, 1%, 44%)";
      }
      if (month.value !== "") {
        errorMessage[1].textContent = "";
        month.style.borderColor = "";
        month.style.borderRadius = "5px";
        monthLabel.style.color = "hsl(0, 1%, 44%)";
      }
      errorMessage[2].textContent = "This field is required";
      year.style.borderColor = "rgba(255, 0, 0, 0.5)";
      year.style.borderRadius = "5px";
      yearLabel.style.color = "rgba(255, 0, 0, 0.5)";
    }
  }
}
