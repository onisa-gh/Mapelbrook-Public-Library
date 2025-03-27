const barsIcon = document.querySelector("#burger");
// naming a consonant and selecting the hamburger menu icon


const navMenu = document.querySelector(".menu");
// naming a consonant and selcting the navigation list

console.log(barsIcon);
console.log(navMenu);
// making sure the consonants are correct

function showMenu() {
    // naming a function and saying what this function will do below

    navMenu.classList.toggle("show");
    // adding a class to the menu
}

barsIcon.addEventListener("click", showMenu);
// this will link the function to the burger bars

const collapses = document.querySelectorAll(".collapse");

collapses.forEach(collapse => {
    collapse.addEventListener("click", () => {
        collapse.classList.toggle("open");
        // toggele the class open to the collapse whenever clicked
    });
});


var today = new Date();
// Get the current date and time

var hourNow = today.getHours();
// Get the current hour

var greeting;
// variables to store the greeting

console.log(today);
// Show the date and time in the console to check if it is working 

console.log(hourNow);
// Show the hour in the console

// Check the time and decide the greeting
if (hourNow < 12) {
    // if the clock is less than 12
    greeting = 'Good Morning';

} else if (hourNow < 17) {
    // if the clock is less than 17
    greeting = "Good Afternoon!";

} else if (hourNow < 24) {
    // if the clock is less than 24 (am)
    greeting = 'Good Evening';

} else {
    // in case there is no time
    greeting = "Hello There!";
}

console.log(greeting);
// console log the greeting to check if it is working

var container = document.getElementById("greeting");
// calling the place the greeting will be printed in the document

container.innerHTML = "<h3>" + greeting + "</h3>";
// adding the greeting as an html