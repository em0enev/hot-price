import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const hot = document.querySelectorAll(".hot")


  for (let i = 0; i < hot.length; i++) {
    hot[i].innerHTML += "🔥"
    console.log(hot[i].innerHTML)
  }
});
