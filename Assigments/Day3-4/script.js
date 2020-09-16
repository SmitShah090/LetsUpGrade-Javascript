//Question : 2 :-
// Create a webpage containing two input fields and a button.
//     A. Write something in the first input
//     B. On click of the button, the content of input one should be copied in the second input

// Ans : - 

function submit () {
    const eles = document.getElementsByClassName("First");
    const neweles = eles[0].value;
    console.log(neweles);
    eles[1].value = neweles ;
}


// Question :1 : -
// Create a webpage containg an image and three buttons 
//     A. On click of the second button a change the existing image to a new image
//     B. On click of the third button change it once again
//     C. On click of first, the first image should Come back

// Ans : -

function button2 () {
    const ele1 = document.getElementById("Img");
    const URL2 = "2.png";
    ele1.src = URL2;
}

function button3 () {
    const ele2 = document.getElementById("Img");
    const URL3 = "3.jpg";
    ele2.src = URL3;
}

function button1 () {
    const ele3 = document.getElementById("Img");
    const URL1 = "1.jpg";
    ele3.src = URL1;
}


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

