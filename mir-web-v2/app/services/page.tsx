"use client"
import { Box } from "@mui/material"; import Footer from "../components/footer";
import CoverComponent from "../components/cover";
import Services123 from "./one-two-three";
import ServiceOnsite from "./on-site";

export default function Services() {
    return (
        <Box>
            <CoverComponent top="Our Services" heading="Unlock Your Potential" buttonText="Contact Us" imgSrc="/services/cover.png" />
            <Services123 />
            <ServiceOnsite />
            <Footer />
        </Box>
    );
}