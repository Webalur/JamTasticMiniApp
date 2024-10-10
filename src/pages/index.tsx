import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
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
          p: 0,
          textAlign: "center",
        }}
      >
        {/* Top Image */}
        <Box sx={{ maxWidth: 400, margin: "0 auto", mb: 2, mt:2 }}>
          <Image
            src={`${nextConfig.basePath || ''}/images/labels/label.png`}
            alt="Top Label"
            width={400}
            height={200}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        {/* Products Grid */}
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 0 }}>
          {images.map((image, index) => (
            <Grid item xs={6} sm={6} md={4} key={index}>
              <NextLink href="/shop" passHref>
                <Card
                  sx={{
                    maxWidth: 200,
                    margin: "0 auto",
                    borderRadius: "16px",
                    boxShadow: 3,
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component={() => (
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={100}
                          height={100}
                          style={{ width: "100%", height: "auto" }}
                        />
                      )}
                      sx={{
                        borderRadius: "16px",
                        overflow: "hidden",
                      }}
                    />
                  </CardActionArea>
                </Card>
              </NextLink>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}
