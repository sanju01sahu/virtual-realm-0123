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
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { userSignup } from "../Redux/USER/userAction";

const Signup = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => {
    return store.userReducer;
  }, shallowEqual);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleClick = () => setShow(!show);

  const handleRegister = () => {
    // console.log({ name, email, pass });
    dispatch(userSignup({ name: name, email: email, password: pass }));
  };
  const navigate = useNavigate();
  useEffect(() => {
    // console.log("from signup", user);
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
          <GridItem h={"650px"} bg={"#ECF9FF"} borderRadius={"10px"} py={"5em"}>
            <h1 style={{ textAlign: "center", fontSize: "30px" }}>Sign Up</h1>
            <br />
            <Box w="70%" m={"auto"}>
              <Input
                placeholder="Username"
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <br />
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
                onClick={(e) => handleRegister()}
              >
                Sign up
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
              {/* <h2 style={{ fontSize: "15px", textAlign: "center" }}>
                Already a member ?{" "}
              </h2> */}
              <Link style={{ textAlign: "center" }} to="/login">
                <h2 style={{ fontSize: "20px" }}>
                  Already a member ?{" "}
                  <span style={{ textDecoration: "underline" }}>Login</span>
                </h2>
              </Link>
            </Box>
            {user.isAuth ? (
              <Alert status="success" variant="solid">
                <AlertIcon />
                Login Successfull !<Link to="/">Click here to go Home</Link>
              </Alert>
            ) : (
              <Alert
                // status={
                //   user.registerMessage == "user already exists , Please login"
                //     ? "error"
                //     : "success"
                // }
                status={(() => {
                  if (
                    user.registerMessage ===
                    "user already exists , Please login"
                  ) {
                    return "error";
                  } else if (
                    user.registerMessage ===
                    "Sign up to become a valuable customer"
                  ) {
                    return "info";
                  } else if (user.registerMessage === "registration failed") {
                    return "error";
                  } else if (user.registerMessage === "new user resgitered") {
                    return "success";
                  } else {
                    return "info";
                  }
                })()}
                variant="solid"
              >
                <AlertIcon />
                {user.registerMessage}
                {"   "}
                {/* <Link style={{ paddingLeft: "10px" }} to="/signup">
                  Click here to register
                </Link> */}
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

export default Signup;
