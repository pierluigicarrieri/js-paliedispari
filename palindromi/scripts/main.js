// Variables for html elements.

const inputWordElement = document.getElementById("input_word");
const checkElement = document.getElementById("check");
const resultElement = document.getElementById("result");

// Event listener to start program.

checkElement.addEventListener("click", function() {

    // Gets word to check

const wordToCheck = inputWordElement.value;

/* Calls function to check if the word is a palindrome, 
saves its return in the "result" variable. */

const result = wordChecker(wordToCheck);

// Output

resultElement.innerHTML = "Inserted word " + result;

}
)

/**
 * Checks if a word is a palindrome
 * @param {string} wordToCheckParameter
 * @returns {string}
 */
function wordChecker (wordToCheckParameter) {

    const k = wordToCheckParameter.length;

    for (let i = 0; i < (k / 2); i++) {

        if (wordToCheckParameter[i] !== wordToCheckParameter[k - 1 - i]) {

            return "is not a palindrome";

        }

    }        
    
    return "is a palindrome";
        
}







    
