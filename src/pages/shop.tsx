import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Image,
  VStack,
  Button,
} from "@chakra-ui/react";
import products from "../data/products.json";
import Layout from "../app/layout";
import nextConfig from '../../next.config.mjs';

export default function Shop() {
  return (
    <Layout>
      <Box bg="white" minHeight="100vh" mb={60}>
        <Box
          textAlign="center"
          backgroundColor={"#eeeeee"}
          borderRadius={"16px"}
        >
          <Heading textAlign="center" fontFamily="Impact, sans-serif">
            <Text as="span" color="#ad0000" fontSize={"36px"}>
              SHOP
            </Text>
          </Heading>
        </Box>

        {/* Products Grid */}
        <SimpleGrid columns={2} spacing="8px">
          {products.map((product) => (
            <Box
              key={product.id}
              borderRadius="16px"
              p={0}
              pb={2}
              mb={4}
              boxShadow="lg"
              textAlign="center"
              backgroundColor={"#eeeeee"}
            >
              <VStack mb={16} spacing={0}>
                <Image
                  src={`${nextConfig.basePath || ''}/images/${product.images[0]}`}
                  alt={product.name}
                  borderRadius="16px"
                  w="100%"
                  maxHeight="200px"
                  objectFit="cover"
                  aspectRatio={1}
                />
                <Text
                  fontFamily="'Bebas Neue', sans-serif"
                  fontWeight="bold"
                  color="#ad0000"
                  fontSize={"18px"}
                >
                  {product.name.toUpperCase()}
                </Text>
                <Text>Size: {product.size}</Text>
                <Text
                  fontFamily="'Bebas Neue', sans-serif"
                  color="#ad0000"
                  fontSize={"28px"}
                  fontWeight={"bold"}
                >
                  {product.price.toFixed(2)} €
                </Text>
                <Button
                  bg="#002c8b"
                  color="white"
                  _hover={{ bg: "#001d6b" }}
                  variant="solid"
                  size={"sm"}
                  colorScheme="teal"
                >
                  ADD
                </Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Layout>
  );
}
