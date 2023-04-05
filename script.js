// Bank form code 
// We're getting all three main divs here, so later on we can do manipulation.
const savingsDiv = document.getElementById("SavingsAccount");
const currentAccount = document.getElementById("CurrentAccount");
const submitDate = document.getElementById("submitDate");
const birthDate = document.getElementById("birthday");
const phoneNumber = document.getElementById("phone");
const submitButton = document.getElementById("submit_button");


// A new date instance is initialized to get the current date.
const date = new Date();
let day = date.getDate();
// Adding + 1 for the month because the month starts at 0 (Ex: 0 = January, and 1 = February)
let month = date.getMonth() + 1;
const year = date.getFullYear();

// Adding 0 as a prefix for single-digit numbers
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

const today = year + "-" + month + "-" + day;

// Setting the current date as a form submission date
submitDate.value = today;
// Setting the maximum date to the current day to prevent the user from accidentally selecting any feature date. 
birthDate.setAttribute("max", today);

// Based on the account selection, the user can see different forms.
function selectAccount(value) {
    // If the selected value is savings, then the savings form section will be shown to the user; otherwise, it will be the current account.
    if (value === "savings") {
        savingsDiv.style.display = "block";
        currentAccount.style.display = "none";
    } else if (value === "current") {
        savingsDiv.style.display = "none";
        currentAccount.style.display = "block";
    }
}

// Preventing user to enter non-numeric numbers
function validatePhoneNumber(value) {
    if (isNaN(value)) {
        alert("Only numbers are allowed");
        // Removing last char because it is a non-numeric
        phoneNumber.value = value.slice(0, -1);
    } else {
        phoneNumber.value = value;
    }
}

// Event listener
addEventListener("resize", function (event) {
    alert("Screen size is changed");
})

// Creating new label element 
const dateLabel = document.createElement("label");
dateLabel.innerText = "Submit Date: ";
dateLabel.id= "submitDateId";
dateLabel.className = "submitLabelClass"; 
document.getElementById("formSubmit_Section").insertBefore(dateLabel, submitDate);
