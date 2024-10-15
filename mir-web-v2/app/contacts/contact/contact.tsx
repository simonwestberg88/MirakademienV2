"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ContactsContactDesktop from "./desktop";
import ContactsContactMobile from "./mobile";

export default function ContactsContact() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<ContactsContactDesktop/>) : (
            <ContactsContactMobile />
        )}
        </Box>

    );
}