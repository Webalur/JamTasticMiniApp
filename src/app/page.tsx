// app/page.tsx

import { Box, Heading, SimpleGrid, Text, Image, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box bg="white" minHeight="100vh" p={10}>
      {/* Header Section */}
      <Heading as="h1" size="2xl" textAlign="center" mb={10} fontFamily="Impact, sans-serif">
        <Text as="span" color="#ad0000">JAM</Text>
        <Text as="span" color="#002c8b">TASTIC</Text>
      </Heading>

      {/* Products Grid */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Box
            key={index}
            bg="gray.100"
            borderRadius="lg"
            p={5}
            boxShadow="md"
            textAlign="center"
          >
            <VStack spacing={4}>
              <Image
                src={`https://via.placeholder.com/150?text=Product+${index + 1}`}
                alt={`Product ${index + 1}`}
                borderRadius="full"
                boxSize="150px"
              />
              <Text fontWeight="bold" fontSize="lg">
                Product {index + 1}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}