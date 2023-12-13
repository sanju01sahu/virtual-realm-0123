import React from "react";
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
import { Link, useLocation, useParams } from "react-router-dom";
const Navbar = () => {
  let url = useLocation().pathname;
  console.log(url);
  return (
    <div>
      <Flex
        w="100%"
        bg={"#ECF9FF"}
        h={"80px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box h={"40px"} ml={"10px"} name="logo" display={"flex"}>
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

        <Box>
          <Link to="/login">
            <Button
              mr={"20px"}
              bg={"#87CBB9"}
              display={{ base: "none", lg: "flex" }}
            >
              Login
            </Button>
          </Link>

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
