import {
  Box,
  Grid,
  Container,
} from "@mui/material";
import Layout from '../app/layout';
import NextLink from 'next/link';
import Image from 'next/image';
import nextConfig from '../../next.config.mjs';

export default function Home() {
  // Array of image elements
  const images = [
    { src: `${nextConfig.basePath || ''}/images/apple.png`, alt: "Apple" },
    { src: `${nextConfig.basePath || ''}/images/blackberry.png`, alt: "Blackberry" },
    { src: `${nextConfig.basePath || ''}/images/plum.png`, alt: "Plum" },
  ];

  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "white",
          minHeight: "100vh",
          p: 2,
          textAlign: "center",
        }}
      >
        <Grid container spacing={2}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <NextLink href="/shop" passHref>
                <Box
                  sx={{
                    display: "block",
                    borderRadius: "32px",
                    overflow: "hidden",
                    width: "100%",
                    maxWidth: "800px",
                    margin: "0 auto",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Box>
              </NextLink>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}
