import { deleteCar, deleteW } from "../store/api-servise";

import { basis } from "../store/basis";
import { basisWin } from "../store/basis";
// !----------------------------------DELETE-CAR-------------

export const removeCarFunc = async function (id) {
  await deleteCar(id);
  document.getElementById(id).remove();
  await deleteW(id);

  basis();
  basisWin();
};
