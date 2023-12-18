import { AddIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Center, Divider, Grid, GridItem, Text } from "@chakra-ui/layout";
import { Button, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../constants";

const newUrl = `${URL}/recipe/`;
const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState({});
  useEffect(() => {
    axios
      .get(newUrl)
      .then((res) => {
        setData(res.data["data"]);
      })
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    let temp = data.filter((ele) => ele._id == id);
    setFilterData(data[0]);
  }, [data]);

  useEffect(() => {
    console.log(filterData, "filtered");
  }, [filterData]);
  return (
    <>
      <Navbar />
      {!filterData && (
        <Box w={"80%"} m={"auto"} padding="6" boxShadow="lg" bg="white">
          <SkeletonCircle size="10" />
          <SkeletonText
            mt="4"
            noOfLines={4}
            spacing="4"
            skeletonHeight="250px"
          />
        </Box>
      )}
      {filterData && (
        <Box mt={"50px"}>
          <Box w={"100%"}>
            <Box w="70%" bg={""} m={"auto"}>
              <img
                style={{
                  margin: "auto",
                  height: "400px",
                  borderRadius: "50px",
                  boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                }}
                src={filterData.image}
                alt=""
              />
            </Box>
            <br />
            <br />
            <Box w={"90%"} m={"auto"}>
              <Text
                fontSize={{
                  base: "15px", // Default size for small screens
                  sm: "20px",
                  md: "30px",
                  lg: "30px",
                }}
                textAlign="center"
                fontWeight="600"
              >
                {filterData.title}
              </Text>
            </Box>
            <br />
            <Box w={"90%"} bg={""} m={"auto"}>
              <Grid
                templateColumns={{
                  base: "1,1fr",
                  md: "repeat(1,1fr)",
                  lg: "repeat(1,1fr)",
                }}
                gap={6}
                alignItems={"center"}
              >
                <GridItem
                  w="50%"
                  h="100%"
                  m="auto"
                  p={"20px"}
                  borderRadius={"10px"}
                  boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                >
                  <Box m={"auto"} w={"50%"} bg={""}>
                    <Text
                      display={"inline"}
                      fontSize={"20px"}
                      fontFamily={"cursive"}
                      fontWeight={"600"}
                    >
                      serving amount{" "}
                    </Text>
                    <Button>2</Button>
                    <Button>4</Button>
                    <Button>6</Button>
                    <Button>8</Button>
                  </Box>
                  <Box m={"auto"} w={"50%"}>
                    <Text
                      display={"block"}
                      m={"auto"}
                      fontSize={"20px"}
                      fontFamily={"cursive"}
                      fontWeight={"600"}
                    >
                      Price :{filterData.price}
                      {"₹ "}
                    </Text>
                  </Box>

                  <br />
                  <Button
                    w={"80%"}
                    display={"block"}
                    m={"auto"}
                    colorScheme="teal"
                    size="lg"
                  >
                    Add to cart
                  </Button>
                </GridItem>
                <GridItem
                  w="100%"
                  h="100%"
                  p={"20px"}
                  borderRadius={"10px"}
                  boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                >
                  <Text
                    fontSize="24px"
                    fontWeight={"600"}
                    textAlign={"justify"}
                  >
                    Instructions
                  </Text>
                  <Text
                    fontSize={{
                      base: "15px",
                      sm: "20px",
                      md: "20px",
                      lg: "20px",
                    }}
                    textAlign={"justify"}
                  >
                    {filterData.instructions}
                  </Text>
                </GridItem>

                <GridItem
                  w="100%"
                  h="100%"
                  p={"20px"}
                  borderRadius={"10px"}
                  boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                >
                  <Text
                    fontSize="24px"
                    fontWeight={"600"}
                    textAlign={"justify"}
                  >
                    Ingredients
                  </Text>
                  <Text fontSize="18px" textAlign={"justify"}>
                    {filterData.ingredients}
                  </Text>
                </GridItem>
              </Grid>
            </Box>
          </Box>
        </Box>
      )}
      <Footer />
    </>
  );
};

export default SingleProduct;
