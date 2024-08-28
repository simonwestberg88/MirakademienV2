import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <Box>
    <img src="/mir_logo.svg" alt="MIR Logo" />
    <Box>
      <Footer></Footer>
    </Box>
    </Box>
  );
}
