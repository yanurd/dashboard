var toggler = document.getElementById("toggle-control");

const changeBackground = () => {
  var header = document.querySelector(".header");
  var bigOverview = document.querySelectorAll(".big-overview");
  let smallOverview = document.querySelectorAll(".overview-card");
  let body = document.querySelector(".body")
  let main = document.querySelector(".main")
  toggleElement(body)
  toggleElement(main)
  toggleElement(header)
  toggleCards(bigOverview)
  toggleCards(smallOverview)
  };


const toggleCards = (cards) => {
  cards.forEach((card) => {
    toggler.checked
      ? card.classList.toggle("dark-bg")
      : card.classList.toggle("dark-bg");
  });
};

const toggleElement = (elem) => {
  toggler.checked
      ? elem.classList.toggle("dark-bg")
      : elem.classList.toggle("dark-bg");
}

toggler.addEventListener("click", changeBackground);
