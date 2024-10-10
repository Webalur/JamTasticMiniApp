import { Box, Heading, Text } from '@chakra-ui/react';
import Layout from '../app/layout';

export default function About() {
  return (
    <Layout>
      <Box bg="white" minHeight="100vh" p={5}>
        <Heading as="h1" size="2xl" textAlign="center" mb={5} fontFamily="Impact, sans-serif">
          Delivery
        </Heading>
        <Text fontSize="lg" textAlign="center" mb={5}>
          Welcome to Jamtastic! We are passionate about creating organic, delicious jams made from the freshest ingredients.
          Our mission is to bring you the taste of happiness in every jar, using sustainable practices and natural flavors.
        </Text>
        <Text fontSize="md" textAlign="center">
          Our jams are crafted with love and care, ensuring that every spoonful is packed with flavor and goodness.
          Thank you for supporting our journey to make the world a little sweeter, one jar at a time.
        </Text>
      </Box>
    </Layout>
  );
}