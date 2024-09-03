"use client"
import { Box } from "@mui/material"; import Footer from "../components/footer";
import CoverComponent from "../components/cover";

export default function Services() {
    return (
        <Box>
            <CoverComponent top="Our Services" heading="Unlock Your Potential" buttonText="Contact Us" imgSrc="/services/cover.png" />
            <Footer />
        </Box>
    );
}