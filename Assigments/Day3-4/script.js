// Question : 3 : -
// Create an array of objects with objects having the following property.
//     A. {name(string), age(number), country(string), hobbies array(string[])}
//     B. Write a function to display all the objects on the console.

// Ans : 

var infomation = [
    {
        name: "Smit",
        age: 20,
        country: "India",
        hobbies: ["Cricket", "Designing", "Music"]
    },
    {
        name: "Aash",
        age: 22,
        country: "Japan",
        hobbies: ["Coding", "Table-Tennis", "Music"]
    },
    {
        name: "Harsh",
        age: 32,
        country: "India",
        hobbies: ["Cricket", "Designing", "Football"]
    },
    {
        name: "Rushil",
        age: 35,
        country: "Russia",
        hobbies: ["Cricket", "Football", "Music"]
    }
];

function allinformation () {
    for (let i=0; i< infomation.length; i++){
        console.log(infomation[i]);
    }
}

allinformation();


// Question : 4 : -
// Following the 3rd question 
//     A. Write a function to display all the objects having age less than 30
//     B. Write a function to display all the objects having country india
    
// Ans : A : -

function ageLessThan30 () {
    for ( let i=0; i<infomation.length; i++){
        if (infomation[i].age < 30 ){
            console.log(infomation[i]);
        }
    }
}

ageLessThan30();


// Ans : B :-

function countryIndia () {
    for (let i=0; i<infomation.length; i++) {
        if(infomation[i].country === "India") {
            console.log(infomation[i]);
        }
    }
}

countryIndia ();