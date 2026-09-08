const form = document.getElementById("form")
const numOne = document.getElementById("num1")
const numTwo = document.getElementById("num2")
const resultText = document.getElementById("result")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // const numOneVal = numOne.valueAsNumber;
    // const numTwoVal = numTwo.valueAsNumber;
    const numOneVal = Number(numOne.value);
    const numTwoVal = Number(numTwo.value);

    resultText.innerText = `${numOneVal} + ${numTwoVal} = ${numOneVal + numTwoVal}`
})
