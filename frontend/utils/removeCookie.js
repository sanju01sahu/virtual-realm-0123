import Cookies from "js-cookie";

export const removeCookie = (name) => {
  return Cookies.remove(name);
};
