import { createCar } from "../store/api-servise";
import { basis } from "../store/basis";
import { countCar } from "../garage/countCar";
import { carBrand, carModel } from "../store/dataCarModel";
import { createCarInput, createCarColor } from "../view/view";
// !----------------------------------BUTTON-CREATE-NEW-CAR-------------
export const createNewCar = async function () {
  let carName;
  if (createCarInput.value == "") {
    carName =
      carBrand[Math.floor(Math.random() * carBrand.length)] +
      " " +
      carModel[Math.floor(Math.random() * carBrand.length)];
  } else carName = createCarInput.value;

  const carColor = createCarColor.value;
  await createCar({
    name: carName,
    color: carColor,
  });
  basis();
  createCarInput.value = "";
  countCar();
};

// !----------------------------------100-NEW-CAR-------------

export const createHundredCar = async function () {
  for (let i = 0; i < 100; i++) {
    const randomName =
      carBrand[Math.floor(Math.random() * carBrand.length)] +
      " " +
      carModel[Math.floor(Math.random() * carModel.length)];

    const carColor = () => {
      let signs = "0123456789ABCDEF";
      let randomColor = "#";
      for (let col = 0; col < 6; col++) {
        randomColor += signs[Math.floor(Math.random() * signs.length)];
      }
      return randomColor;
    };
    let randomColor = carColor();
    await createCar({
      name: randomName,
      color: randomColor,
    });
  }
  basis();
  countCar();
};
