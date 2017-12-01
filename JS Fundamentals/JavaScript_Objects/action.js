//Challenge 1
// let students = [
//     { name: 'Remy', cohort: 'Jan' },
//     { name: 'Genevieve', cohort: 'March' },
//     { name: 'Chuck', cohort: 'Jan' },
//     { name: 'Osmund', cohort: 'June' },
//     { name: 'Nikki', cohort: 'June' },
//     { name: 'Boris', cohort: 'June' }
// ];
// // console.log(students[0]);
// for(let student in students){
//     console.log(students[student]);
// }

//Challenge 2
let users = {
    employees: [
        { 'first_name': 'Miguel', 'last_name': 'Jones' },
        { 'first_name': 'Ernie', 'last_name': 'Bertson' },
        { 'first_name': 'Nora', 'last_name': 'Lu' },
        { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
    ],
    managers: [
        { 'first_name': 'Lillian', 'last_name': 'Chambers' },
        { 'first_name': 'Gordon', 'last_name': 'Poe' }
    ]
};
for(let user in users){
    // console.log(users[user]);
    userList = users[user];
    // console.log(user);
    user_type = user;
    count = 0;
    for(let username in userList){
        // console.log(userList[username]['last_name'] + "," + userList[username]['first_name']);
        users_count = userList[username]['last_name'] + "," + userList[username]['first_name'];
        char_count = userList[username]['last_name'].length + userList[username]['first_name'].length;
        // console.log(char_count);
        count += 1;
        message = count + "-" + "" + users_count;
        console.log(user_type + message + " " + "-" + char_count); //keeps printing employees and managers
        // console.log("user_type\n" + message + " " + "-" + char_count); //prints user_type with next line
    }
}