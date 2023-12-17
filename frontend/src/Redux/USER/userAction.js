import {
  AUTH_FAILURE,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  LOGIN_TOKEN,
  REMOVE_MESSAGE,
  USER_EXISTS,
  USER_LOGOUT,
  USER_NOT_EXISTS,
  USER_SIGNUP_FAILED,
  USER_SIGNUP_LOADING,
  USER_SIGNUP_SUCCESS,
} from "../actionType";
import setCookie from "../../../utils/setCooke";
import Cookies from "js-cookie";
import { removeCookie } from "../../../utils/removeCookie";
import { getCookie } from "../../../utils/getCookie";

export const userLogin = (data) => async (dispatch) => {
  dispatch({ type: AUTH_REQUEST });
  console.log(data, "before start api call login");
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
    .catch((err) => {
      // console.log(err);
      dispatch({ type: AUTH_FAILURE });
    });
};

export const userLogout = () => (dispatch) => {
  // console.log("logout button clicked");
  let token = getCookie(LOGIN_TOKEN);
  // console.log(token, "token getting from cookie");
  removeCookie("login-token");
  dispatch({ type: USER_LOGOUT });
};

export const removeMessage = () => (dispatch) => {
  dispatch({ type: REMOVE_MESSAGE });
};

// =================================================signup=================================

export const userSignup = (data) => (dispatch) => {
  // console.log(data, "user signup");
  dispatch({ type: USER_SIGNUP_LOADING });
  fetch(`http://localhost:8080/users/register`, {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      dispatch({ type: USER_SIGNUP_SUCCESS, payload: data.msg });
    })
    .catch((err) => {
      // console.log(err);
      dispatch({ type: USER_SIGNUP_FAILED });
    });
};
