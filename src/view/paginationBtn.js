import { resultCountCar } from "../store/api-servise";
import { countWinner } from "../winner/countWinner";
import {
  prevGaragePage,
  nextGaragePage,
  prevWinnersPage,
  nextWinnersPage,
} from "./view";
import { currentPage, currentPageW } from "../store/basis";

// !----------------------------------GARAGE--PAGINATION-------------
export const btnDesable = async function () {
  const totalcountCar = await resultCountCar();

  if (currentPage == 1) {
    prevGaragePage.disabled = true;
  } else prevGaragePage.disabled = false;

  if (totalcountCar <= 7 || currentPage == Math.ceil(totalcountCar / 7)) {
    nextGaragePage.disabled = true;
  } else nextGaragePage.disabled = false;
};
// !----------------------------------PAGINATION-W-------------

export const btnWinnersDesabling = async function () {
  let totalcountWinner = await countWinner();
  if (currentPageW == 1) {
    prevWinnersPage.disabled = true;
    const number = document.querySelectorAll(".number");
    for (let item of Array.from(number)) {
      item.textContent = Array.from(number).indexOf(item) + 1;
    }
  } else {
    prevWinnersPage.disabled = false;
    const number = document.querySelectorAll(".number");
    for (let item of Array.from(number)) {
      item.textContent =
        Array.from(number).indexOf(item) + ((currentPageW - 1) * 10 + 1);
    }
  }

  if (
    totalcountWinner <= 10 ||
    currentPageW == Math.ceil(totalcountWinner / 10)
  ) {
    nextWinnersPage.disabled = true;
  } else {
    nextWinnersPage.disabled = false;
  }
};
