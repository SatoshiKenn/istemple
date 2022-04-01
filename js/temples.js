const requestURL =
  "https://satoshikenn.github.io/istemple/data/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temple = jsonObject["temples"];
    temple.forEach(displayBusiness);
    if (viewport_width < 640) {
      let table = document.querySelector(".businesstable");
      let thead = document.createElement("thead");
      thead.setAttribute("id", "thead");
      let th1 = document.createElement("th");
      th1.textContent = "Business";
      thead.appendChild(th1);
      table.appendChild(thead);
      business.forEach(displayBTableS);
    } else if (viewport_width > 640){
      let table = document.querySelector(".businesstable");
      let thead = document.createElement("thead");
      thead.setAttribute("id", "thead");
      let th1 = document.createElement("th");
      th1.textContent = "Name";
      let th2 = document.createElement("th");
      th2.textContent = "Address";
      let th3 = document.createElement("th");
      th3.textContent = "Phone";
      let th4 = document.createElement("th");
      th4.textContent = "Website";
      thead.appendChild(th1);
      thead.appendChild(th2);
      thead.appendChild(th3);
      thead.appendChild(th4);
      table.appendChild(thead);
      business.forEach(displayBTable);
    }
  });

function displayTemple(temple) {
  let card = document.createElement("section");
  card.setAttribute("class", "bcard");

  let logo = document.createElement("img");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");

  h2.textContent = `${business.name}`;
  p.innerHTML = `${business.address}<br/>
    ${business.city}<br/>
    ${business.phone}</br>
    ${business.website}`;

  logo.setAttribute("src", business.imageurl);
  logo.setAttribute("alt", `${business.name}'s logo`);
  logo.setAttribute("loading", "lazy");
  logo.setAttribute("class", "blogo");

  card.appendChild(logo);
  card.appendChild(h2);
  card.appendChild(p);

  document.querySelector("div.cards").appendChild(card);
}

let viewport_width = document.documentElement.clientWidth;

function displayBTableS(business) {
  let table = document.querySelector(".businesstable");
  let row = document.createElement("tr");
  let information = document.createElement("td");

  information.innerHTML = `${business.name}<br> Address: ${business.address}<br>${business.city}<br>Phone: ${business.phone}<br>${business.website}`;
  row.appendChild(information);
  tbody.appendChild(row);
  table.appendChild(tbody);
  document.querySelector(".btable").appendChild(table);
}

function displayBTable(business) {
  let table = document.querySelector(".businesstable");
  let row = document.createElement("tr");
  let tdName = document.createElement("td");
  let tdAddress = document.createElement("td");
  let tdPhone = document.createElement("td");
  let tdWebsite = document.createElement("td");
  let thName = document.createElement("th");
  thName.textContent = "Name";
  tdName.innerHTML = `${business.name}`;
  tdAddress.innerHTML = `${business.address}`;
  tdPhone.innerHTML = `${business.phone}`;
  tdWebsite.innerHTML = `${business.website}`;
  row.appendChild(tdName);
  row.appendChild(tdAddress);
  row.appendChild(tdPhone);
  row.appendChild(tdWebsite);
  tbody.appendChild(row);

  table.appendChild(tbody);

  document.querySelector(".btable").appendChild(table);
}
