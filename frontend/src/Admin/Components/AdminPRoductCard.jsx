import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";


import { useNavigate } from "react-router-dom";

const AdminProductCard = ({ data, deleteProduct, handleEdit }) => {
  let navigate = useNavigate();

  return (
    <Box
      bg={"#f5f5f5"}
      borderRadius={"0px"}
      m={"auto"}
      // p={"10px"}
      textAlign={"center"}
      //   h={"650px"}
    >
      <Box h={"320px"}>
        <Image
          m={"auto"}
          w={"100%"}
          h={"95%"}

          src={data?.image[0]}
        />
      </Box>

      <Text fontWeight={"500px"} noOfLines={1}>{data?.title}</Text>
      <Text fontWeight={"100px"}>Category: {data?.category}</Text>
      <Box display={"flex"} justifyContent={"space-around"}>
        <Button
          fontSize="18"
          w="40%"
          bg="#f57a6a"
          _hover={{ bgColor: "#fa430b"}}
          letterSpacing={"1px"}
          
          m={"10px auto"}
          borderRadius={"0"}
          fontWeight={"300"}
          color={"white"}
          colorScheme="black"
          onClick={() => {
            deleteProduct(data?._id);
          }}
        >
          DELETE
        </Button>
        <Button
          fontSize="16"
          w="40%"
          bg="#09c8bb"
          _hover={{ bgColor: "#8fc507" }}
          letterSpacing={"1px"}
          m={"10px auto"}
          borderRadius={"0"}
          fontWeight={"300"}
          color={"white"}
          colorScheme="black"
          onClick={() => {
            handleEdit(data?._id);
          }}
        >
          EDIT
        </Button>
      </Box>
    </Box>
  );
};

export default AdminProductCard;
