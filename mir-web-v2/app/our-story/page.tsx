"use client"

import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import OurStoryStart from "./componenets/first";
import OurStoryTimeline from "./componenets/timeline";

export default function OurStoryPage() {
  const theme = useTheme();
  return (
    <Box>
      <OurStoryStart />
      <OurStoryTimeline />
    </Box>
  );
}
