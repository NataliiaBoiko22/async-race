import { getCars } from "./api-servise";
import { getWinners } from "./api-servise";
import { winnerCreator } from "../winner/winnerCreate";
import { btnWinnersDesabling } from "../view/paginationBtn";
import { carCreator } from "../garage/garageCreate";
export let currentPage = 1;
export let currentPageW = 1;

export const basis = async () => {
  const cars = await getCars([
    { key: "_page", value: currentPage },
    { key: "_limit", value: 7 },
  ]);

  document.querySelectorAll(".car").forEach((el) => el.remove());
  cars.forEach((el) => carCreator(el.name, el.color, el.id));
};

export const basisWin = async () => {
  document.querySelectorAll(".winner_row").forEach((el) => el.remove());
  const winners = await getWinners([
    { key: "_page", value: currentPageW },
    { key: "_limit", value: 10 },
  ]);
  console.log(winners);
  winners.forEach((el) => winnerCreator(el.id, el.wins, el.time));
  document.querySelectorAll(".winner_row").forEach((el) => el.remove());
  btnWinnersDesabling();
};
