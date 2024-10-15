"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ContactsCoverDesktop from "./desktop";
import ContactsCoverMobile from "./mobile";

export default function ContactsCover() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<ContactsCoverDesktop/>) : (
            <ContactsCoverMobile />
        )}
        </Box>

    );
}