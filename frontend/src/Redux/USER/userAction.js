import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  REMOVE_MESSAGE,
  USER_EXISTS,
  USER_LOGOUT,
  USER_NOT_EXISTS,
} from "../actionType";
import setCookie from "../../../utils/setCooke";
import Cookies from "js-cookie";
import { removeCookie } from "../../../utils/removeCookie";

export const userLogin = (data) => async (dispatch) => {
  dispatch({ type: AUTH_REQUEST });
  //   console.log(data);
  fetch(`http://localhost:8080/users/login`, {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify({ email: data.email, password: data.pass }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "ok") {
        dispatch({ type: AUTH_SUCCESS, payload: data });
        setCookie("login-token", data.token);
      } else {
        console.log(data.msg);
        dispatch({ type: USER_NOT_EXISTS, payload: data.msg });
      }
    })
    .catch((err) => console.log(err));
};

export const userLogout = () => (dispatch) => {
  console.log("logout button clicked");
  removeCookie("login-token");
  dispatch({ type: USER_LOGOUT });
};

export const removeMessage = () => (dispatch) => {
  dispatch({ type: REMOVE_MESSAGE });
};

// =================================================signup=================================

export const userSignup = () => () => {};
