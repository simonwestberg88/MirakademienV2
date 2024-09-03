"use client"
import { Box } from "@mui/material"; import Footer from "../components/footer";
import CoverComponent from "../components/cover";
import Dei123 from "./dei123";

export default function Services() {
    return (
        <Box>
            <CoverComponent top="Our Services" heading="Unlock Your Potential" buttonText="Contact Us" imgSrc="/services/cover.png" />
            <Dei123 />
            <Footer />
        </Box>
    );
}