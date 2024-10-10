import { Box } from "@mui/material";
import OurStoryStart from "./first/first";
import OurStoryTimeline from "./timeline/timeline";
import OurStoryEthos from "./ethos/ethos";
import Footer from "../components/footer/footer";
import CoverComponent from "../components/cover/cover";

export default function OurStoryPage() {
  return (
    <Box pb="112px">
      <CoverComponent top="Our story" heading="Mir Akademien's story" buttonText="Contact Us" imgSrc="/our-story/cover.jpg" />
      <OurStoryStart />
      <OurStoryTimeline />
      <OurStoryEthos />
    </Box>
  );
}
