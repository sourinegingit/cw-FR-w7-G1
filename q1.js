const icon = document.querySelector(".icon");
const form = document.querySelector(".form");
// const input=document.querySelectorAll("input")
// console.log(input);

// const label=document.querySelectorAll("label")
// const button=document.querySelector("button")
// const container=document.querySelector(".container")
// // console.log(icon);
// icon.addEventListener('click',changeColor)

// function changeColor() {

//     container.style.backgroundColor="gray";

//     button.style.backgroundColor="green";
//     form.style.backgroundColor="white";

// }
// console.log(input);
// Array.from(input).map((item)=>{
//     // console.log(item);

//     })

icon.addEventListener("click", () => {
  changeFormTheme(form);
});

function changeFormTheme(form) {
  let theme = form.getAttribute("data-theme");
//   theme = "dark"
//   if (theme === "dark") {
//     theme = "light";

//   } else {
//     theme = "dark";

//   }
//   console.log(theme);


theme = (theme === 'dark') ? 'light' : 'dark';
}
