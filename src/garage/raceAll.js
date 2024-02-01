import { stopCar, moveCar } from "../garage/drive";
import { createWinner, deleteW, getWinner } from "../store/api-servise";
import { winModal } from "../winner/modal";
import { basisWin } from "../store/basis";
// !----------------------------------RESET-------------
export const reset = async function () {
  const cars = document.querySelectorAll(".car");
  cars.forEach(async (el) => {
    await stopCar(el.id);
  });
};
// !----------------------------------RACE_ALL-CARS-------------
export const race = async function () {
  const valWin = {
    minTime: 1000000,
    valWinID: "",
    wins: 1,
  };
  const cars = document.querySelectorAll(".car");
  const carsID = [];
  for (const car of cars) {
    carsID.push(car.id);
  }
  const promises = carsID.map(async (el) => {
    let time = await moveCar(el);
    const newTime = time.toString();
    const validTime = Number(newTime);
    if (validTime < valWin.minTime) {
      valWin.minTime = validTime;
      valWin.valWinID = el;
    }
  });
  await Promise.any(promises);
  winModal((valWin.minTime / 1000).toFixed(2), valWin.valWinID);

  await createWinner({
    id: Number(valWin.valWinID),
    wins: valWin.wins,
    time: (valWin.minTime / 1000).toFixed(2),
  });

  basisWin();
};
