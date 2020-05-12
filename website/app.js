/**  Global Variables
 *    Please use German postal codes to test
 *    You can use "67059" for Ludwigshafen am Rhein, Germany
 **/
const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
let api_Key = "b571e009c37ae154cf536c52b84b2f1c";
const countryCode = "de";
const queryParameter = "&appid=";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Click Event "Generate" : Used Tutorial: FEND Udacity Async JS Lesson 4: Adding Fetch to Your Code
document.getElementById("generate").addEventListener("click", executeAction);

function executeAction(e) {
  const zipCode = document.getElementById("zip").value;
  console.log("Date: " + newDate);
  console.log("Zipcode: " + zipCode);
  getData(baseURL, zipCode, api_Key)
    .then(function (data) {
      postData('http://localhost:8000/addWeather', { temperature: data.temp, date: newDate, userEntry: feelings })
        .then(function () {
          uiUpdate()
        })
    })
}

// Async GET (Client takes data from Server)
const getData = async (baseURL, zipCode, api_Key) => {
  // Open Weather Map API
  const getReq = await fetch(baseURL + zipCode + "," + countryCode + queryParameter + api_Key)
  /** Solution for the CORS blocked policy. Found solution in Peer Project Help.
   *  Detailed explanation
   *  https://www.freecodecamp.org/forum/t/calling-openweathermap-api-is-blocked-due-to-cors-header-access-control-allow-origin-missing/191868
   *  https://www.freecodecamp.org/forum/t/cross-domain-calls-why-sometimes-needs-callback/177690
  **/
  // headers.delete()
  console.log(getReq);

  try {
    const data = await getReq.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("An error occured", error);
  }
};

// Async POST request (Client sending data to Server)
const postData = async (url = "", data = {}) => {
  console.log(data);
  const postReq = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  try {
    const newData = await postReq.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("An error occured", error);
    // appropriately handle the error
  }
};

// postData("/addWeather", { Location: "Frankfurt", Temperature: "20°C" });

// Updating the UI is the last thing we do. This function depends on previous data
const uiUpdate = async () => {
  const uiRequest = await fetch("/allData");
  try {
    const allData = await uiRequest.json();
    document.getElementById("date").innerHTML = allData.date;
    document.getElementById("temp").innerHTML = allData.temp;
    document.getElementById("content").innerHTML = allData.userEntry;
  } catch (error) {
    console.log("An error occured", error);
  }
}