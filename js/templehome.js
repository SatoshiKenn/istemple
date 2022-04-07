const requestURL = "https://satoshikenn.github.io/istemple/data/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temple = jsonObject["temples"];
    let random1 = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    displaytemple1(temple[random1]);
  });

function displaytemple1(temple) {
  let div1 = document.createElement("div");
  div1.setAttribute("id", "temple1");
  let templeh3 = document.createElement("h1");
  let templeimg = document.createElement("img");
  let divcontact = document.createElement("temple-contact");
  let templephone = document.createElement("p");
  let history = document.createElement("p");

  templeh3.textContent = `${temple.name}`;
  templephone.innerHTML = `Telephone: <br>${temple.phone}`;
  history.innerHTML = `History: <br>${temple.history}`;

  templeimg.setAttribute("src", temple.imageurl);
  templeimg.setAttribute("alt", `img of ${temple.name}}`);
  templeimg.setAttribute("loading", "lazy");
  templeimg.setAttribute("class", "templeimg");

  div1.appendChild(templeh3);
  div1.appendChild(templeimg);
  div1.appendChild(divcontact);
  divcontact.appendChild(templephone);
  divcontact.appendChild(history);
  document.querySelector("div.information").appendChild(div1);
}
