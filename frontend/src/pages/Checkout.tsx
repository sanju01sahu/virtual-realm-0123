import { Box, Grid, GridItem, Text } from '@chakra-ui/layout'
import { Button, Input } from '@chakra-ui/react'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Checkout = () => {
  return (
    <>
    <Navbar/>
    <Box py={"30px"}>
      <Grid w={"90%"} m={"auto"} templateColumns={{base:"1,1fr",md:"repeat(2,1fr)"}} gap={6}>
        <GridItem h={""} py={"20px"} bg={"green"}>
         <Box w={"90%"} m={"auto"}>
           <Text fontSize={"30px"} fontWeight={"500"} textAlign={"center"}>Billing address</Text><br />
           <Text fontSize={"20px"} fontWeight={"500"} >Fullname</Text>
        <Input placeholder='Fullname'></Input>
        <br />
        <Text fontSize={"20px"} fontWeight={"500"} >Street address</Text>
         <Input placeholder='Street address'></Input><br />
         <Text fontSize={"20px"} fontWeight={"500"} >Email</Text>
          <Input placeholder='Email'></Input><br />
          <Text fontSize={"20px"} fontWeight={"500"} >Phone</Text>
           <Input placeholder='Phone'></Input><br />
           <Text fontSize={"20px"} fontWeight={"500"} >Pin-code</Text>
            <Input placeholder='Pin-code'></Input><br />
           
         </Box>
         <Box>Shipping method</Box>
        </GridItem>
        <GridItem h={"300px"} bg={"green"}>2</GridItem>
      </Grid>
    </Box>
    <Footer/>
    </>
  )
}

export default Checkout