import { Box, HStack } from "@chakra-ui/layout";
import React from "react";
import { Grid, GridItem, Tag, TagLabel } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Homepage = () => {
  return (
    <>
      <Navbar />

      <div>
        <Box
          name="banner"
          w={"100%"}
          backgroundImage={
            "https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148723447.jpg?w=996&t=st=1702451550~exp=1702452150~hmac=f3b3f357af4aae23a60a4af3c0ef66c56b2c4503c05b58310279f48b789462e1"
          }
          backgroundSize="cover"
          height="500px"
          backgroundAttachment="fixed"
          backgroundRepeat="no-repeat"
        >
          <Box
            color={"white"}
            float={"right"}
            ml={"10px"}
            mr={"50px"}
            mt={"50px"}
          >
            <h1 style={{ fontSize: "2em" }}>
              Take the stress <br /> out of mealtime
            </h1>
            <h3 style={{ fontSize: "1.5em" }}>
              India's #1 Meal Kit now offering <br />a Free Breakfast Item
              Forever <br /> with an active meal kit subscription.
            </h3>
          </Box>
        </Box>

        {/* =================================================== */}
        <Box name="speciality" w={"100%"} mt={"30px"} mb={"30px"}>
          <h1 style={{ textAlign: "center", fontSize: "1.5em" }}>
            Why CookEase?
          </h1>
          <br />
          <Grid
            w={"70%"}
            m={"auto"}
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={6}
          >
            <GridItem w="100%" h={"200px"}>
              <Box>
                <img
                  style={{ margin: "auto" }}
                  src="https://i.ibb.co/QrvYH9n/1.png"
                  alt=""
                />
                <h2
                  style={{
                    fontSize: "18px",
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  No skimpin’ on the chicken!
                </h2>
                <p style={{ fontSize: "13px", textAlign: "center" }}>
                  Or steak, or fish, or plant protein.
                </p>
              </Box>
            </GridItem>
            <GridItem w="100%" h={"200px"}>
              <Box>
                <img
                  style={{ margin: "auto" }}
                  src="https://i.ibb.co/C56Nzjw/2.png"
                  alt=""
                />
                <h2
                  style={{
                    fontSize: "18px",
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  No commitment whatsoever
                </h2>
                <p style={{ fontSize: "13px", textAlign: "center" }}>
                  Skipping weeks or cancelling is super easy.
                </p>
              </Box>
            </GridItem>
            <GridItem w="100%" h={"200px"}>
              <Box>
                <img
                  style={{ margin: "auto" }}
                  src="https://i.ibb.co/F4ggfc4/3.png"
                  alt=""
                />
                <h2
                  style={{
                    fontSize: "18px",
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  The most 5-star reviews
                </h2>
                <p style={{ fontSize: "13px", textAlign: "center" }}>
                  Our huge recipe selection wows week after week.
                </p>
              </Box>
            </GridItem>
            <GridItem w="100%" h={"200px"}>
              <Box>
                <img
                  style={{ margin: "auto" }}
                  src="https://i.ibb.co/cgVLC7N/4.png"
                  alt=""
                />
                <h2
                  style={{
                    fontSize: "18px",
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  Fresh and affordable
                </h2>
                <p style={{ fontSize: "13px", textAlign: "center" }}>
                  Chef-created deliciousness from $7.49 per meal.
                </p>
              </Box>
            </GridItem>
          </Grid>
        </Box>
        <Box>
          <br />
          <Grid
            w={"70%"}
            m={"auto"}
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
            }}
            gap={6}
          >
            <GridItem w="100%" h="300px">
              <img
                style={{
                  margin: "auto",
                  width: "100%",
                  height: "100%",
                }}
                src="https://www.cnet.com/a/img/resize/16845e952f664b518e26d064e888109dc9cc457a/hub/2020/12/09/9865b0d0-83e9-40de-8893-67506a613c0b/blue-apron.jpg?auto=webp&width=1200"
                alt=""
              />
            </GridItem>
            <GridItem w="100%" h="300px">
              <h1
                style={{
                  fontSize: "30px",
                  textAlign: "center",
                  fontWeight: "500",
                }}
              >
                What’s inside each box?
              </h1>
              <br />
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                ✓ Easy-to-follow recipes with clear nutritional info
              </h3>
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                ✓ High-quality ingredients sourced straight from the farm
              </h3>
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                ✓ Convenient meal kits that fit perfectly in the fridge
              </h3>
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                ✓ A fun cooking experience that makes you feel unstoppable
              </h3>
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                ✓ Innovative packaging designed to reduce waste
              </h3>
            </GridItem>
          </Grid>
        </Box>
        {/* <Box
          key="for category display"
          w={"80%"}
          h="100%"
          m={"auto"}
          bg={"white"}
          mt="50px"
        >
          <Grid
            templateColumns={{
              base: "1,1fr",
              md: "repeat(2,1fr)",
              lg: "repeat(4,1fr)",
            }}
            gap={6}
            alignItems={"center"}
          >
            {data.map((ele) => {
              return (
                <GridItem
                  h={"250px"}
                  bg={"#ECF9FF"}
                  borderRadius={"10px"}
                  py={"5em"}
                ></GridItem>
              );
            })}
          </Grid>
        </Box> */}
        <br />

        {/* =======================================  faq's   ================================= */}
        <Box
          name="faq's"
          w={{ base: "90%", md: "50%", lg: "70%" }}
          m={"auto"}
          bg={"#ECF9FF"}
        >
          <h1 style={{ textAlign: "center", fontSize: "2em" }}>
            More questions?
          </h1>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    How does CaseEase’s meal kit delivery service work?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Our meal delivery service allows you to skip meal planning and
                grocery shopping. CaseEase delivers step-by-step recipes and
                fresh, pre-portioned ingredients right to your door. First, you
                set your meal plan preferences with options for carnivores,
                vegetarians, calorie-counters, and more. You’ll choose from 30+
                delicious weekly recipes carefully put together by our chefs.
                Then, you’ll receive those recipes with easy-to-follow
                instructions on the day of your choosing. You can skip a week or
                cancel anytime if your needs change.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Which food meal plans & recipes does CaseEase offer?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                CaseEase has the most variety in terms of recipes—from meat &
                veggies, to low-carb and low-calorie options, and more. You can
                choose from six delicious meal plan preferences—each one offers
                27+ sumptuous weekly recipes crafted by professional chefs and
                nutrition specialists. With CaseEase, you have the power to
                choose according to your preference and lifestyle. Our
                low-calorie meal kits, for instance, feature dietician-approved
                recipes that contain only about 650 calories. Meanwhile, our
                family-friendly meal delivery preference allows you to get easy
                and delicious recipes that even your kids will love. What’s
                more: you can always upgrade to Gourmet Recipes and include
                add-ons like garlic bread.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    How many times a week does CaseEase deliver?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Once a week. You can expect your meal kits to arrive between 8
                am to 8 pm. We deliver anywhere in India.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Does CaseEase give nutrition & calorie information?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Absolutely! We guarantee that every single one of our meal kits
                is appropriately labeled. They have all the nutritional facts
                you’re looking for like calorie content and the amount of
                carbohydrates, protein, dietary fiber, sugar, sodium,
                unsaturated and saturated fat, and cholesterol.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Why should I choose CaseEase as my meal kit service?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                CaseEase is America’s #1 meal kit, offering the widest variety
                of recipes to over a million customers around the country. We
                have the most five-star recipes and the most five-star reviews
                among meal kits according to Trustpilot. We are clearly the
                internet’s most popular meal kit. CaseEase was recognized as
                having America’s Best Customer Service among meal kit companies
                by Newsweek in its “America’s Best Customer Service 2020”
                article. It was also named the #1 meal kit by USA Today in its
                “Readers’ Choice Awards” for both 2019 and 2020. Beyond the
                awards and accolades, CaseEase supports healthier and more
                sustainable lifestyles. Did you know that our meal kits
                guarantee less food waste? The average American throws away more
                than 200 pounds of food each year, and the average American
                household spends more than $2,200 every year on the food they
                throw away. In contrast, CaseEase delivers the perfect amount of
                ingredients — everything you need for dinner, nothing else —
                resulting in less food waste.CaseEase also prides itself on
                minimizing our carbon footprint. In fact, ours is 25% lower
                compared to store-bought groceries thanks to our pre-portioned
                ingredients and the streamlined value chain.* ** According to a
                comparative life cycle impact study by the University of
                Michigan*
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    How much does CaseEase cost?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                The cost of CaseEase’s meal service starts at $8.99 per serving,
                plus shipping fees. Just check out our street cred on
                Trustpilot, where our customers swear by our service. For
                instance, one customer claims: 'I LOVE CaseEase... We saved over
                $300 a month in groceries because we always bought too much
                food.' Or, as another customer puts it: ' We save over $100 a
                week by not going out to eat or even stopping by the grocery
                store to grab things for dinner!' Of course, each customer
                experience is different. We charge weekly and not monthly. We
                make it easier for you to manage your food budget and expenses.
                Our meal kit service is so convenient you can pause and
                reactivate your account as you please.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Does CaseEase support a healthy lifestyle?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Yes. CaseEase offers a wide array of flavorful and nutritious
                meal kit menu options that cater to a range of dietary needs,
                making use of crisp, seasonal vegetables and other fresh
                produce.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Can I skip a week of delivery?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Yes. With our meal subscription service, you are always in
                control. If you don’t want to receive a meal kit on a particular
                week, you don’t have to. To avoid charges when skipping a week,
                you simply need to “pause” your meal kit order or cancel your
                meal subscription after logging into your account.Pausing or
                canceling your meal delivery orders should be done by 11:59 pm
                PST, five days before your next delivery schedule. Note that you
                will be charged on all orders that you failed to cancel before
                the cut-off date.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
