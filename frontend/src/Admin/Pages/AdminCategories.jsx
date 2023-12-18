import React from "react";
import {
  Container,
   Heading,
} from "@chakra-ui/react";

import { Products } from "./AdminDonation";

const AdminCategories = () => {
  return (
    <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 10 }}>
      <Heading
    
        m={"10px auto"}
        textAlign={"center"}
        fontFamily={"DM Serif Display"}
      >
       Recipes List
      </Heading>
      <Products />
    </Container>
  );
};

export default AdminCategories;
