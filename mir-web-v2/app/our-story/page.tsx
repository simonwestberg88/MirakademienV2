"use client"

import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import OurStoryStart from "./componenets/first";

export default function OurStoryPage() {
  const theme = useTheme();
  return (
    <Box>
      <OurStoryStart />
    </Box>
  );
}
