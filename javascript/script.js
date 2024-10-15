setInterval(function () {
  //perth
  let perthElement = document.querySelector("#perth");
  let perthDateElement = perthElement.querySelector(".date");
  let perthTimeElement = perthElement.querySelector(".time");
  let perthTime = moment().tz("Australia/West");

  perthDateElement.innerHTML = perthTime.format("MMMM Do YYYY");
  perthTimeElement.innerHTML = perthTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);

setInterval(function () {
  //darwin

  let darwinElement = document.querySelector("#darwin");
  let darwinDateElement = darwinElement.querySelector(".date");
  let darwinTimeElement = darwinElement.querySelector(".time");
  let darwinTime = moment().tz("Australia/Darwin");

  darwinDateElement.innerHTML = darwinTime.format("MMMM Do YYYY");
  darwinTimeElement.innerHTML = darwinTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

setInterval(function () {
  //brisbane

  let brisbaneElement = document.querySelector("#brisbane");
  let brisbaneDateElement = brisbaneElement.querySelector(".date");
  let brisbaneTimeElement = brisbaneElement.querySelector(".time");
  let brisbaneTime = moment().tz("Australia/Brisbane");

  brisbaneDateElement.innerHTML = brisbaneTime.format("MMMM Do YYYY");
  brisbaneTimeElement.innerHTML = brisbaneTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

setInterval(function () {
  //auckland

  let aucklandElement = document.querySelector("#auckland");
  let aucklandDateElement = aucklandElement.querySelector(".date");
  let aucklandTimeElement = aucklandElement.querySelector(".time");
  let aucklandTime = moment().tz("Pacific/Auckland");

  aucklandDateElement.innerHTML = aucklandTime.format("MMMM Do YYYY");
  aucklandTimeElement.innerHTML = aucklandTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
<div class="city">
<h2>${cityTimeZone}</h2>
<div class="date">${cityTime.format("MMMM Do YYYY")}</div>
<div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small>
  </div>
</div>`;
}

let citiesSelectElement = document.querySelector("#select-city");

citiesSelectElement.addEventListener("change", updateCity);
