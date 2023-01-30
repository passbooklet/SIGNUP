import React from 'react'
import { Box, Button, Center, Stack, Flex } from "@chakra-ui/react"
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
const Userlogged = () => {
  return (
    <div>
        <div>
      <Center
        h="100vh"
        bgColor="gray.900">
        <Stack
          align="center"
          bgColor="whiteAlpha.100"
          rounded="3xl"
          spacing={3}
          p={20}
        >

          <Flex
            bgColor="whiteAlpha.800" boxShadow="md" color="gray.900" w="fit-content" borderRadius="lg" p={3} m={1}>
            <h1>YOU ARE LOGGGED IN</h1>
          </Flex>
        
     


        </Stack>

      </Center>
    </div>
    </div>
  )
}

export default Userlogged