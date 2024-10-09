import { Box, HStack, Icon, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import NextLink from "next/link";
import { FaHome, FaStore, FaInfoCircle, FaTruck, FaCreditCard } from "react-icons/fa";

function Menu() {
  return (
    <Box
      as="footer"
      position="fixed"
      bottom={10}
      left={10}
      right={10}
      borderWidth="2px"
      borderRadius="16px"
      borderColor={"red"}
      backgroundColor={"rgba(0,0,0,0.5)"}
      p={8}
    >
      <HStack justifyContent="space-around">
        <NextLink href="/" passHref>
          <HStack>
            <Icon as={FaHome} boxSize={48} color={"#ffffff"} />
          </HStack>
        </NextLink>
        <NextLink href="/shop" passHref>
          <HStack>
            <Icon as={FaStore} boxSize={48} color={"#ffffff"} />
          </HStack>
        </NextLink>
        <NextLink href="/delivery" passHref>
          <HStack>
            <Icon as={FaTruck} boxSize={48} color={"#ffffff"} />
          </HStack>
        </NextLink>
        <NextLink href="/payment" passHref>
          <HStack>
            <Icon as={FaCreditCard} boxSize={48} color={"#ffffff"} />
          </HStack>
        </NextLink>
        <NextLink href="/about" passHref>
          <HStack>
            <Icon as={FaInfoCircle} boxSize={48} color={"#ffffff"} />
          </HStack>
        </NextLink>
      </HStack>
    </Box>
  );
}

function Header() {
  return (
    <NextLink href="/" passHref style={{ textDecoration: 'none' }}>
      <Box
        textAlign="center"
        p={4}
        backgroundColor={"#eeeeee"}
        borderRadius={"16px"}
        cursor="pointer"
      >
        <Heading fontFamily="Impact, sans-serif">
          <Text as="span" color="#ad0000" fontSize={"64px"}>
            JAM
          </Text>
          <Text as="span" color="#002c8b" fontSize={"64px"}>
            TASTIC
          </Text>
        </Heading>
        <Heading
          fontSize={"24px"}
          color="#002c8b"
          mt={0}
          fontFamily="Quicksand, sans-serif"
          fontWeight="normal"
        >
          ORGANIC JAM
        </Heading>
      </Box>
    </NextLink>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box minHeight="100vh" position="relative" pb={20}>
      <Header />
      <Box p={4}>{children}</Box>
      <Menu />
    </Box>
  );
}
