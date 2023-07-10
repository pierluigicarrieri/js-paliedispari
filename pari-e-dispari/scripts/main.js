
const computerResultElement = document.getElementById("computer_result");
const sumResultElement = document.getElementById("sum_result");
const winOrLoseResultElement = document.getElementById("win_or_lose_result");
const choiceOfUserElement = document.getElementById("choice_of_user");
const numberOfUserElement = document.getElementById("number_of_user");


numberOfUserElement.addEventListener("change", function () {

    const choiceOfUser = choiceOfUserElement.value;
    const numberOfUser = numberOfUserElement.value;

    const numberOfComputer = computerNumberGenerator();

    const numbersSum = sum(numberOfUser, numberOfComputer);

    computerResultElement.innerHTML = `Number for computer is ${numberOfComputer}`;

    sumResultElement.innerHTML = `Sum of user and computer number is ${numbersSum}`;

    if (choiceOfUser === evenOrOdd(numbersSum)) {

        winOrLoseResultElement.innerHTML = `User WINS!!`

    } else {

        winOrLoseResultElement.innerHTML = `User LOSES!! Computer Wins`

    }

}

)





function computerNumberGenerator () {

    const randomNumber = ((Math.floor(Math.random() * 5) + 1));

    return randomNumber;

}

function sum (userNumber, computerNumber) {

    const userNumberConverted = parseInt(userNumber);
    const computerNumberConverted = parseInt(computerNumber);

    sumOfNumbers = userNumberConverted + computerNumberConverted;

    return sumOfNumbers;

}

function evenOrOdd (numbersSumParameter) {

    if(numbersSumParameter % 2 === 0) {

        return "even";

    } else {

        return "odd";

    }

}


