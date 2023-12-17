import Cookie from "js-cookie";

const setCookie = (name, token) => {
  Cookie.set(name, token);
};

export default setCookie;
