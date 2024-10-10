import { Box, Image } from '@chakra-ui/react';
import Layout from '../app/layout';
import NextLink from 'next/link';
import nextConfig from '../../next.config.mjs';

export default function Home() {
  return (
    <Layout>
      <Box bg="white" minHeight="100vh" p={2} textAlign="center">
        <NextLink href="/shop" passHref>
          <Image
            src={`${nextConfig.basePath || ''}/images/apple.png`}
            alt="Apple"
            borderRadius="32px"
            w="100%"
            maxWidth="800px"
            m="0 auto"
            cursor="pointer"
          />
        </NextLink>
        <NextLink href="/shop" passHref>
          <Image
            src={`${nextConfig.basePath || ''}/images/blackberry.png`}
            alt="Blackberry"
            borderRadius="32px"
            w="100%"
            maxWidth="800px"
            m="0 auto"
            cursor="pointer"
          />
        </NextLink>
      </Box>
    </Layout>
  );
}