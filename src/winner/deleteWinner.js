import { deleteCar, deleteW } from "../store/api-servise";
import { basisWin } from "../store/basis";
import { basis } from "../store/basis";
// !----------------------------------DELETE-W-------------

export const removeWFunc = async function (id) {
  await deleteCar(id);
  await deleteW(id);
  basisWin();
  basis();
};
