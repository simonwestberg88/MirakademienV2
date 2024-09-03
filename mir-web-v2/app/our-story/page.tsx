"use client"

import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import OurStoryStart from "./componenets/first";
import OurStoryTimeline from "./componenets/timeline";
import OurStoryEthos from "./componenets/ethos";
import Footer from "../components/footer";

export default function OurStoryPage() {
  const theme = useTheme();
  return (
    <Box>
      <OurStoryStart />
      <OurStoryTimeline />
      <OurStoryEthos />
      <Footer />
    </Box>
  );
}
