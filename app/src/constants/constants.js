export const baseURL = "http://localhost:3003/";

export const capitalized = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const createDate = (date) => {
  let yy = date.slice(0, 4);
  let dd = date.slice(5, 7);
  let mm = date.slice(8, 10);

  return `${dd}/${yy}/${mm}`;
};
