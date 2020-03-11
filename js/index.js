// Classes
class User {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

class Record {
    constructor(date, exercise, liftWeight) {
        this.date = date;
        this.exercise = exercise;
        this.liftWeight = liftWeight;
    }
}

class App {
    constructor() {
        this.user = null;
        this.records = [];
    }

    setUser() {
        let name = prompt("Enter your name: ", "Tim Tong");
        let height = prompt("Enter your height(in): ", "70");
        let weight = prompt("Enter your weight(lbs): ", "180");
        this.user = new User(name, height, weight);
        updateRecord(this);
    }

    addRecord() {
        let date = prompt("Enter Date(MM/DD/YY): ", "03/06/20");
        let exercise = prompt("Enter Exercise: ", "Deadlift");
        let liftWeight = prompt("Enter lift weight(lbs): ", "315");
        let newRecord = new Record(date, exercise, liftWeight);
        this.records.push(newRecord);
        updateRecord(this);
    }
}

let myApp = new App();

// Main Script
if (myApp.user) {
    let addUserName = document.querySelector('#app-user-name');
    addUserName.innerHTML = `${myApp.user.name}`;
} else {
    let addUserName = document.querySelector('#app-user-name');
    let addUserHeight = document.querySelector('#app-user-height');
    let addUserWeight = document.querySelector('#app-user-weight');
    addUserName.innerHTML = "Not Set";
    addUserHeight.innerHTML = "Not Set";
    addUserWeight.innerHTML = "Not Set";
}

// Clearing Personal Record Table
let personalRecordTbody = document.querySelector('#personal-record tbody');
personalRecordTbody.innerHTML = '';

// Event listener for inputting lifters info
let inputLiftersInfoButton = document.querySelector('#input-lifters-info');
inputLiftersInfoButton.addEventListener('click', function (e) {
    console.log('Calling setUser() method.');
    myApp.setUser();
})

// Event listener for logging record
let logNewRecordButton = document.querySelector('#log-new-record');
logNewRecordButton.addEventListener('click', function (e) {
    console.log('Calling addRecord() method.');
    myApp.addRecord();
})

// Update app to initialize the content
updateRecord(myApp);

function updateRecord(app) {
    let personalRecordTbody = document.querySelector('#personal-record tbody');
    // Clear Record Content
    personalRecordTbody.innerHTML = '';
    if (app.user) {
        let addUserName = document.querySelector('#app-user-name');
        addUserName.innerHTML = `${app.user.name}`;
    } else {
        let addUserName = document.querySelector('#app-user-name');
        addUserName.innerHTML = "Not Set";
    }

    if (app.user) {
        let addUserHeight = document.querySelector('#app-user-height');
        addUserHeight.innerHTML = `${app.user.height}`;
    } else {
        let addUserHeight = document.querySelector('#app-user-height');
        addUserHeight.innerHTML = "Not Set";
    }

    if (app.user) {
        let addUserWeight = document.querySelector('#app-user-weight');
        addUserWeight.innerHTML = `${app.user.weight}`;
    } else {
        let addUserWeight = document.querySelector('#app-user-weight');
        addUserWeight.innerHTML = "Not Set";
    }
    // Populate Record Content
    for (record of app.records) {
        // Create a new row for the table
        let newTR = document.createElement('tr');
        // Create table cells for each data point and append them to the new row
        let dateTD = document.createElement('td');
        dateTD.innerHTML = record.date;
        newTR.appendChild(dateTD);

        let exerciseTD = document.createElement('td');
        exerciseTD.innerHTML = record.exercise;
        newTR.appendChild(exerciseTD);
        
        let liftWeightTD = document.createElement('td');
        liftWeightTD.innerHTML = record.liftWeight;
        newTR.appendChild(liftWeightTD);
        
        personalRecordTbody.appendChild(newTR);
    }
} 