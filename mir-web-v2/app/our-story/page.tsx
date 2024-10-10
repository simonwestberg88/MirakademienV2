"use client"

import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import OurStoryStart from "./componenets/first";
import OurStoryTimeline from "./componenets/timeline";
import OurStoryEthos from "./componenets/ethos";
import Footer from "../components/footer/footer";
import CoverComponent from "../components/cover";

export default function OurStoryPage() {
  const theme = useTheme();
  return (
    <Box>
      <CoverComponent top="Our story" heading="Mir Akademien's story" buttonText="Contact Us" imgSrc="/our-story/cover.jpg" />
      <OurStoryStart />
      <OurStoryTimeline />
      <OurStoryEthos />
      <Footer />
    </Box>
  );
}
