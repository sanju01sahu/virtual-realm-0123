import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate, useSearchParams } from 'react-router-dom';
// import styled from 'styled-components';

// import { getProductDataFromAPI } from "../../UserPage/Utilis/api";

import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
/**
 * 
 image:[String],
  title: String,
  category:[String],
  ingredient_number: Number,
  ingredient_list:[String],
  serving: Number,
  instructions: String,
 */
export const Products = () => {
  const initRecipe = {
    title: "",
    image: "",
    category: [],
    ingredient_number:0,
    ingredient_list: [],
    serving:0,
    instructions:"",
  };
  let newRecipe;
  let [newRecipes, setnewRecipes] = useState(initRecipe);
  let [newRecipes1, setnewRecipes1] = useState(initRecipe);
  const handleChange = (e) => {
    newRecipe = {
      ...newRecipes,
      [e.target.name]:
        e.target.name == "goal" ? +e.target.value : e.target.value,
    };
    setnewRecipes(newRecipe);
  };

  const handleChange1 = (e) => {
    let newRecipe1 = {
      ...newRecipes1,
      [e.target.name]:
        e.target.name == "goal" ? +e.target.value : e.target.value,
    };
    setnewRecipes1(newRecipe1);
  };

  let Navigate = useNavigate();
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);

  const AddProduct = (e) => {
    e.preventDefault();

    AddDonationRequest(newRecipes).then((res) => {
      setData([...data, res.data.AddedDonation]);
    });
    setnewRecipes(initRecipe);
  };

  const handleEdit = (id) => {
    DonationSingleRequest(id).then((res) => {
      setnewRecipes1(res.data);
    });
  };
  let ids = newRecipes1._id;

  const EditProduct = () => {
    PatchDonationRequest(ids, newRecipes1).then((res) => alert(res.data.msg));

    setnewRecipes1(initRecipe);
  };
  const deleteProduct = (id) => {
    console.log(id);
    DeleteDonationRequest(id).then((res) => {
      alert(res.data.msg);
    });
    setFlag(!flag);
  };

  // useEffect(() => {
  //   DonationRequest({}).then((res) => {
  //     setData(res.data);
  //   });
  // }, [flag]);

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-around"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
        >
          <Flex>
            <Box w={"40%"} m={"auto"}>
              <Stack spacing={4}>
                <Text
                  textAlign={"center"}
                  fontFamily={"DM Serif Display"}
                  fontWeight={"bold"}
                  textTransform={"capitalize"}
                  mb={2}
                  fontSize={"25"}
                >
                  Create a new Recipe
                </Text>
                <Input
                  variant="flushed"
                  borderBottom={"1px solid black"}
                  placeholder="Title"
                  type="text"
                  name="title"
                  value={newRecipes.title}
                  onChange={handleChange}
                  marginBottom={4}
                  alignItems={"center"}
                  fontSize={"16px"}
                  justifyContent={"center"}
                />

                <Select
                  variant="flushed"
                  borderBottom={"1px solid black"}
                  name="category"
                  value={newRecipes.category}
                  placeholder="Category"
                  onChange={handleChange}
                >
                  <option value="Education">Education</option>
                  <option value="Medical">Medical</option>
                  <option value="Food">Food</option>
                  <option value="Pure Water">Water</option>
                </Select>
                <Input
                  variant="flushed"
                  borderBottom={"1px solid black"}
                  placeholder="Goal"
                  type="number"
                  name="goal"
                  value={newRecipes.goal}
                  onChange={handleChange}
                />
                <Input
                  variant="flushed"
                  borderBottom={"1px solid black"}
                  placeholder="Image URL"
                  type="url"
                  name="image"
                  value={newRecipes.image}
                  onChange={handleChange}
                />
                <Input
                  variant="flushed"
                  borderBottom={"1px solid black"}
                  placeholder="Description"
                  type="text"
                  name="description"
                  value={newRecipes.description}
                  onChange={handleChange}
                />

                <Button
                  fontSize="16"
                  w="90%"
                  bg="teal"
                  _hover={{ bgColor: "#df8c09" }}
                  letterSpacing={"1px"}
                  //   onClick={handleSignup}
                  m={"20px auto"}
                  borderRadius={"0"}
                  fontWeight={"300"}
                  color={"white"}
                  colorScheme="black"
                  onClick={AddProduct}
                >
                  SUBMIT
                </Button>
              </Stack>
            </Box>
            <Box w={"40%"} m={"auto"}>
              <Stack spacing={4}>
                <Text
                  textAlign={"center"}
                  fontWeight={"bold"}
                  textTransform={"capitalize"}
                  fontFamily={"DM Serif Display"}
                  mb={2}
                  fontSize={"25"}
                >
                  Update an existing Recipe
                </Text>
                <Input
                  variant="flushed"
                  borderBottom={"1px solid black"}
                  placeholder="Title"
                  type="text"
                  name="title"
                  value={newRecipes1.title}
                  onChange={handleChange1}
                />

                <Select
                  variant="flushed"
                  borderBottom={"1px solid black"}
                  name="category"
                  value={newRecipes1.category}
                  placeholder="Category"
                  onChange={handleChange1}
                >
                  <option value="Education">Education</option>
                  <option value="Medical">Medical</option>
                  <option value="Food">Food</option>
                  <option value="Pure Water">Water</option>
                </Select>
                <Input
                  variant="flushed"
                  borderBottom={"1px solid black"}
                  placeholder="Goal"
                  type="number"
                  name="goal"
                  value={newRecipes1.goal}
                  onChange={handleChange1}
                />
                <Input
                  variant="flushed"
                  borderBottom={"1px solid black"}
                  placeholder="Image URL"
                  type="url"
                  name="image"
                  value={newRecipes1.image}
                  onChange={handleChange1}
                />
                <Input
                  variant="flushed"
                  borderBottom={"1px solid black"}
                  placeholder="Description"
                  type="text"
                  name="description"
                  value={newRecipes1.description}
                  onChange={handleChange1}
                />

                <Button
                  fontSize="16"
                  w="90%"
                  bg="teal"
                  _hover={{ bgColor: "#df8c09" }}
                  letterSpacing={"1px"}
                  //   onClick={handleSignup}
                  m={"20px auto"}
                  borderRadius={"0"}
                  fontWeight={"300"}
                  color={"white"}
                  colorScheme="black"
                  onClick={EditProduct}
                >
                  SUBMIT
                </Button>
              </Stack>
            </Box>
          </Flex>
        </Box>
        <Box>
          <SimpleGrid
            mt={"30px"}
            spacing={10}
            columns={[1, 2, 3]}
            // m={"80px auto"}
            w={"100%"}
          >
            {data?.map((el) => (
              <AdminProductCard
                key={el.id}
                data={el}
                deleteProduct={deleteProduct}
                handleEdit={handleEdit}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

// const DIV = styled.div`
//   // Your styles here
// `;
