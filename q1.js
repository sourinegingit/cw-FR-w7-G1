const icon = document.querySelector(".icon");
const form = document.querySelector(".form");
icon.addEventListener("click", () => {
  changeFormTheme(form);
});

function changeFormTheme(form) {
  let theme = form.getAttribute("data-theme");

  if (theme === "dark") {
    form.setAttribute("data-theme", "light");
  } else {
    form.setAttribute("data-theme", "dark");
  }
}
// question 2----------------------------------

// const data = [
//   { name: "banana", count: 2, pricePerOne: 45000, discount: 5 },
//   { name: "potato", count: 8, pricePerOne: 23000, discount: 15 },
//   { name: "onion", count: 12, pricePerOne: 12000, discount: 10 },
// ];

function factor(data) {
  let sum = 0;

  return data.map((item) => {
    const discountAmount = (item.pricePerOne * item.discount) / 100;
    const finalPrice = item.pricePerOne - discountAmount;
    sum += finalPrice * item.count;
    return {
      name: item.name,
      count: item.count,
      pricePerOne: item.pricePerOne,
      discount: item.discount,
      finalPrice: finalPrice,
      totalprice: sum,
    };
  });
}
let info = factor(data);

//DOM

let table = document.createElement("table");
table.className = "myTable";

// Create a header row
let thead = table.createTHead();
let row = thead.insertRow();
let headers = [
  "row",
  "Product name",
  "count",
  "price per one before discount",
  "price per one after discount",
  "Total",
];
headers.forEach((headerText) => {
  let th = document.createElement("th");
  th.appendChild(document.createTextNode(headerText));
  row.appendChild(th);
});

// Create a body for your table
let tbody = table.createTBody();
let data = [
  { name: "banana", count: 2, pricePerOne: 45000, discount: 5 },
  { name: "potato", count: 8, pricePerOne: 23000, discount: 15 },
  { name: "onion", count: 12, pricePerOne: 12000, discount: 10 },
];

info.forEach((item) => {
  let row = tbody.insertRow();
  Object.values(item).forEach((text) => {
    let cell = row.insertCell();
    cell.appendChild(document.createTextNode(text));
  });
});

// Append the table to the body of the document
document.body.appendChild(table);
