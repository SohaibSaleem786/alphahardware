// src/utils/auth.js

export const isLoggedIn = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};

export const getUserData = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
