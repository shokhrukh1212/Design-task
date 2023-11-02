/* Buttons by their ID s */
const pressButton = document.getElementById("news_button_press");
const videoButton = document.getElementById("news_button_video");
const graphButton = document.getElementById("news_button_graph");

/* Three slider containers by their ID, will change based on which button is clicked */
const firstSliderContainer = document.getElementById("first-slide");
const secondSliderContainer = document.getElementById("second-slide");
const thirdSliderContainer = document.getElementById("third-slide");

function onClickPress() {
  firstSliderContainer.classList.add("first-active");
  secondSliderContainer.classList.remove("second-active");
  thirdSliderContainer.classList.remove("third-active");
  pressButton.classList.add("btn-active");
  videoButton.classList.remove("btn-active");
  graphButton.classList.remove("btn-active");
}

function onClickVideo() {
  firstSliderContainer.classList.remove("first-active");
  secondSliderContainer.classList.add("second-active");
  thirdSliderContainer.classList.remove("third-active");

  pressButton.classList.remove("btn-active");
  videoButton.classList.add("btn-active");
  graphButton.classList.remove("btn-active");
}

function onClickGraph() {
  firstSliderContainer.classList.remove("first-active");
  secondSliderContainer.classList.remove("second-active");
  thirdSliderContainer.classList.add("third-active");

  pressButton.classList.remove("btn-active");
  videoButton.classList.remove("btn-active");
  graphButton.classList.add("btn-active");
}

/* assigning event functions to buttons */
pressButton.addEventListener("click", onClickPress);
videoButton.addEventListener("click", onClickVideo);
graphButton.addEventListener("click", onClickGraph);
