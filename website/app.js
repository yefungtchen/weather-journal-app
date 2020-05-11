/* Global Variables */
const owmURL = "api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "fa42b0d875248b9ed2383b52c62b0251";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Async POST Function Tutorial used: FEND Udacity Lesson 4 Asynchronous JavaScript
const postData = async (url = "", data = {}) => {
  // console.log(data)
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

// postData("/addMovie", { movie: " the matrix", score: 5 });

// Async GET

// Updating the UI

// Click Event "Generate"
