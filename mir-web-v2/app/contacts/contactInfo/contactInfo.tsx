"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ContactInfoDesktop from "./desktop";
import ContactInfoMobile from "./mobile";

export default function ContactInfo(){
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<ContactInfoDesktop/>) : (
            <ContactInfoMobile />
        )}
        </Box>

    );
}