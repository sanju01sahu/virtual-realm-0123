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
  USER_SIGNUP_FAILED,
  USER_SIGNUP_LOADING,
  USER_SIGNUP_SUCCESS,
} from "../actionType";

const login_token = Cookies.get("login-token") || "";

const initState = {
  isAuth: login_token ? true : false,
  loginMessage: "Please login to browse smoothly",
  registerMessage: "Sign up to become a valuable customer",
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
      return {
        ...state,
        isAuth: false,
        userData: {},
        loginMessage: "Please login to browse smoothly",
        token: "",
      };
    }
    case USER_NOT_EXISTS: {
      return { ...state, loginMessage: payload };
    }
    case USER_EXISTS: {
      return { ...state, loginMessage: payload };
    }
    case REMOVE_MESSAGE: {
      return { ...state, loginMessage: "" };
    }
    case USER_SIGNUP_LOADING: {
      return { ...state, isLoading: true };
    }
    case USER_SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        registerMessage: payload,
      };
    }
    case USER_SIGNUP_FAILED: {
      return { ...state, isLoading: false, registerMessage: payload };
    }
    default:
      return state;
  }
};

export default userReducer;
