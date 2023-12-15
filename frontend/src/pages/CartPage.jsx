import { Box, Text, VStack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import React from 'react'

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

  const data=[
    {
      image:"https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_30,w_1900/hellofresh_s3/image/crispy-chicken-milanese-6ec4e9a4.jpg"
    }
  ]
  return (
    <div>
        <Box>
            <VStack>
                <Image src="https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_30,w_1900/hellofresh_s3/image/crispy-chicken-milanese-6ec4e9a4.jpg" alt="cookease" />
                <Text></Text>
            </VStack>
        </Box>
    </div>
  )
}

export default CartPage