"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ContactsGetInTouchDesktop from "./desktop";
import ContactsGetInTouchMobile from "./mobile";


export default function ContactsGetInTouch() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<ContactsGetInTouchDesktop/>) : (
            <ContactsGetInTouchMobile />
        )}
        </Box>

    );
}