("use strict");
import {
  nextGaragePage,
  prevGaragePage,
  prevWinnersPage,
  nextWinnersPage,
  currentGaragePage,
  currentWinnersPage,
} from "./view/view";
import { garagePageNum, winnersPageNum, updateBTN } from "./view/view";
import { updateCar } from "./store/api-servise";
import { carModificator } from "./garage/updateCar";
import { currentPage, currentPageW } from "./store/basis";
import { btnDesable, btnWinnersDesabling } from "./view/paginationBtn";
import { basis, basisWin } from "./store/basis";

nextGaragePage.addEventListener("click", () => {
  currentPage += 1;
  garagePageNum.innerHTML = `Page  &#8470 ${currentPage}`;
  currentGaragePage.innerHTML = currentPage;
  basis();
  btnDesable();
});

prevGaragePage.addEventListener("click", () => {
  currentPage -= 1;
  garagePageNum.innerHTML = `Page  &#8470 ${currentPage}`;
  currentGaragePage.innerHTML = currentPage;
  basis();
  btnDesable();
});

prevWinnersPage.addEventListener("click", () => {
  currentPageW -= 1;
  basisWin();
  winnersPageNum.innerHTML = `Page  &#8470 ${currentPageW}`;
  currentWinnersPage.innerHTML = currentPageW;
  btnWinnersDesabling();
});

nextWinnersPage.addEventListener("click", () => {
  currentPageW += 1;
  basisWin();
  winnersPageNum.innerHTML = `Page  &#8470 ${currentPageW}`;
  currentWinnersPage.innerHTML = currentPageW;
  btnWinnersDesabling();
});
updateBTN.addEventListener("click", async function () {
  const carName = updateCarInput.value;
  const carColor = colorCarInput.value;
  const carToChange = document.querySelector(".active");
  const id = Number(carToChange.id.replace("-NAME", ""));
  await updateCar(id, {
    name: carName,
    color: carColor,
  });
  carModificator(carName, carColor, id);
  updateBTN.disabled = true;
  document.getElementById(`${id}-NAME`).classList.remove("active");
  updateCarInput.value = "";
});

// !----------------------------------PAGE-SWITCHER-------------
const toGarageBTN = document.querySelector(".to_garage_btn");
const toWinnerBTN = document.querySelector(".to_winners_btn");
toGarageBTN.addEventListener("click", invisibleG);
toWinnerBTN.addEventListener("click", invisibleW);

const pageGarage = document.querySelector(".garage");
const pageWinner = document.querySelector(".winners");

 function invisibleG() {
  pageWinner.classList.add("invisible");
  pageGarage.classList.remove("invisible");
}

 function invisibleW() {
  pageGarage.classList.add("invisible");
  pageWinner.classList.remove("invisible");
}
basis();
basisWin();
