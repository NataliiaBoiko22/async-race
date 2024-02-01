import { getWinner } from "../store/api-servise";
import { base, basePath } from "../store/api-servise";
export let currentWinners = document.querySelectorAll(".winner-row");

export const updateWinner = async (id, time) => {
  const currentWinner = await getWinner(id);
  const winnerToUpdate = {
    wins: 1,
    time: time,
  };
  if (currentWinner.id === id) {
    winnerToUpdate.wins = currentWinner.wins += 1;
  }

  if (currentWinner.id === id && time < currentWinner.time) {
    console.log(time);
    console.log((winnerToUpdate.time = time));
    winnerToUpdate.time = time;
  } else {
    console.log((winnerToUpdate.time = currentWinner.time));
    winnerToUpdate.time = currentWinner.time;
  }

  const response = await fetch(`${base}${basePath.winners}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(winnerToUpdate),
  });
  try {
    if (!response.ok) throw new Error(response.statusText);
    const updatedWinner = await response.json();
    return updatedWinner;
  } catch (err) {
    console.log(
      "Caught error: status 404 - winner was not found in the garage"
    );
  }
};
