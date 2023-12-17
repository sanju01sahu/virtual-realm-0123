import {
  AbsoluteCenter,
  Box,
  Divider,
  Grid,
  GridItem,
} from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertIcon,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import setCookie from "../../utils/setCooke";
import Cookies from "js-cookie";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { userLogin, userLogout } from "../Redux/USER/userAction";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => {
    return store.userReducer;
  }, shallowEqual);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const handleClick = () => setShow(!show);

  const handleLogin = (e) => {
    dispatch(userLogin({ email, pass }));
  };

  useEffect(() => {
    console.log(user.message, "userdata from store");
  }, [user]);
  return (
    <>
      <Navbar />
      <Box mx={"auto"} maxW={"90%"} mt={"50px"}>
        <Grid
          templateColumns={{
            base: "1,1fr",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
          }}
          gap={6}
          alignItems={"center"}
        >
          <GridItem h={"550px"} bg={"#ECF9FF"} borderRadius={"10px"} py={"5em"}>
            <h1 style={{ textAlign: "center", fontSize: "30px" }}>Login</h1>
            <br />
            <Box w="70%" m={"auto"}>
              <Input
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  onChange={(e) => setPass(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    bg={"#87CBB9"}
                    h="1.75rem"
                    size="sm"
                    onClick={handleClick}
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <br />
              <br />
              <Button
                w={"100%"}
                colorScheme="teal"
                onClick={() => handleLogin()}
              >
                Login
              </Button>
              <br />
              <br />
              <Link to="/forgotpassword">forgot password ?</Link>
              <Box position="relative" padding="10">
                <Divider />
                <AbsoluteCenter bg="white" px="4">
                  or
                </AbsoluteCenter>
              </Box>

              <Link
                style={{ textAlign: "center", fontSize: "20px" }}
                to="/signup"
              >
                <h2>Don't have an account? </h2>
              </Link>
            </Box>
            {user.isAuth ? (
              <Alert status="success" variant="solid">
                <AlertIcon />
                Login Successfull !<Link to="/">Click here to go Home</Link>
              </Alert>
            ) : (
              <Alert
                status={
                  user.message == "User Not Found, Please Register"
                    ? "error"
                    : "info"
                }
                variant="solid"
              >
                <AlertIcon />
                {user.message} <br />
                {"   "}
                <Link style={{ paddingLeft: "10px" }} to="/signup">
                  Click here to register
                </Link>
              </Alert>
            )}
          </GridItem>

          <GridItem h={"300px"} bg={""}>
            <img
              style={{ height: "100%", margin: "auto", borderRadius: "10px" }}
              src="https://i.ibb.co/mRMj9Jt/auth.png"
              alt=""
            />
          </GridItem>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Login;
