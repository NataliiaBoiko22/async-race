import { createNewCar, createHundredCar } from "../garage/createNewCar";
import { race, reset } from "../garage/raceAll";
import { modalW } from "../winner/modal";
import { clickUpdateBTN } from "../garage/updateCar";
import { createSortedWinnerList } from "../winner/winnerSort";
import {
  getWinnerSortTimeASC,
  getWinnerSortTimeDESC,
  getWinnerSortWinsASC,
  getWinnerSortWinsDESC,
} from "../store/api-servise";

const header = `
<div class="wrapper">
  <div class="header_wrapper">
    <div class="box">
      <span></span>
      <h1 >Async Race</h1>
    </div>
  
    <div class="switch">
      <button class="header_btn to_garage_btn">to garage</button>
      <button class="header_btn to_winners_btn">to winners</button>
    </div>
  </div>
</div>
`;

const headerRoot = document.createElement("header");
headerRoot.innerHTML = header;
document.body.appendChild(headerRoot);

export const winnersPageNum = document.createElement("h3");
winnersPageNum.className = "winners_page";
winnersPageNum.innerHTML = "Page <span>&#8470 </span> 1";
const mainRoot = document.createElement("main");
export const currentGaragePage = document.createElement("span");
currentGaragePage.className = "garage_page_current";
currentGaragePage.innerHTML = "1";

export const prevGaragePage = document.createElement("button");
prevGaragePage.className = "identic_btn pagination_btn garage_page_prev";
prevGaragePage.setAttribute("disabled", true);

prevGaragePage.innerHTML = "Previous";
export const nextGaragePage = document.createElement("button");
nextGaragePage.className = "identic_btn pagination_btn garage_page_next";

nextGaragePage.innerHTML = "Next";
export const drawPadinationG = document.createElement("div");
drawPadinationG.className = "garage_pagination";
const garageSpan = document.createElement("span");
garageSpan.innerHTML = "/";
export const garageSpan2 = document.createElement("span");
garageSpan2.className = "page_total";
garageSpan2.innerHTML = "1";
drawPadinationG.appendChild(prevGaragePage);
drawPadinationG.appendChild(currentGaragePage);
drawPadinationG.appendChild(garageSpan);
drawPadinationG.appendChild(garageSpan2);
drawPadinationG.appendChild(nextGaragePage);
const garage = document.createElement("div");
garage.className = "wrapper";
const mainWrapper = document.createElement("div");
mainWrapper.className = "main_wrapper";
const section = document.createElement("section");
section.className = "garage";
const garageSettings = document.createElement("div");
garageSettings.className = "garage_settings";
const garageSettingsRow = document.createElement("div");
garageSettingsRow.className = "garage_settings_row create_set";
const inputBlock = document.createElement("div");
inputBlock.className = "input_block";
export const createCarInput = document.createElement("input");
createCarInput.className = "create_input";
createCarInput.type = "text";
createCarInput.placeholder = "Create car...";
export const createCarColor = document.createElement("input");
createCarColor.className = "create_color";
createCarColor.type = "color";
createCarColor.value = "#ffba08";
export const buttonCreate = document.createElement("button");
buttonCreate.className = "identic_btn create_btn";
buttonCreate.innerHTML = "Create";
inputBlock.appendChild(createCarInput);
inputBlock.appendChild(createCarColor);
garageSettingsRow.appendChild(inputBlock);
garageSettingsRow.appendChild(buttonCreate);
garageSettings.appendChild(garageSettingsRow);
const garageSettingsRowTwo = document.createElement("div");
garageSettingsRowTwo.className = "garage_settings_row create_set";
const inputBlockTwo = document.createElement("div");
inputBlockTwo.className = "input_block";
export const updateCarInput = document.createElement("input");
updateCarInput.className = "update_input";
updateCarInput.type = "text";
updateCarInput.placeholder = "Update car...";
export const updateCarColor = document.createElement("input");
updateCarColor.className = "create_color";
updateCarColor.type = "color";
updateCarColor.value = "#000000";

export const updateBTN = document.createElement("button");
updateBTN.className = "identic_btn update_btn";
updateBTN.innerHTML = "Update";
inputBlockTwo.appendChild(updateCarInput);
inputBlockTwo.appendChild(updateCarColor);
garageSettingsRowTwo.appendChild(inputBlockTwo);
garageSettingsRowTwo.appendChild(updateBTN);
garageSettings.appendChild(garageSettingsRowTwo);
const garageSettingsRowThree = document.createElement("div");
garageSettingsRowThree.className = "garage_settings_row";
const buttonRace = document.createElement("button");
buttonRace.className = "identic_btn race_btn";
buttonRace.innerHTML = "Race";
const buttonReset = document.createElement("button");
buttonReset.className = "identic_btn reset_btn";
buttonReset.innerHTML = "Reset";
const buttongenerateCars = document.createElement("button");
buttongenerateCars.className = "identic_btn generate_btn";
buttongenerateCars.innerHTML = "Generate cars";
garageSettingsRowThree.appendChild(buttonRace);
garageSettingsRowThree.appendChild(buttonReset);
garageSettingsRowThree.appendChild(buttongenerateCars);
garageSettings.appendChild(garageSettingsRowThree);
const garageWrapper = document.createElement("div");
garageWrapper.className = "garage_wrapper";
export const garageCounter = document.createElement("h2");
garageCounter.className = "garage_counter";
garageCounter.innerHTML = "Garage";
export const garagePageNum = document.createElement("h3");
garagePageNum.className = "garage_page";
garagePageNum.innerHTML = "Page <span>&#8470 </span>1 ";
export const carSection = document.createElement("div");
carSection.className = "car_section";
garageWrapper.appendChild(garageCounter);
garageWrapper.appendChild(garagePageNum);
garageWrapper.appendChild(carSection);
garageWrapper.appendChild(drawPadinationG);
section.appendChild(garageSettings);
section.appendChild(garageWrapper);
mainWrapper.appendChild(section);
const winners = document.createElement("section");
winners.className = "winners invisible";
const winnersWrapper = document.createElement("div");
winnersWrapper.className = "winners_wrapper";
export const winnersCounter = document.createElement("h2");
winnersCounter.className = "winners_counter";
winnersCounter.innerHTML = "Winners";
export const winnersPage = document.createElement("h3");
winnersPage.className = "winners_page";
winnersPage.innerHTML = "Page <span>&#8470 </span> 1";
export const table = document.createElement("table");
table.className = "winners_section winners_table";
const thead = document.createElement("thead");
const winnersTableHead = document.createElement("tr");
winnersTableHead.className = "winners_table_head";
const numberHead = document.createElement("th");
numberHead.innerHTML = "&#8470 ";
const nameImgHead = document.createElement("th");
nameImgHead.innerHTML = "Car";
const nameCarHead = document.createElement("th");
nameCarHead.innerHTML = "Name";
const winsHead = document.createElement("th");
winsHead.className = "wins";
export const arrowUpW = document.createElement("span");
arrowUpW.className = "arrow_up inactive ";
arrowUpW.setAttribute("id", "up-arrow-wins");
arrowUpW.innerHTML = " &#8679;";
export const arrowDownW = document.createElement("span");
arrowDownW.className = "arrow_down";
arrowDownW.setAttribute("id", "down-arrow-wins");
arrowDownW.innerHTML = " &#8679;";
winsHead.innerHTML = " Wins";
winsHead.appendChild(arrowUpW);
winsHead.appendChild(arrowDownW);
const timeHead = document.createElement("th");
timeHead.className = "best_time";
export const arrowUpT = document.createElement("span");
arrowUpT.className = "arrow_up time_up inactive";
arrowUpT.setAttribute("id", "up-arrow-time");
arrowUpT.innerHTML = " &#8679;";
export const arrowDownT = document.createElement("span");
arrowDownT.className = "arrow_down time_down";
arrowDownT.setAttribute("id", "down-arrow-time");
arrowDownT.innerHTML = " &#8679;";
timeHead.innerHTML = "Best time (sec)";
timeHead.appendChild(arrowUpT);
timeHead.appendChild(arrowDownT);
winnersTableHead.appendChild(numberHead);
winnersTableHead.appendChild(nameImgHead);
winnersTableHead.appendChild(nameCarHead);
winnersTableHead.appendChild(winsHead);
winnersTableHead.appendChild(timeHead);
thead.appendChild(winnersTableHead);
const tbody = document.createElement("tbody");
tbody.className = "winners_body";
table.appendChild(thead);
table.appendChild(tbody);
winnersWrapper.appendChild(winnersCounter);
winnersWrapper.appendChild(winnersPage);
winnersWrapper.appendChild(table);
const winnersPagination = document.createElement("div");
winnersPagination.className = "winners_pagination";
export const prevWinnersPage = document.createElement("button");
prevWinnersPage.className = "identic_btn pagination_btn winners_page_prev";
prevWinnersPage.innerHTML = "Previous";
prevWinnersPage.setAttribute("disabled", true);
export const currentWinnersPage = document.createElement("span");
currentWinnersPage.className = "winners_page_current";
currentWinnersPage.innerHTML = "1";
const slesh = document.createElement("span");
slesh.innerHTML = "/";
export const currentWinnersTotal = document.createElement("span");
currentWinnersTotal.className = "winners_page_total";
currentWinnersTotal.innerHTML = "1";
export const nextWinnersPage = document.createElement("button");
nextWinnersPage.className = "identic_btn pagination_btn winners_page_next";
nextWinnersPage.innerHTML = "Next";
winnersPagination.appendChild(prevWinnersPage);
winnersPagination.appendChild(currentWinnersPage);
winnersPagination.appendChild(slesh);
winnersPagination.appendChild(currentWinnersTotal);
winnersPagination.appendChild(nextWinnersPage);
winnersWrapper.appendChild(winnersPagination);
winners.appendChild(winnersWrapper);
mainWrapper.appendChild(winners);
garage.appendChild(mainWrapper);
mainRoot.appendChild(garage);
document.body.appendChild(mainRoot);
document.body.appendChild(modalW);
buttonCreate.addEventListener("click", createNewCar);
buttongenerateCars.addEventListener("click", createHundredCar);
buttonReset.addEventListener("click", () => reset());
buttonRace.addEventListener("click", () => race());
updateBTN.addEventListener("click", () => clickUpdateBTN());
arrowUpT.addEventListener("click", async () => {
  const winners = await getWinnerSortTimeASC();
  console.log(winners);
  arrowDownT.classList.remove("inactive");
  arrowUpT.classList.add("inactive");
  createSortedWinnerList(winners);
});
arrowDownT.addEventListener("click", async () => {
  const winners = await getWinnerSortTimeDESC();
  arrowDownT.classList.add("inactive");
  arrowUpT.classList.remove("inactive");
  createSortedWinnerList(winners);
});
arrowUpW.addEventListener("click", async () => {
  const winners = await getWinnerSortWinsASC();
  arrowDownW.classList.remove("inactive");
  arrowUpW.classList.add("inactive");

  createSortedWinnerList(winners);
});
arrowDownW.addEventListener("click", async () => {
  const winners = await getWinnerSortWinsDESC();
  arrowDownW.classList.add("inactive");
  arrowUpW.classList.remove("inactive");

  createSortedWinnerList(winners);
});
