import { currentPageW } from "./basis";
import { updateWinner } from "../winner/updateWinner";
// export const base = "http://127.0.0.1:3000";
export const base = "https://async-race-backend-xucy.onrender.com";
export const basePath = {
  garage: "/garage",
  engine: "/engine",
  winners: "/winners",
};

export const createQuery = (queryParameters = []) =>
  queryParameters.length
    ? `?${queryParameters.map((item) => `${item.key}=${item.value}`).join("&")}`
    : "";

export const getCars = async function (queryParameters) {
  const response = await fetch(
    `${base}${basePath.garage}${createQuery(queryParameters)}`
  );
  const cars = await response.json();
  return cars;
};

//............................................. ...................................................
export const createCar = async function (body) {
  const response = await fetch(`${base}${basePath.garage}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const car = await response.json();
  return car;
};
// ...................................................
export const deleteCar = async function (id) {
  const response = await fetch(`${base}${basePath.garage}/${id}`, {
    method: "DELETE",
  });
  const car = await response.json();
  return car;
};
// ...................................................
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
// ...................................................
export const getCar = async function (id) {
  const response = await fetch(`${base}${basePath.garage}/${id}`);
  const car = await response.json();
  return car;
};
// ...................................................
export const updateCar = async function (id, body) {
  const response = await fetch(`${base}${basePath.garage}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const car = await response.json();
  return car;
};
// ...................................................
export const startEngine = async (id) => {
  const response = await fetch(
    `${base}${basePath.engine}${createQuery([
      { key: "id", value: id },
      { key: "status", value: "started" },
    ])}`,
    {
      method: "PATCH",
    }
  );
  const car = await response.json();
  return car;
};
// ...................................................
export const startDrive = async (id) => {
  const response = await fetch(
    `${base}${basePath.engine}${createQuery([
      { key: "id", value: id },
      { key: "status", value: "drive" },
    ])}`,
    {
      method: "PATCH",
    }
  ).catch();

  return response.status !== 200
    ? { success: false }
    : { ...(await response.json()) };
};

// ...................................................

export const stopEngine = async (id) => {
  const response = await fetch(
    `${base}${basePath.engine}${createQuery([
      { key: "id", value: id },
      { key: "status", value: "stopped" },
    ])}`,
    {
      method: "PATCH",
    }
  ).catch();
  return response.status !== 200
    ? { success: false }
    : { ...(await response.json()) };
};
// ...................................................
export const createWinner = async (body) => {
  try {
    const response = await fetch(`${base}${basePath.winners}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const winner = await response.json();
    return winner;
  } catch (err) {
    updateWinner(body.id, body.time);
  }
};
// ...................................................

export const getWinners = async (queryParameters) => {
  const response = await fetch(
    `${base}${basePath.winners}${createQuery(queryParameters)}`
  );
  const winners = await response.json();
  return winners;
};
// ...................................................

export const getWinner = async function (id) {
  const response = await fetch(`${base}${basePath.winners}/${id}`);
  const winner = await response.json();
  return winner;
};
// .................................................
export const deleteW = async function (id) {
  const response = await fetch(`${base}${basePath.winners}/${id}`, {
    method: "DELETE",
  });
  const car = await response.json();
  return car;
};
// .................................................
export const getWinnerSortTimeASC = async function (id) {
  const response = await fetch(
    `${base}${basePath.winners}${createQuery([
      { key: "_limit", value: "10" },
      { key: "_page", value: currentPageW },
      { key: "_sort", value: "time" },
      { key: "_order", value: "ASC" },
    ])}`,
    {
      method: "GET",
    }
  );
  const winners = await response.json();
  return winners;
};
// .................................................
export const getWinnerSortTimeDESC = async function (id) {
  const response = await fetch(
    `${base}${basePath.winners}${createQuery([
      { key: "_limit", value: "10" },
      { key: "_page", value: currentPageW },
      { key: "_sort", value: "time" },
      { key: "_order", value: "DESC" },
    ])}`,
    {
      method: "GET",
    }
  );
  const winners = await response.json();
  return winners;
};
// .................................................
export const getWinnerSortWinsASC = async function (id) {
  const response = await fetch(
    `${base}${basePath.winners}${createQuery([
      { key: "_limit", value: "10" },
      { key: "_page", value: currentPageW },
      { key: "_sort", value: "wins" },
      { key: "_order", value: "ASC" },
    ])}`,
    {
      method: "GET",
    }
  );
  const winners = await response.json();
  return winners;
};
// .................................................
export const getWinnerSortWinsDESC = async function (id) {
  const response = await fetch(
    `${base}${basePath.winners}${createQuery([
      { key: "_limit", value: "10" },
      { key: "_page", value: currentPageW },
      { key: "_sort", value: "wins" },
      { key: "_order", value: "DESC" },
    ])}`,
    {
      method: "GET",
    }
  );
  const winners = await response.json();
  return winners;
};
// .................................................
export const resultCountWinner = async function () {
  const response = await fetch(
    `${base}${basePath.winners}${createQuery([{ key: "_page", value: "0" }])}`
  );
  const countWinner = Number(response.headers.get("X-Total-Count"));
  return countWinner;
};
