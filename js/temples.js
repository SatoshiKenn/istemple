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
  let p = document.createElement("p");

  h2.textContent = `${temple.name}`;
  p.innerHTML = `<strong>Address:</strong> ${temple.address}<br/>
    <strong>Services:</strong> ${temple.services}<br/>
    <strong>Telephone:</strong> ${temple.phone}</br>
    <strong>History:</strong> ${temple.history}</br>
    <strong>Ordinances schedule:</strong> ${temple.ordinances}</br>
    <strong>Session schedule:</strong> ${temple.sesssionS}</br>
    <strong>Closures:</strong> ${temple.closure}`;

  logo.setAttribute("src", temple.imageurl);
  logo.setAttribute("alt", `${temple.name}'s logo`);
  logo.setAttribute("loading", "lazy");
  logo.setAttribute("class", "blogo");

  card.appendChild(logo);
  card.appendChild(h2);
  card.appendChild(p);

  document.querySelector("div.cards").appendChild(card);
}
