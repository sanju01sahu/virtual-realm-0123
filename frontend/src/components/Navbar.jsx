import React, { useEffect } from "react";
import { Box, Button, Flex, IconButton, Spacer } from "@chakra-ui/react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  LockIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import Cookies from "js-cookie";
import { Link, useLocation, useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import userReducer from "../Redux/USER/userReducer";
import { removeMessage, userLogout } from "../Redux/USER/userAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => {
    return store.userReducer.isAuth;
  }, shallowEqual);
  const user = useSelector((store) => {
    return store.userReducer.userData;
  }, shallowEqual);
  // const msg = useSelector((store) => {
  //   return store.userReducer.message;
  // });
  useEffect(() => {
    // console.log(isAuth, "from navbar");
    console.log(user);
  }, [isAuth]);
  let url = useLocation().pathname;
  // console.log(url);

  const handleLogout = () => {
    dispatch(userLogout());
  };

  const removeMSG = () => {
    dispatch(removeMessage());
  };

  return (
    <div>
      <Flex
        w="100%"
        bg={"#ECF9FF"}
        h={"80px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box h={"40px"} ml={"20px"} name="logo" display={"flex"}>
          <Link to="/">
            <img
              style={{ height: "100%" }}
              src="https://i.ibb.co/THtf5pd/cookease.png"
              alt="logo"
            />
          </Link>

          <Box
            name="nav-links"
            ml={"20px"}
            w={{ base: "0%", md: "500px" }}
            bg={""}
            fontWeight={"700"}
            fontSize={"18px"}
            color={"green"}
            justifyContent={"space-between"}
            alignItems={"center"}
            display={{ base: "none", lg: "flex" }}
          >
            <Link
              to="/ourmenu"
              style={{ color: url === "/ourmenu" ? "teal" : "" }}
            >
              Our Menu
            </Link>
            <Link
              to="/howitworks"
              style={{ color: url === "/howitworks" ? "teal" : "" }}
            >
              How it Works
            </Link>
            <Link
              to="/cookbook"
              style={{ color: url === "/cookbook" ? "teal" : "" }}
            >
              CookBook
            </Link>
            <Link
              to="/aboutus"
              style={{ color: url === "/aboutus" ? "teal" : "" }}
            >
              About Us
            </Link>
          </Box>
        </Box>
        {user.role == "admin" && (
          <Link to="/admin">
            <Button
              mr={"20px"}
              bg={"#e28153"}
              _hover={"#000000"}
              // display={{ base: "none", lg: "flex" }}
            >
              Dashboard
            </Button>
          </Link>
        )}
        <Box>
          {isAuth ? (
            <Link to="/">
              <Button
                mr={"20px"}
                bg={"#dd5c21"}
                _hover={"#e08e69"}
                display={{ base: "none", lg: "flex" }}
                onClick={() => handleLogout()}
              >
                Logout
              </Button>{" "}
            </Link>
          ) : (
            <Link to="/login">
              <Button
                mr={"20px"}
                bg={"#87CBB9"}
                display={{ base: "none", lg: "flex" }}
                onClick={() => removeMSG()}
              >
                Login
              </Button>
            </Link>
          )}

          <Menu>
            <MenuButton
              display={{ base: "", lg: "none" }}
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              mr={"20px"}
            />
            <MenuList>
              <Link to="/ourmenu">
                <MenuItem icon={<AddIcon />} command="">
                  Our Menu
                </MenuItem>
              </Link>
              <Link to="/cookbook">
                <MenuItem icon={<ExternalLinkIcon />} command="">
                  CookBook
                </MenuItem>
              </Link>
              <Link to="/howitworks">
                <MenuItem icon={<RepeatIcon />} command="">
                  How it Works
                </MenuItem>
              </Link>
              <Link to="/login">
                <MenuItem icon={<LockIcon />} command="">
                  Login
                </MenuItem>
              </Link>
              <Link to="/aboutus">
                <MenuItem icon={<EditIcon />} command="">
                  About Us
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
