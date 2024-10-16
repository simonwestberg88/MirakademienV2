"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ContactFormDesktop from "./desktop";
import ContactFormMobile from "./mobile";

export default function ContactForm(){
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<ContactFormDesktop/>) : (
            <ContactFormMobile />
        )}
        </Box>

    );
}