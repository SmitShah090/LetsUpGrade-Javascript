// Question 1 : Program to search for a particular character in a string : -

// Ans : -

var data1 = "LetsUpGrade";
var searching = data1.search("U");
console.log(searching);


// Question 2 : Programs to convert minutes to seconds : -

//Ans : -

var minutes = 30;
var seconds = (minutes * 60);
console.log(seconds);


// Question 3 : Program to search for a element in a array of strings : -

//Ans : -

var data2 = ["Welcome", "to", "LetsUpGrade", "Community"];
var found = data2.find(function(e) {
    for (var i=0; i<data2.length; i++){
        return e;
    }
})
console.log(found("to"));


// Question 4 : - Program to display only elements containg 'a' in them from a array : -

//Ans : -

var data3 = ["Hello", "I", "a", "Smit"];
var ans = data3.values();
for (let elements of ans) { 
    if(elements=='a'){
        console.log(elements); 
    }
}


// Question 5 : - Print an array in reverse order : -
 
//Ans : -

var data4 = ["Hello", "Good", "Evening"];
var ans2 = data4.reverse();
console.log(ans2);