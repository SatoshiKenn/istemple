const requestURL = "https://satoshikenn.github.io/istemple/data/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temple = jsonObject["temples"];
    temple.forEach(displayTemple);
  });

function displayTemple(temple) {
  let card = document.createElement("section");
  card.setAttribute("class", "bcard");

  let templeimg = document.createElement("img");
  let h2 = document.createElement("h2");
  let address = document.createElement("p");
  let services = document.createElement("p");
  let atelephone = document.createElement("a");
  let telephone = document.createElement("p");
  let ordinances = document.createElement("p");
  let sessions = document.createElement("p");
  let closures = document.createElement("p");
  let history = document.createElement("p");


  h2.textContent = `${temple.name}`;
    
  address.innerHTML = `<strong>Address:</strong> ${temple.address}`;
  services.innerHTML = `<strong>Services:</strong> ${temple.services}`;
  atelephone.setAttribute("href", `tel:${temple.phone.substring(1)}`)
  telephone.innerHTML = `<strong>Telephone: </strong>`;
  ordinances.innerHTML = `<strong>Ordinances schedule:</strong> ${temple.ordinanceS}`;
  sessions.innerHTML = `<strong>Session schedule:</strong> ${temple.sessionS}`;
  closures.innerHTML = `<strong>Closures:</strong><br>${temple.closure}`;
  history.innerHTML = `<strong>History:</strong> ${temple.history}`;
  atelephone.innerHTML = `${temple.phone}`

  closures.setAttribute("class", "closurep");
  templeimg.setAttribute("src", temple.imageurl);
  templeimg.setAttribute("alt", `${temple.name}'s logo`);
  templeimg.setAttribute("loading", "lazy");
  templeimg.setAttribute("class", "timg");

  card.appendChild(templeimg);
  card.appendChild(h2);
  card.appendChild(address);
  card.appendChild(services);
  telephone.appendChild(atelephone)
  card.appendChild(telephone);
  card.appendChild(ordinances);
  card.appendChild(sessions);
  card.appendChild(closures);
  card.appendChild(history);


  document.querySelector("div.cards").appendChild(card);
}
