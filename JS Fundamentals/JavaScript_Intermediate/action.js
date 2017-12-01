//Part I
// function starString(n){
//    for(var i = 1; i<=n; i++){
//        let str = '';
//        for(var j = 1; j<=i; j++){
//            str += '*';
//            console.log(str);
//        }
//    } 
// }
// let result = starString(8);
// console.log(result);

//Part II
// function drawStars(arr) {
//     let x = [4, 6, 1, 3, 5, 7, 25];
//     for (var i = 0; i < x.length; i++) {
//         arr[i] = arr[i] * '*';
//         for (var j = 1; j <= i; j++) {
//             arr += '*';
//             console.log(arr);
//         }
//     }
// }
// let result = drawStars([4, 6, 1, 3, 5, 7, 25]);
// console.log(result);

//Part III
function drawStars(arr){
    for(var i= 0; i<arr.length; i++){
        if(typeof(arr[i]) === 'number'){
            console.log(arr[i] * '*'); //this is printing NaN
        }
        else if(typeof(arr[i]) === 'string'){
            console.log(arr[i][0]);
        }
    }
}
let result = drawStars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]);
console.log(result);