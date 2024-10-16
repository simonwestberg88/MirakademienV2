"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ContactsNewsletterDesktop from "./desktop";
import ContactsNewsletterMobile from "./mobile";

export default function ContactsNewsletter() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<ContactsNewsletterDesktop/>) : (
            <ContactsNewsletterMobile />
        )}
        </Box>

    );
}