// !----------------------------------MOVING-CAR-------------
import { startEngine, startDrive, stopEngine } from "../store/api-servise";
export const moveCar = async function (id) {
  const width = document.documentElement.clientWidth;
  document.getElementById(`${id}-START`).disabled = true;
  document.getElementById(`${id}-BACK`).disabled = false;
  const car = await startEngine(id);
  const time = car.distance / car.velocity;
  const carDrive = document.getElementById(`${id}-IMAGE`);
  let start = null;
  let state = {};
  console.log(state);
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const distWidth = width - 180;
    const passed = Math.round(progress * (distWidth / time));
    carDrive.style.transform = `translateX(${Math.min(passed, distWidth)}px)`;
    if (passed < distWidth) {
      state.id = window.requestAnimationFrame(step);
    }
    return state;
  }
  state.id = window.requestAnimationFrame(step);
  const { success } = await startDrive(id);
  if (!success) {
    window.cancelAnimationFrame(state.id);
  }
  if (success === true) {
    return time;
  }
};

// !----------------------------------STOP-CAR-------------

export const stopCar = async function (id) {
  document.getElementById(`${id}-START`).disabled = false;
  document.getElementById(`${id}-BACK`).disabled = true;
  const carDrive = document.getElementById(`${id}-IMAGE`);
  const state = {};
  function step() {
    carDrive.style.transform = `translateX(0px)`;

    state.id = window.requestAnimationFrame(step);
  }
  state.id = window.requestAnimationFrame(step);
  const { success } = await stopEngine(id);
  if (success) {
    window.cancelAnimationFrame(state.id);
  }
  window.requestAnimationFrame(step);
  window.cancelAnimationFrame(state.id);

  window.location.reload();
};
