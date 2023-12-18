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
  Textarea,
} from "@chakra-ui/react";
import AdminProductCard from "../Components/AdminPRoductCard";



export const Products = () => {
  const initRecipe = {
    title: "",
    image: "",
    category: "",
    price: 0,
    ingredients: "",
    serving: "",
    instructions: "",
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

  const handleChange1 = (e) => {
    let newRecipe1 = {
      ...newRecipes1,
      [e.target.name]: e.target.value,
    };

    setnewRecipes1(newRecipe1);
  };

  const [recipeData, setrecipeData] = useState([]);

  const recipesList = () => {
    fetch(`http://localhost:8080/recipe`).then((res) => res.json()).then((data) => {
      setrecipeData(data.data);
    })
  }

  useEffect(() => {
        recipesList()
  }, [])


  const AddRecipes = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/recipe/newRecipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify(newRecipes)
      })
      let data = await res.json();
      recipesList();
      console.log(data)
    } catch (error) {
      throw new Error(error)
    }
    setnewRecipes(initRecipe);
  };

  const handleEdit = (id) => {
    const editData = recipeData.filter((el) => el._id == id)
    setnewRecipes1(editData[0]);

  };


  let ids = newRecipes1._id;
  const EditProduct = async () => {

    try {

      let res = await fetch(`http://localhost:8080/recipe/updateRecipe/${ids}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newRecipes1)
      })
      let data = res.json();
      console.log(data)

      recipesList();
      setnewRecipes1(initRecipe)
    } catch (error) {
      throw new Error(error)
    }

  };
  const deleteProduct = async (id) => {

    try {

      await fetch(`http://localhost:8080/recipe/deleteRecipe/${id}`, {
        method: "DELETE",

      })
      recipesList();

    } catch (error) {
      throw new Error(error)
    }
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
                  <option value="Asian">Asian</option>
                  <option value="Italian">Italian</option>
                  <option value="Middle eastern">Middle eastern</option>
                  <option value="Spicy mexican">Spicy mexican</option>
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
                  placeholder="Price of Recipe"
                  type="number"
                  name="price"
                  value={newRecipes.price}
                  onChange={handleChange}
                />
                <Textarea
                  variant="flushed"
                  borderBottom={"1px solid black"}
                  placeholder="Ingredient List"
                  type="text"
                  name="ingredients"
                  value={newRecipes.ingredients}
                  onChange={handleChange}
                />
                <Input
                  variant="flushed"
                  borderBottom={"1px solid black"}
                  placeholder="serving"
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
                  fontSize="20"
                  w="90%"
                  bg="#68b79f"
                  _hover={{ bgColor: "#df8c09" }}
                  letterSpacing={"1px"}
                  //   onClick={handleSignup}
                  m={"20px auto"}
                  borderRadius={"0"}
                  fontWeight={"600"}
                  color={""}
                  colorScheme="black"
                  onClick={AddRecipes}
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
                  <option value="Asian">Asian</option>
                  <option value="Italian">Italian</option>
                  <option value="Middle eastern">Middle eastern</option>
                  <option value="Spicy mexican">Spicy mexican</option>
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
                  name="price"
                  value={newRecipes1.price}
                  onChange={handleChange1}
                />
                <Textarea
                  variant="flushed"
                  borderBottom={"1px solid black"}
                  placeholder="Ingredient List"
                  type="text"
                  name="ingredients"
                  value={newRecipes1.ingredients}
                  onChange={handleChange1}
                />
                <Input
                  variant="flushed"
                  borderBottom={"1px solid black"}
                  placeholder="serving"
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
                  fontSize="20"
                 
                  w="90%"
                  bg="#68b79f"
                  _hover={{ bgColor: "#df8c09" }}
                  letterSpacing={"1px"}
                  //   onClick={handleSignup}
                  m={"20px auto"}
                  borderRadius={"0"}
                  fontWeight={"600"}
                  color={""}
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
        {/* <Box>
           <Select
                  variant="flushed"
                  borderBottom={"1px solid black"}
                  name="category"
                  value={cat}
                  placeholder="Filter By Category "
                  onChange={(e)=>setCategory(e.target.value)}
                >
                  <option value="Asian">Asian</option>
                  <option value="Italian">Italian</option>
                  <option value="Middle eastern">Middle eastern</option>
                  <option value="Spicy mexican">Spicy mexican</option>
                </Select>
        </Box> */}
          <SimpleGrid
            mt={"30px"}
            spacing={10}
            columns={[1, 2, 3]}
            w={"100%"}
          >

            {recipeData?.map((el) => (
              <AdminProductCard
                key={el._id}
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


