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
