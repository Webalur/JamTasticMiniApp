import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Typography
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import products from "../data/products.json";
import Layout from "../app/layout";
import nextConfig from "../../next.config.mjs";
import NextLink from "next/link";

export default function Shop() {
  // Menu items
  const menuItems = [
    { label: "Payment", icon: <CreditCardIcon fontSize="medium" /> },
    { label: "Shipping", icon: <LocalShippingIcon fontSize="medium" /> },
    { label: "About", icon: <HelpOutlineIcon fontSize="medium" /> },
    { label: "Cart", icon: <ShoppingCartIcon fontSize="medium" /> },
  ];

  return (
    <Layout>
      <Box bgcolor="white" minHeight="100vh" textAlign="center">
        {/* Fixed Menu */}
        <Box
          sx={{
            position: "fixed",
            top: 10,
            right: 0,
            zIndex: 100000,
            display: "flex",
            justifyContent: "center",
            gap: 2,
            p: 1,
          }}
        >
          {menuItems.map((item) => (
              <IconButton
                color="inherit"
                sx={{
                  color: "#002c8b",
                }}
              >
                {item.icon}
              </IconButton>
          ))}
        </Box>

        {/* Products Grid */}
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 8 }}>
          {products.map((product) => (
            <Grid item xs={6} sm={6} md={4} key={product.id}>
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: 3,
                  textAlign: "center",
                  backgroundColor: "#fefefe",
                  padding: 0,
                  lineHeight: 1,
                }}
              >
                <CardMedia
                  component="img"
                  src={`${nextConfig.basePath || ""}/images/${product.images[0]}`}
                  alt={product.name}
                  sx={{
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    maxHeight: 200,
                    objectFit: "cover",
                    aspectRatio: "1",
                  }}
                />
                <CardContent
                  sx={{
                    padding: "8px 0",
                    lineHeight: 1,
                  }}
                >
                  <Typography
                    fontSize={"18px"}
                    fontFamily="'Bebas Neue', sans-serif"
                    fontWeight="bold"
                    color="#002c8b"
                    gutterBottom
                    height={"20px"}
                    m={0}
                    mb={2}
                    lineHeight={1.2}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="h5"
                    fontFamily="'Bebas Neue', sans-serif"
                    color="#ad0000"
                    fontWeight="bold"
                  >
                    {product.price.toFixed(2)} €
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", marginBottom: 1 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<ShoppingCartIcon />}
                    sx={{
                      backgroundColor: "#eeeeee",
                      color: "#002c8b",
                      "&:hover": {
                        backgroundColor: "#dddddd",
                      },
                      textTransform: "none",
                    }}
                  >
                    Add
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}
