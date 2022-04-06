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

  let logo = document.createElement("img");
  let h2 = document.createElement("h2");
  let address = document.createElement("p");
  let services = document.createElement("p");
  let telephone = document.createElement("p");
  let ordinances = document.createElement("p");
  let sessions = document.createElement("p");
  let closures = document.createElement("p");
  let history = document.createElement("p");
  let a = document.createElement("a");


  h2.textContent = `${temple.name}`;
    
  address.innerHTML = `<strong>Address:</strong> ${temple.address}`;
  services.innerHTML = `<strong>Services:</strong> ${temple.services}`;
  telephone.innerHTML = `<strong>Telephone:</strong> ${temple.phone}`;
  ordinances.innerHTML = `<strong>Ordinances schedule:</strong> ${temple.ordinanceS}`;
  sessions.innerHTML = `<strong>Session schedule:</strong> ${temple.sessionS}`;
  closures.innerHTML = `<strong>Closures:</strong> ${temple.closure}`;
  history.innerHTML = `<strong>History:</strong> ${temple.history}`;
  logo.setAttribute("src", temple.imageurl);
  logo.setAttribute("alt", `${temple.name}'s logo`);
  logo.setAttribute("loading", "lazy");
  logo.setAttribute("class", "blogo");

  card.appendChild(logo);
  card.appendChild(h2);
  card.appendChild(address);
  card.appendChild(services);
  card.appendChild(telephone);
  card.appendChild(ordinances);
  card.appendChild(sessions);
  card.appendChild(closures);
  card.appendChild(history);


  document.querySelector("div.cards").appendChild(card);
}
