import { Image, HStack, Text, VStack, Grid, GridItem, Box, Button, Card, Center, Flex, Heading, } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../components/Navbar';

const CartPage = () => {
    /**
     *  image:[String],
  title: String,
  ingredient_number: Number,
  ingredient_list:[String],
  category:[String],
  serving: Number,
  instructions: String,
     */
    const [qty, setQyt] = useState(1);
    const [total, setTotal] = useState(1)

    const quantityAdd = (val) => {
        setQyt((prev) => prev + val)
    }

    const data = [
        {
            image: "https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_30,w_1900/hellofresh_s3/image/crispy-chicken-milanese-6ec4e9a4.jpg",
            title: "Recipe1",
            price: 250,
            quantity: 1
        }
    ]
    return (
        <div>
            <Navbar />
            <Flex justifyContent={"space-evenly"} flexDirection={{ base: "column", md: "column", lg: "row" }}  alignItems={{ base: "center", md: "center", lg: "auto" }} my="20px">
                <HStack my="3%" w="75%">
                    {data?.map((recipe, i) => (
                        <Grid w="auto"
                            m="auto"
                            mx="2%"
                            templateColumns={{
                                base: "repeat(1, 1fr)",
                                md: "repeat(2, 1fr)",
                                lg: "repeat(2, 1fr)",
                            }}
                            gap={2} key={i}>
                            <Card>
                                <Image src={recipe.image} />

                            </Card>
                            <Card bgColor={"#ECF9FF"} h={{ base: "300px", md: "100%" }} >
                                <VStack>
                                    <Text>Recipe Name:- {recipe.title}</Text>
                                    <br />
                                    <br />
                                    <Text>Price:- {recipe.price}</Text>

                                </VStack>
                                <br />
                                <br />

                                <Flex my={"10px"} m={"auto"} gap={3} align={"center"} >
                                    <Button onClick={() => quantityAdd(-1)} disabled={qty < 1}>-</Button>
                                    <Text>{qty}</Text>
                                    <Button onClick={() => quantityAdd(1)} >+</Button>
                                </Flex>


                            </Card>
                        </Grid>
                    ))}
                </HStack>
                <Card w={{ lg: "25%", md: "50%", base: "50%" }} p={"20px"} my="3%" >
                    <Heading as="h5" fontWeight={20}>Price Details</Heading>
                    <br />
                    <hr />
                    <Flex justifyContent={"space-evenly"}>
                        <Text>Price: ({qty} {qty > 1 ? "recipes" : "recipe"})</Text>
                        <Text> {total}₹</Text>
                    </Flex>
                    <br />
                    <hr />
                    <Box>

                        {total > 1000 ? <Flex justifyContent={"space-evenly"}><Text color={"green"}>10% New Year</Text><Text>-{total * 0.1}₹</Text></Flex> : ""}
                    </Box>
                    <br />
                    <hr />
                    <Flex justifyContent={"space-evenly"}>
                        <Heading>Total: </Heading>
                        <Heading>{total} </Heading>

                    </Flex>
                    <br />
                    <br />

                    <Button w="100%" bg="#ECF9FF">Pay Now</Button>
                </Card>
            </Flex>
        </div>
    )
}

export default CartPage