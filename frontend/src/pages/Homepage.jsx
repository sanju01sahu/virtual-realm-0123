import { Box } from "@chakra-ui/layout";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <Box
        w={"100%"}
        backgroundImage={
          "https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148723447.jpg?w=996&t=st=1702451550~exp=1702452150~hmac=f3b3f357af4aae23a60a4af3c0ef66c56b2c4503c05b58310279f48b789462e1"
        }
        backgroundSize="cover"
        height="500px"
        backgroundAttachment="fixed"
        backgroundRepeat="no-repeat"
      >
        <p>Take the stress out of mealtime</p>
      </Box>
    </div>
  );
};

export default Homepage;
