"use strict";
/* Module 4: Develop typed functions using TypeScript
   Lab Start  */
/*  TODO: Convert the sortDescending and sortAscending functions to anonymous
    functions. */
/*  sortDescending is a comparison function that tells the sort method how to sort
    numbers in descending order */
const sortDescending = (a, b) => {
    if (a > b) {
        return -1;
    }
    else if (b > a) {
        return 1;
    }
    else {
        return 0;
    }
};
/*  sortDescending is a comparison function that tells the sort method how to sort
    numbers in ascending order. */
const sortAscending = (a, b) => {
    if (a > b) {
        return 1;
    }
    else if (b > a) {
        return -1;
    }
    else {
        return 0;
    }
};
function buildArray(items, sortOrder) {
    let randomNumbers = [];
    let nextNumber;
    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        }
        else {
            counter--;
        }
    }
    if (sortOrder === "ascending") {
        return randomNumbers.sort(sortAscending);
    }
    else {
        return randomNumbers.sort(sortDescending);
    }
}
let myArray1 = buildArray(12, "ascending");
let myArray2 = buildArray(8, "descending");
/*  EXERCISE 2
    TODO: Update the LoanCalculator function. */
function loanCalculator(principle, interestRate, months = 12) {
    let interest = interestRate / 1200; // Calculates the monthly interest rate
    let payment;
    payment = (principle * interest) / (1 - Math.pow(1 / (1 + interest), months));
    return payment.toFixed(2);
}
