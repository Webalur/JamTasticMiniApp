"use client";

import {
  Box,
  Typography,
  IconButton,
  AppBar,
  Toolbar,
  Container,
} from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import {
  Home as HomeIcon,
  Store as StoreIcon,
  Info as InfoIcon,
  LocalShipping as TruckIcon,
  CreditCard as CreditCardIcon,
  SportsEsports as GameIcon,
  MonetizationOn as EarnIcon,
  HelpOutline as HelpIcon,
} from "@mui/icons-material";

function Menu() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Detect when the component has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Define different menu items based on the current path
  const getMenuItems = () => {
    console.log('pathname', pathname);
    if (pathname === "/shop/" || pathname === "/payment/" || pathname === "/delivery/" || pathname === "/about/") {
      // Custom menu for the /shop page
      return [
        { label: "Home", icon: <HomeIcon fontSize="medium" />, href: "/" },
        { label: "Shop", icon: <StoreIcon fontSize="medium" />, href: "/shop" },
        { label: "Payment", icon: <CreditCardIcon fontSize="medium" />, href: "/payment" },
        { label: "Shipping", icon: <TruckIcon fontSize="medium" />, href: "/delivery" },
        { label: "About", icon: <HelpIcon fontSize="medium" />, href: "/about" },
      ];
    }
    // Default menu items for other pages
    return [
      { label: "Home", icon: <HomeIcon fontSize="medium" />, href: "/" },
      { label: "Shop", icon: <StoreIcon fontSize="medium" />, href: "/shop" },
      { label: "Game", icon: <GameIcon fontSize="medium" />, href: "/game" },
      { label: "Earn", icon: <EarnIcon fontSize="medium" />, href: "/earn" },
      { label: "Info", icon: <InfoIcon fontSize="medium" />, href: "/info" },
    ];
  };

  const menuItems = getMenuItems();

  if (!mounted) {
    // Avoid rendering the menu until the component is mounted on the client
    return null;
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        padding: 1,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-around" }}>
        {menuItems.map(({ label, icon, href }) => {
          console.log('pathname', pathname);
          console.log('href', href);
          const isActive = pathname === href + '/' || ( pathname === '/' && label==='Home');
          return (
            <NextLink href={href} passHref key={label}>
              <Box
                component="a"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: isActive ? "#ffffff" : "#aaaaaa",
                  textDecoration: "none",
                }}
              >
                <IconButton
                  aria-label={label}
                  size="small"
                  sx={{ color: isActive ? "#ffffff" : "#aaaaaa" }}
                >
                  {icon}
                </IconButton>
                <Typography
                  variant="caption"
                  sx={{
                    textDecoration: "none",
                    color: isActive ? "#ffffff" : "#aaaaaa",
                  }}
                >
                  {label}
                </Typography>
              </Box>
            </NextLink>
          );
        })}
      </Toolbar>
    </AppBar>
  );
}

function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#ffffff",
        padding: 1,
      }}
    >
      <Toolbar>
        <Typography
          sx={{ flexGrow: 1, display: "flex", alignItems: "center", pl: 0 }}
        >
          <Typography component="span" color="#ad0000" fontSize={30} fontFamily="Impact, sans-serif">
            JAM
          </Typography>
          <Typography component="span" color="#002c8b" fontSize={30} fontFamily="Impact, sans-serif">
            TASTIC
          </Typography>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        position: "relative",
        paddingBottom: 20,
        paddingX: 0,
        marginX: 0,
      }}
    >
      <Header />
      <Box sx={{ padding: 2, paddingTop: 10 }}>{children}</Box>
      <Menu />
    </Container>
  );
}
