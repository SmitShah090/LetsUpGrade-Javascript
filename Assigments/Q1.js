// Question 1 : -
// Create a array containg five objects with properties  {name, age, city, salary}
//     A. Display all the objects in a table
//     B. Create a search functionality for name and city
//     C. Delete button to delete records
//     D. Data is not permanent

//Ans : -

var infomations = [
    {
        name: "Jayesh",
        age: 22,
        city: "Vadodara",
        salary: 20000,
    },
    {
        name: "Mahesh",
        age: 24,
        city: "Surat",
        salary: 25000,
    },
    {
        name: "Ramesh",
        age: 27,
        city: "Navsari",
        salary: 29000,
    },
    {
        name: "Yomesh",
        age: 28,
        city: "Vadodara",
        salary: 30000,
    }
    
];

// Display all the object in a table :-
function dispaly ( informationarray) {

    let tabledata = "";

    informationarray.forEach( function (information, index) {

        let currentdata = `<tr>
        <td>${index+1}</td>
        <td>${information.name}</td>
        <td>${information.age}</td>
        <td>${information.city}</td>
        <td>${information.salary}</td>
        <td> <button onclick='deleteInformation(${index})'>delete</button> </td>
        </tr>`;
    
        tabledata += currentdata;
    
    } );

    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;

}

dispaly(infomations);

// Create a search functionality for name and city :-
function searchByName () {

    let searchValueName = document.getElementById("searchName").value;

    let newNameData = infomations.filter(function(information) {
        return (
            information.name.toUpperCase().indexOf(searchValueName.toUpperCase()) != -1
            );
    });

    dispaly(newNameData);

}

function searchByCity () {

    let searchValueCity = document.getElementById("searchCity").value;

    let newCityData = infomations.filter(function(information) {
        return (
            information.city.toUpperCase().indexOf(searchValueCity.toUpperCase()) != -1
        );
    });

    dispaly(newCityData);

}

// Delete button to delete records :-
function deleteInformation (index) {

    infomations.splice(index, 1);
    dispaly(infomations);

}


// Question 2 : -
// Create a blank array and later on create a add bus functionality bus object contains{ name, sourec, destination, number, passenger capacity }
//     A. A form to add new bus
//     B. Display data in table format
//     C. Search by source and destination
//     D. Data should be soted permanently in localstorage

//Ans : -

