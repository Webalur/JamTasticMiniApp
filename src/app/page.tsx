// app/page.tsx

import { Box, Heading, SimpleGrid, Text, Image, VStack, Button } from '@chakra-ui/react';
import products from '../data/products.json';

export default function Home() {
  return (
    <Box bg="white" minHeight="100vh" p={5}>
      {/* Header Section */}
      <Heading as="h1" size="2xl" textAlign="center" mb={1} fontFamily="Impact, sans-serif" mt={4}>
        <Text as="span" color="#ad0000">JAM</Text>
        <Text as="span" color="#002c8b">TASTIC</Text>
      </Heading>
      <Heading
        as="h4"
        size="md"
        textAlign="center"
        color="#002c8b"
        mb={2}
        fontFamily="Quicksand, sans-serif"
        fontWeight="normal"
        lineHeight="1.6"
      >
        ORGANIC JAM
      </Heading>

      {/* Products Grid */}
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={5} mt={8}>
        {products.map((product:any) => (
          <Box
            key={product.id}
            bg="gray.100"
            borderRadius="sm"
            p={0} pb={2}
            boxShadow="md"
            textAlign="center"
          >
            <VStack spacing={2}>
              <Image src={product.image} alt={product.name} borderRadius="lg" w="100%" />
              <Text fontFamily="'Bebas Neue', sans-serif" fontWeight="bold" color="#ad0000">
                {product.name.toUpperCase()}
              </Text>
              <Text>Size: {product.size}</Text>
              <Text>Price: ${product.price}</Text>
              <Button bg="#002c8b" color="white" _hover={{ bg: '#001d6b' }} variant="solid">
                ADD
              </Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
