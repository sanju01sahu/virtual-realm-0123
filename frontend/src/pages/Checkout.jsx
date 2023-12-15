import {
  AbsoluteCenter,
  Box,
  Divider,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/layout";
import {
  Button,
  Checkbox,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  AddIcon,
  InfoOutlineIcon,
  LockIcon,
  PhoneIcon,
  TimeIcon,
} from "@chakra-ui/icons";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <Box py={"30px"}>
        <Grid
          w={"90%"}
          m={"auto"}
          templateColumns={{ base: "1,1fr", md: "repeat(2,1fr)" }}
          gap={6}
        >
          <GridItem borderRadius={"20px"} h={""} py={"20px"} bg={"#ECF9FF"}>
            <Box w={"90%"} m={"auto"}>
              <Text
                color={"gray"}
                fontSize={"30px"}
                fontWeight={"500"}
                textAlign={"center"}
              >
                Billing address
              </Text>
              <br />
              <br />
              <Text color={"gray"} fontSize={"20px"} fontWeight={"500"}>
                Fullname
              </Text>
              <Input placeholder="Fullname"></Input>
              <br />
              <Text color={"gray"} fontSize={"20px"} fontWeight={"500"}>
                Street address
              </Text>
              <Textarea placeholder="Street Address" />
              <br />
              <Text color={"gray"} fontSize={"20px"} fontWeight={"500"}>
                Email
              </Text>
              <Input placeholder="Email"></Input>
              <br />
              <Text color={"gray"} fontSize={"20px"} fontWeight={"500"}>
                Phone
              </Text>
              <Input placeholder="Phone"></Input>
              <br />
              <Text color={"gray"} fontSize={"20px"} fontWeight={"500"}>
                Pin-code
              </Text>
              <Input placeholder="Pin-code"></Input>
              <br />
            </Box>
            <br />
            <Box h={"50px"} bg={""}>
              <Text
                textAlign={"center"}
                fontSize={{ base: "20px", md: "20px", lg: "25px" }}
              >
                Total Amount : Rs.0
              </Text>
            </Box>
          </GridItem>
          {/* ============================================================================== */}
          <GridItem borderRadius={"20px"} h={"100%"} p={"30px"} bg={"#ECF9FF"}>
            <Box>
              <Box position="relative" padding="10">
                <Divider />
                <AbsoluteCenter
                  borderRadius={"10px"}
                  bg="white"
                  px="4"
                  color={"gray"}
                  fontSize={{
                    base: "12px",
                    sm: "15px",
                    md: "20px",
                    lg: "25px",
                  }}
                  fontWeight={"500"}
                >
                  Payment Method
                </AbsoluteCenter>
              </Box>
              <Box className="payment-method">
                <Tabs isFitted variant="enclosed">
                  <TabList bg={""} mb="1em">
                    <Tab>Cards</Tab>
                    <Tab>Cash on Delivery</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Box bg={"white"} p={"15px"}>
                        <Text
                          color={"gray"}
                          fontSize={"20px"}
                          fontWeight={"500"}
                        >
                          Credit card details
                          <br />
                          <br />
                          <Text fontSize={"15px"}>Card No</Text>
                          <InputGroup>
                            <InputLeftElement pointerEvents="none">
                              <InfoOutlineIcon color="black" />
                            </InputLeftElement>
                            <Input
                              type="tel"
                              placeholder="Card No 1234 1234 1234 1234"
                            />
                          </InputGroup>
                        </Text>
                        <br />

                        <Box w={"100%"} m={"auto"}>
                          <Box
                            display={"inline-flex"}
                            gap={5}
                            m={"auto"}
                            bg={""}
                          >
                            <InputGroup>
                              <InputLeftElement pointerEvents="none">
                                <TimeIcon color="black" />
                              </InputLeftElement>
                              <Input type="tel" placeholder=" MM" />
                            </InputGroup>
                            <InputGroup>
                              <InputLeftElement pointerEvents="none">
                                <TimeIcon color="black" />
                              </InputLeftElement>
                              <Input type="tel" placeholder=" YY" />
                            </InputGroup>
                            <InputGroup>
                              <InputLeftElement pointerEvents="none">
                                <LockIcon color="black" />
                              </InputLeftElement>
                              <Input type="tel" placeholder="123" />
                            </InputGroup>
                          </Box>
                        </Box>
                      </Box>
                      <br />
                      <Checkbox colorScheme="green" defaultChecked>
                        I confirm the accuracy of the provided information and
                        authorize payment.
                      </Checkbox>
                    </TabPanel>
                    <TabPanel m={"auto"} w={"90%"}>
                      <Text color={"gray"} fontSize={"17px"} fontWeight={"500"}>
                        Note: Cash-on-delivery orders cannot be canceled once
                        the delivery process has started.
                      </Text>
                      <br />
                      <Checkbox colorScheme="green" defaultChecked>
                        <Text color={"gray"} fontSize={"15"} fontWeight={"500"}>
                          {" "}
                          I confirm my order and agree to pay in cash upon
                          delivery.
                        </Text>
                      </Checkbox>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Box>
            <Button
              display={"block"}
              m={"auto"}
              w={"70%"}
              colorScheme="teal"
              size="lg"
            >
              Proceed
            </Button>
          </GridItem>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Checkout;
