
let buttonList = document.querySelectorAll("button");

buttonList.forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("selection").innerText = `You have given us ${button.value} out of 5!`;
    document.getElementById("index").classList.add("indexHidden");
    document.getElementById("thankYou").classList.remove("thankYouHidden");
  });
});


