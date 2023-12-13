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
import { Link } from "react-router-dom";
const Navbar = () => {
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
            <Link to="/ourmenu">Our Menu</Link>
            <Link to="/howitworks">How it Works</Link>
            <Link to="/cookbook">CookBook</Link>
            <Link to="/aboutus">About Us</Link>
          </Box>
        </Box>

        <Box>
          <Button
            mr={"20px"}
            bg={"#87CBB9"}
            display={{ base: "none", lg: "flex" }}
          >
            Login
          </Button>

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
              <MenuItem icon={<AddIcon />} command="">
                Our Menu
              </MenuItem>
              <MenuItem icon={<ExternalLinkIcon />} command="">
                CookBook
              </MenuItem>
              <MenuItem icon={<RepeatIcon />} command="">
                How it Works
              </MenuItem>
              <MenuItem icon={<LockIcon />} command="">
                Login
              </MenuItem>
              <MenuItem icon={<EditIcon />} command="">
                About Us
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
