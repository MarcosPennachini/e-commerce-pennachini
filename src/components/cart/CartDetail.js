import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import Cart from './Cart'
import Details from './Details'

const CartDetail = () => {
  const shippingCosts = 580.99;
  return (
    <Container maxWidth='container.xl' padding={0}>
      <Flex
        h={{ base: 'auto', md: 'auto' }}
        py={[0, 10, 20]}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Details shipping={shippingCosts} />
        <Cart shipping={shippingCosts}/>
      </Flex>
    </Container>
  )
}

export default CartDetail