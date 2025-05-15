let num = Number(prompt("Enter a number: "));

function calculateFactorial(num){
    let factorial = 1;
    for (let i = num; i > 0; i--) {
        factorial *= i
    }
    return factorial;
}
if (num<0) {
    alert("Enter a valid non-negative number!")
}
else{
    let result = calculateFactorial(num);
    console.log(`The factorial of ${num} is ${result}`);
    document.body.querySelector(".result").innerHTML=`The factorial of ${num} is ${result}`
}