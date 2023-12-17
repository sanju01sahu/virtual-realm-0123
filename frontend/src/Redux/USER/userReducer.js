import Cookies from "js-cookie";
import {
  AUTH_FAILURE,
  AUTH_LOADING,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  REMOVE_MESSAGE,
  USER_EXISTS,
  USER_LOGOUT,
  USER_NOT_EXISTS,
} from "../actionType";

const login_token = Cookies.get("login-token") || "";

const initState = {
  isAuth: login_token ? true : false,
  message: "",
  isLoading: false,
  isError: false,
  userData: {},
  token: Cookies.get("login-token") || "",
};

const userReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_LOADING: {
      return { ...state, isLoading: true };
    }
    case AUTH_FAILURE: {
      return state;
    }
    case AUTH_SUCCESS: {
      return {
        ...state,
        userData: payload.user,
        loginMessage: "login Successfull",
        isAuth: true,
      };
    }
    case USER_LOGOUT: {
      return { ...state, isAuth: false, userData: {} };
    }
    case USER_NOT_EXISTS: {
      return { ...state, message: payload };
    }
    case USER_EXISTS: {
      return { ...state, message: payload };
    }
    case REMOVE_MESSAGE: {
      return { ...state, message: "" };
    }
    default:
      return state;
  }
};

export default userReducer;
