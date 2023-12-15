import {
  AbsoluteCenter,
  Box,
  Divider,
  Grid,
  GridItem,
} from "@chakra-ui/layout";
import React, { useState } from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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
              <Input placeholder="email" />
              <br />
              <br />
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
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
              <Button w={"100%"} colorScheme="teal">
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

              <Link style={{ textAlign: "center" }} to="/signup">
                <h2>
                  Don't have an account?{" "}
                  <span style={{ textDecoration: "underline" }}>Sign up</span>
                </h2>
              </Link>
            </Box>
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
