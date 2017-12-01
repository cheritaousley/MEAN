// function magic_multiply(x, y){
//     let magic = x * y;
//     return magic;
// }
// let test1 = magic_multiply(5, 2); //can print wither way..in this 2 step process where you store it in a variable then console log that variable
// console.log(test1);
// console.log(magic_multiply(5,2)); //or we can console log the function and pass numbers through as arguements
//very important to note that we couldn't just call back on the function, becase we wouldn't see what it printed. This is because we were returning within the function. We did not print anything so this explains why we print in these last two ways

// function magic_multiply(x, y) {
//     let magic = x * y;
//     return magic;
// }
// let test2 = magic_multiply(0, 0); 
// console.log(test2);

function magic_multiply(arr, x, y) {
    let magic = arr * y;
    return magic;
}
let test3 = magic_multiply([1,2,3], 2);
console.log(test3);