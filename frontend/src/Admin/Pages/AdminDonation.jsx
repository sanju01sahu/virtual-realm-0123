import React, { useEffect, useState } from "react";

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

export const Products = () => {
  const initRecipe = {
    title: "",
    image: "",
    category: "",
    ingredient_number:0,
    ingredient_list:"",
    serving:0,
    instructions:"",
  };
  let newRecipe;
  let [newRecipes, setnewRecipes] = useState(initRecipe);
  let [newRecipes1, setnewRecipes1] = useState(initRecipe);
  const handleChange = (e) => {
    newRecipe = {
      ...newRecipes,
      [e.target.name]: e.target.value,
    };
    setnewRecipes(newRecipe);
  };

  // console.log(newRecipes)
  const handleChange1 = (e) => {
    let newRecipe1 = {
      ...newRecipes1,
      [e.target.name]: e.target.value,
    };
    setnewRecipes1(newRecipe1);
  };

  let Navigate = useNavigate();
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);

  const AddProduct = (e) => {
    e.preventDefault();

   
      setData([...data, newRecipes]);
    setnewRecipes(initRecipe);
  };

  console.log(data)
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
                  <option value="asian">Asian</option>
                  <option value="italian">Italian</option>
                  <option value="middle eastern">Middle Eastern</option>
                  <option value="spicy mexican">Spicy mexican</option>
                </Select>
               
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
                  placeholder="Ingredient number"
                  type="number"
                  name="ingredient_number"
                  value={newRecipes.ingredient_number}
                  onChange={handleChange}
                />
                  <Input
                  variant="flushed"
                  borderBottom={"1px solid black"}
                  placeholder="Ingredient List"
                  type="text"
                  name="ingredient_list"
                  value={newRecipes.ingredient_list}
                  onChange={handleChange}
                />
                <Input
                  variant="flushed"
                  borderBottom={"1px solid black"}
                  placeholder="Serving"
                  type="text"
                  name="serving"
                  value={newRecipes.serving}
                  onChange={handleChange}
                />
                <Input
                  variant="flushed"
                  borderBottom={"1px solid black"}
                  placeholder="Instructions"
                  type="text"
                  name="instructions"
                  value={newRecipes.instructions}
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
                  marginBottom={4}
                  alignItems={"center"}
                  fontSize={"16px"}
                  justifyContent={"center"}
                />

                <Select
                  variant="flushed"
                  borderBottom={"1px solid black"}
                  name="category"
                  value={newRecipes1.category}
                  placeholder="Category"
                  onChange={handleChange1}
                >
                  <option value="asian">Asian</option>
                  <option value="italian">Italian</option>
                  <option value="middle eastern">Middle Eastern</option>
                  <option value="spicy mexican">Spicy mexican</option>
                </Select>
               
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
                  placeholder="Ingredient number"
                  type="number"
                  name="ingredient_number"
                  value={newRecipes1.ingredient_number}
                  onChange={handleChange1}
                />
                  <Input
                  variant="flushed"
                  borderBottom={"1px solid black"}
                  placeholder="Ingredient List"
                  type="text"
                  name="ingredient_list"
                  value={newRecipes1.ingredient_list}
                  onChange={handleChange1}
                />
                <Input
                  variant="flushed"
                  borderBottom={"1px solid black"}
                  placeholder="Serving"
                  type="text"
                  name="serving"
                  value={newRecipes1.serving}
                  onChange={handleChange1}
                />
                <Input
                  variant="flushed"
                  borderBottom={"1px solid black"}
                  placeholder="Instructions"
                  type="text"
                  name="instructions"
                  value={newRecipes1.instructions}
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


