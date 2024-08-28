import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import Footer from "@/components/footer";
import HomeDei from "@/components/home/dei";
import HomeWelcome from "@/components/home/welcome";
import HomeTeam from "@/components/home/team";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "rgba(237, 230, 212, 0.5)" }}>
    <HomeDei />
    <HomeWelcome />
    <HomeTeam />
    <Box>
      <Footer></Footer>
    </Box>
    </Box>
  );
}
