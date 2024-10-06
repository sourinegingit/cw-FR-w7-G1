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

const data = [
  { name: "banana", count: 2, pricePerOne: 45000, discount: 5 },
  { name: "potato", count: 8, pricePerOne: 23000, discount: 15 },
  { name: "onion", count: 12, pricePerOne: 12000, discount: 10 },
];

//function for calcaluate discount refer to question 4 week 4
function dataHandle(data) {
  let sum = 0;
  return data.map((item) => {
    const discountAmount = (item.pricePerOne * item.discount) / 100;
    const finalPrice = item.pricePerOne - discountAmount;
    sum += finalPrice * item.count;
    return {
      1: item.name,
      2: item.count,
      3: item.pricePerOne,
      4: finalPrice,
      5: sum,
    };
  });
}

//dom for assign data to table

const finalData = dataHandle(data);
for (let i = 1; i <= 5; i++) {
  let td = document.querySelector(`.b${i}`);
  td.innerHTML = `${finalData[0][i]}`;
}

for (let i = 1; i <= 5; i++) {
  let td = document.querySelector(`.p${i}`);
  td.innerHTML = `${finalData[1][i]}`;
}
for (let i = 1; i <= 5; i++) {
  let td = document.querySelector(`.o${i}`);
  td.innerHTML = `${finalData[2][i]}`;
}
