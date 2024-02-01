import { getCar } from "../store/api-servise";
// !---------------------------------MODAL-------------
export const modalW = document.createElement("div");
modalW.className = "modal";
modalW.setAttribute("id", "myModal");
const modalContent = document.createElement("div");
modalContent.className = "modal-content";
const closeX = document.createElement("span");
closeX.className = "close";
closeX.innerHTML = "X";
const title = document.createElement("h3");
title.innerHTML = "The Winner is";
const winnerCar = document.createElement("b");
winnerCar.className = "winner_car";
winnerCar.innerHTML = "Mersedes";
const withTime = document.createElement("span");
withTime.innerHTML = "with time";
const winnerTime = document.createElement("b");
winnerTime.className = "winer_time";
winnerTime.innerHTML = "5.0";
const sec = document.createElement("span");
sec.innerHTML = "sec";
modalContent.appendChild(closeX);
modalContent.appendChild(title);
modalContent.appendChild(winnerCar);
modalContent.appendChild(withTime);
modalContent.appendChild(winnerTime);
modalContent.appendChild(sec);
modalW.appendChild(modalContent);

export const winModal = async function (time, id) {
    const car = await getCar(id);
    console.log(car);
    document.querySelector(".winner_car").textContent = car.name;
    document.querySelector(".winer_time").textContent = time;
    modalW.style.display = "flex";
  }

closeX.onclick = function () {
  modalW.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modalW) {
    modalW.style.display = "none";
  }
};
