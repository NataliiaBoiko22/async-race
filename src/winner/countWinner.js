import { resultCountWinner } from "../store/api-servise";
import { winnersCounter, currentWinnersTotal } from "../view/view";
// !------------------------------------СOUNT-W-----------
let totalcountWinner = 0;

export const countWinner = async () => {
  totalcountWinner = await resultCountWinner();
  winnersCounter.innerHTML = `Winners (${totalcountWinner})`;
  currentWinnersTotal.innerHTML = Math.ceil(totalcountWinner / 10);
};
