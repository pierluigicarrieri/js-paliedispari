Variables for html

const inputWordElement = document.getElementById("input_word");
const checkElement = document.getElementById("check");
const resultElement = document.getElementById("result");

checkElement.addEventListener("click", function() {

const wordToCheck = inputWordElement.value;

const result = wordChecker(wordToCheck);

resultElement.innerHTML = "Inserted word is " + result;

}
)


function wordChecker (wordToCheckParameter) {

    const k = wordToCheckParameter.length;

    for (let i = 0; i < (k / 2); i++) {

        if (wordToCheckParameter.charAt(i) !== wordToCheckParameter.charAt(k - 1 - i)) {

            return "is not palindrome";

        } else {
            
            return "is palindrome";
        
        }

    }

}






    
