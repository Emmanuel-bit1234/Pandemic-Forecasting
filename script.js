document.addEventListener("DOMContentLoaded", function () {
  fetchData();
  fetchImage();
});

function fetchData() {
  fetch("http://127.0.0.1:5000/forecast") // Update this URL to your Flask API endpoint if different
    .then((response) => response.json())
    .then((data) => {
      displayData(data);
    })
    .catch((error) => console.error("Error:", error));
}

function displayData(data) {
  const table = document.createElement("table");
  let tableHTML = "<tr><th>Date</th><th>New Cases</th></tr>";
  data.forEach((item) => {
    tableHTML += `<tr><td>${item["Unnamed: 0"]}</td><td>${item["New Cases"]}</td></tr>`; // Adjusted to match the property names
  });
  table.innerHTML = tableHTML;
  document.getElementById("data-table").appendChild(table);
}

function fetchImage() {
  const imageUrl = "http://127.0.0.1:5000/forecast_image"; // Update this URL to your Flask API endpoint if different
  document.getElementById("forecast-image").src = imageUrl;
}
