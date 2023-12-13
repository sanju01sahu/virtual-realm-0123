import { Box, Center, Grid, GridItem, Heading, Text, } from '@chakra-ui/layout'
import { Button, } from '@chakra-ui/react'
import React from 'react'

const Aboutus = () => {
    return (
        <div>
            <Box name="speciality" w={"100%"} mt={"30px"} mb={"30px"} m="auto" fontFamily="Agrandir, Verdana, Geneva, sans-serif" >

                <h1 style={{ textAlign: "center", fontSize: "1.5em" }}>
                    Our Values
                </h1>
                <br />
                <Grid
                    w={"80%"}
                    m={"auto"}
                    ml="20%"
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(4, 1fr)",

                    }}
                    gap={3}
                >
                    <GridItem w="100%" h={"200px"}>
                        <Box>
                            <img
                                style={{ margin: "auto" }}
                                src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_website/us/landing-pages/about-us/1.png"
                                alt=""
                            />
                            <h2
                                style={{
                                    fontSize: "18px",
                                    textAlign: "center",
                                    fontWeight: "500",
                                }}
                            >
                                Reliable Recipes
                            </h2>
                            <p style={{ fontSize: "14px", textAlign: "center" }}>
                                Committed to affordable, time-saving meals that fit any lifestyle and budget.
                            </p>
                        </Box>
                    </GridItem>
                    <GridItem w="100%" h={"200px"}>
                        <Box>
                            <img
                                style={{ margin: "auto" }}
                                src="	https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_website/us/landing-pages/about-us/2.png"
                                alt=""
                            />
                            <h2
                                style={{
                                    fontSize: "18px",
                                    textAlign: "center",
                                    fontWeight: "500",
                                }}
                            >
                                Farm-Fresh Ingredients
                            </h2>
                            <p style={{ fontSize: "14px", textAlign: "center" }}>
                                Peak produce, from farm to fridge.
                            </p>
                        </Box>
                    </GridItem>
                    <GridItem w="100%" h={"200px"}>
                        <Box>
                            <img
                                style={{ margin: "auto" }}
                                src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_website/us/landing-pages/about-us/3.png"
                                alt=""
                            />
                            <h2
                                style={{
                                    fontSize: "18px",
                                    textAlign: "center",
                                    fontWeight: "500",
                                }}
                            >
                                Delicious Possibilities
                            </h2>
                            <p style={{ fontSize: "14px", textAlign: "center" }}>
                                Unlocking delicious, new meal possibilities with a vast chef-crafted menu.
                            </p>
                        </Box>
                    </GridItem>

                </Grid>
                <br />
                <br />

                <Grid w={"80%"}
                    m={"auto"} ml="20%"
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(4, 1fr)",
                    }}
                    gap={6}>
                    <GridItem w="100%" h={"200px"}>
                        <Box>
                            <img
                                style={{ margin: "auto" }}
                                src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_website/us/landing-pages/about-us/4.png"
                                alt=""
                            />
                            <h2
                                style={{
                                    fontSize: "18px",
                                    textAlign: "center",
                                    fontWeight: "500",
                                }}
                            >
                                Sustainable Solutions
                            </h2>
                            <p style={{ fontSize: "14px", textAlign: "center" }}>
                                Reducing food waste and ensuring CO2-offset deliveries for your box.
                            </p>
                        </Box>
                    </GridItem>
                    <GridItem w="100%" h={"200px"}>
                        <Box>
                            <img
                                style={{ margin: "auto" }}
                                src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_website/us/landing-pages/about-us/5.png"
                                alt=""
                            />
                            <h2
                                style={{
                                    fontSize: "18px",
                                    textAlign: "center",
                                    fontWeight: "500",
                                }}
                            >
                                Meaningful Moments
                            </h2>
                            <p style={{ fontSize: "14px", textAlign: "center" }}>
                                Helping each other bond over joyful cooking moments and homemade meals.
                            </p>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
            <br />
            <br />

            <Box w="100%" bgColor={"#ECF9FF"} p="3%">
                <Center>

                    <Grid w="85%" templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(2, 1fr)",
                    }}
                        gap={6}
                        >
                        <GridItem>
                            <img src="https://img.hellofresh.com/w_1920,q_auto,f_auto,c_limit,fl_lossy/hellofresh_website/us/landing-pages/about-us/AboutUs_Image_1.png" alt="cookease" width="80%" />
                        </GridItem>
                        <GridItem color={'#242424'}>
                            <Heading  fontSize={"26px"} fontWeight={"450"}>Here to Change the Way People Eat. Forever</Heading>
                            <br />
                            <p>We believe everyone deserves honest, delicious food. That’s why we make it super simple to prepare homecooked meals that bring out our inner creator and bring us together with loved ones.

                            </p>
                            <br />
                            <p>
                                Because good food nourishes our bodies. And great food nourishes happiness.
                            </p>
                        </GridItem>
                    </Grid>
                </Center>
            </Box>
            <Box w="100%" p="3%"
            >
                <Center>

                    <Grid w="85%" templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(2, 1fr)",
                    }}
                        gap={6}
                        
                        >
                        <GridItem>
                            <Heading  fontSize={"28px"} fontWeight={"450"}>Our Difference</Heading>
                            <br />
                            <Text fontSize="20px">To us, sustainability means caring for the planet and its people. That’s why we’re disrupting the traditional food supply chain with our sustainable, direct-to-consumer model, which reduces customers’ carbon footprint by 31% compared to cooking with ingredients from a supermarket.

                            </Text>
                            <br />
                            <Button w="98%"  backgroundColor={"#06d094"}>
                               See How
                            </Button>
                        </GridItem>
                        <GridItem  ml="10%">
                            <img src="https://img.hellofresh.com/w_1920,q_auto,f_auto,c_limit,fl_lossy/hellofresh_website/us/landing-pages/about-us/AboutUs_Image_2.png" alt="cookease" width="80%" />
                        </GridItem>
                    </Grid>
                </Center>
            </Box>

            <Box w="100%" p="3%">
                <Center>

                    <Grid w="85%" templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(2, 1fr)",
                    }}
                        gap={6}
                        >
                        <GridItem>
                            <img src="https://img.hellofresh.com/w_1920,q_auto,f_auto,c_limit,fl_lossy/hellofresh_website/us/landing-pages/about-us/AboutUs_Image_3.png" alt="cookease" width="80%" />
                        </GridItem>
                        <GridItem color={'#242424'}>
                            <Heading  fontSize={"26px"} fontWeight={"450"}>How We Got Here</Heading>
                            <br />
                            <Text>In 2011, our founders Dominik and Thomas spent afternoons packing pre-portioned recipe ingredients for their community. Their purpose? To test a new way to get home cooked meals on tables around the world.

                            </Text>
                            <br />
                            <Text>
                            Little by little, their experiment became a real business that changed the way people eat. With love and dedication, HelloFresh went from a small, home-grown project to a meal kit service spanning 18 countries and over 1 billion meals—the biggest in the world.
                            </Text>
                            <br/>
                            <Text>
                            But despite its immense success, our philosophy remains the same: to make it easy for everyone to prepare a delicious, home-cooked meal for them and their loved ones.
                            </Text>
                        </GridItem>
                    </Grid>
                </Center>
            </Box>
            
        </div>
    )
}

export default Aboutus

