import { Box, Grid, GridItem, Text } from "@chakra-ui/layout";
import React from "react";

const SingleProduct = () => {
 
  return (
    <Box mt={"50px"}>
      <Box w={"100%"}>
        <Box w="70%" bg={""} m={"auto"}>
          <img
            style={{
              margin: "auto",
              height: "100%",
              borderRadius: "50px",
              boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
            src=""
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
            Crispy Chicken Milanese with Yellow Squash and Lemony Arugula
          </Text>
        </Box>
        <br />
        <Box w={"90%"} bg={""} m={"auto"}>
          <Grid
            templateColumns={{
              base: "1,1fr",
              md: "repeat(1,1fr)",
              lg: "repeat(2,1fr)",
            }}
            gap={6}
            alignItems={"center"}
          >
            <GridItem
              w="100%"
              h="100%"
              p={"20px"}
              borderRadius={"10px"}
              boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            >
              <Text fontSize="24px" fontWeight={"600"} textAlign={"justify"}>
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
                Instruction If using spaghetti, cook it in boiling water until
                just tender, then drain and toss in a tablespoon of olive oil to
                stop it sticking together. No need to prepare the oil noodles.
                Heat the oil in a wok or frying pan and fry the garlic, onion,
                cabbage, celery, potato and prawns or chicken. Add the noodles
                and stir fry for 10 minutes more. Make a gap in the centre of
                the noodles and add the egg. Stir it in to scramble it. Add the
                chilli, tomato, tomato ketchup, soy sauce, salt and sugar. Stir
                well. Just before transferring to a plate, add the beansprouts
                and stir for about 30 seconds. Sprinkle with lemon juice and
                chopped coriander to serve."
              </Text>
            </GridItem>
            <GridItem
              w="100%"
              h="100%"
              p={"20px"}
              borderRadius={"10px"}
              boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            >
              button to add to ,<br /> cart serving no's
            </GridItem>
            <GridItem
              w="100%"
              h="100%"
              p={"20px"}
              borderRadius={"10px"}
              boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            >
              4 ounce Heirloom Grape Tomatoes Shallot 1 unit Shallot <br />
              Lemon 1 unit Lemon Yellow Squash 1 unit Yellow Squash Pankobr{" "}
              <br />
              Breadcrumbs ½ cup Panko Breadcrumbs (Contains Wheat) Chicken{" "}
              <br />
              Breasts 12 ounce Chicken Breasts Italian Seasoning 1 teaspoon{" "}
              <br />
              Italian Seasoning Sour Cream 4 tablespoon Sour Cream (Contains{" "}
              <br />
              Milk) Arugula 2 ounce Arugula
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProduct;
