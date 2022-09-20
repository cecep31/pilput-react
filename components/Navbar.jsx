import { Container, Flex } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  return (
    <Container>
        <Flex>
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
        </Flex>
    </Container>

  )
}

