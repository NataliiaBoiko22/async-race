import { base, basePath } from "../store/api-servise";
import { createQuery } from "../store/api-servise";
import { garageCounter, garageSpan2 } from "../view/view";

// !----------------------------------COUNT-CAR-------------

export const resultCountCar = async function () {
  try {
    const response = await fetch(
      `${base}${basePath.garage}${createQuery([{ key: "_page", value: "0" }])}`
    );
    const countCar = Number(response.headers.get("X-Total-Count"));
    return countCar;
  } catch (err) {
    alert(err);
  }
};

let totalcountCar = 0;
export const countCar = async () => {
  totalcountCar = await resultCountCar();
  garageCounter.innerHTML = `Garage (${totalcountCar})`;
  garageSpan2.innerHTML = Math.ceil(totalcountCar / 7);
};
