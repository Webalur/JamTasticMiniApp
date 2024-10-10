import {
  Box,
  Typography,
} from "@mui/material";
import Layout from '../app/layout';
import Image from 'next/image';
import nextConfig from '../../next.config.mjs';

export default function Home() {
  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "white",
          minHeight: "100vh",
          p: 0,
          mt: 4,
          textAlign: "center",
        }}
      >
        <Typography
          component="span"
          color="#002c8b"
          fontSize={30}
          fontFamily="Impact, sans-serif"
        >
          0000
        </Typography>
        <Box
          component="div"
          sx={{
            borderRadius: "128px",
            overflow: "hidden",
            width: "80%",
            maxWidth: "800px",
            margin: "40px auto",
            cursor: "pointer",
          }}
        >
          <Image
            src={`${nextConfig.basePath || ''}/images/apple.png`}
            alt="Apple"
            width={800}
            height={600}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Box>
    </Layout>
  );
}
