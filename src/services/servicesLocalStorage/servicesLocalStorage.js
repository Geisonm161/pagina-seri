import React from "react";

export const setItem = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (value) => {
  return JSON.parse(localStorage.getItem(value));
};
