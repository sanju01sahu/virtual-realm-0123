import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Flex,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { URL } from "../../constants";

const AdminUsers = () => {


  // const [params, setSearchParams] = useSearchParams();
  const buttonSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  const fontSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });

  const [users, setUsers] = useState([]);


  const userDetails=()=>{

      fetch(`${URL}/users/`).then((res) => { return res.json() }).then((data) => {
        console.log(data);
        setUsers(data)
      })
      .catch((err) => {
        console.log(err, "error");
      });
    
  }

  
  const handleDeleteUser = (id) => {
    fetch(`${URL}/users/delete/${id}`,{
      method:"DELETE"
    })
      .then((res) => { return res.json() }).then((data) => {
        userDetails()
      })
      .catch((err) => {
        console.log(err, "error");
      });
    // console.log(id)
  };
  useEffect(() => {
    userDetails()
  }, []);
  // console.log(userData)
  return (
    <>
      <Box position="relative" padding="10">
        <Text
          textAlign={"center"}
          fontSize={"35px"}
          fontWeight={"600"}
          letterSpacing={"0.8px"}
          fontFamily={"DM Serif Display"}
          px="4"
        >
          Users
        </Text>
      </Box>
      {
        (
          <Table w="80%" m="auto">
            <Thead>
              <Tr>
                <Th textAlign="center" fontSize={fontSize}>
                  User name
                </Th>
                <Th textAlign="center" fontSize={fontSize}>
                  E-mail
                </Th>

                <Th textAlign="center" fontSize={fontSize}>
                  Gender
                </Th>
                <Th textAlign="center" fontSize={fontSize}>
                  Mobile
                </Th>
                <Th textAlign="center" fontSize={fontSize}>Delete User</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/*  */}

              {users?.map((ele) => (
                <Tr key={ele._id}>
                  <Td textAlign="center" fontSize={fontSize}>
                    {ele.name}
                  </Td>
                  <Td textAlign="center" fontSize={fontSize}>
                    {ele.email}
                  </Td>

                  <Td textAlign="center" fontSize={fontSize}>
                    {ele.gender}
                  
                  </Td>
                  <Td textAlign="center" fontSize={fontSize}>
                    {ele.mobile}
                  
                  </Td>
                  <Td>
                    <Flex justifyContent="center">
                     
                      <Button
                        variant="outline"
                        colorScheme="red"
                        size={buttonSize}
                        ml={2}
                        onClick={() => handleDeleteUser(ele._id)}
                      >
                        Delete
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot w="100%">{/* paginate */}</Tfoot>
          </Table>
        )}
    </>
  );
};

export default AdminUsers;
