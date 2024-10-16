"use client";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import TermsOfServiceDesktop from "./desktop";
import TermsOfServiceMobile from "./moibile";

export default function TermsOfService() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<TermsOfServiceDesktop/>) : (
            <TermsOfServiceMobile />
        )}
        </Box>

    );
}
