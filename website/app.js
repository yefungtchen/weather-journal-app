/* Global Variables */
const baseURL = "api.openweathermap.org/data/2.5/weather?zip=";
let api_Key = "fa42b0d875248b9ed2383b52c62b0251";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Async POST Function Tutorial used: FEND Udacity Lesson 4 Asynchronous JavaScript
const postData = async (url = "", data = {}) => {
  // console.log(data)
  const postResponse = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  try {
    const newData = await postResponse.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

// postData("/addMovie", { movie: " the matrix", score: 5 });

// Async GET
const getData = async (baseURL, zip, api_Key) => {
  const getRequest = await fetch(baseURL + zip + api_Key);
  console.log(getRequest);
  try {
    const data = await getRequest.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// Updating the UI

// Click Event "Generate" : Used Tutorial: FEND Udacity Async JS Lesson 4: Adding Fetch to Your Code
document.getElementById("generate").addEventListener("click", executeAction);

function executeAction(e) {
  const zip = document.getElementById("zip").value;
  console.log(zip);
  const feelings = document.getElementById("feelings").value;
  console.log(feelings);
  function receiveTemperature(baseURL, zip, feelings, api_Key) {
    // Add the Data to the POST request
  }
  // POST request: Adding the data which is written into the zip and feelings field
}
