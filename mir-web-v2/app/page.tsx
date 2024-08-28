import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import Footer from "@/components/footer";
import HomeDei from "@/components/home/dei";
import HomeWelcome from "@/components/home/welcome";
import HomeTeam from "@/components/home/team";
import HomeNews from "@/components/home/news";
import HomeClientStories from "@/components/home/client_stories";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "rgba(237, 230, 212, 0.5)" }}>
    <HomeDei />
    <HomeWelcome />
    <HomeTeam />
    <HomeClientStories />
    <HomeNews />
    <Box>
      <Footer></Footer>
    </Box>
    </Box>
  );
}
