//Math 1
// function zero_negativity(arr){
//    for(var i= 0; i<arr.length; i++){
//     if(arr[i] < 0){
//         return false;
//     }
//     else{
//         return true;
//     }
// }
// }
// let result = zero_negativity([0,9,7,1]);
// console.log(result);

//Math 2
// function is_even(x){
//     if(x%2 ==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let result = is_even(x=2);
// console.log(result);

//Math 3
// function how_many_even(callback, arr){ //cant just pass the function as the variable in this parameter. Must call it something else then define it as an argument 
//     let count = 0;
//     for(var i=0; i<arr.length; i++){
//         if(callback(arr[i]) == true)
//         count ++;
//     }
//     return count;
// }
// let result1 = how_many_even(is_even,[2,3,5,6,8]); 
// console.log(result1);

//Math 4
// function create_dummy_array(n){
//    let arr = []; 
//    for(var i =0; i<= n; i++){
//        arr.push(Math.floor(Math.random() * 10));
//    }
//    return arr;
// }
// let result = create_dummy_array(9);  // only outputting 1 number of the array when it should be spitting out whatever I make 'n'---that's because i was not looping through 9! That;s how ou loop for a given amount of times 
// console.log(result);

//Math 5
function random_choice(arr){
    var items = arr;
    var item = items[Math.floor(Math.random() * items.length)];
    return item;
}
let result = random_choice([3,'string', 5, 'coding', 10]);
console.log(result);