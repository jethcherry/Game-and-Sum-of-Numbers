

// Question Two
 
// Write a JavaScript function that takes a comma-separated numbers as input and returns the sum of those numbers. The function should validate the input:
 
// If any non-numeric characters are present (except commas), treat those values as zero.
// If the input string is empty, return zero.



function getSum(input)
{
    if(!input) return 0

    const givenNumbers = input.split(',').map(Number)
    const totalSum = givenNumbers.reduce((acc,number)=> acc + (isNaN(number) ? 0 : number),0)
    return totalSum
}

console.log(getSum("1,2,3,4,5,6,7,8"))
console.log(getSum("23,45,65,67"))
console.log(getSum("34,a,34"))
console.log(getSum(""))