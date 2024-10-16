"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import PrivacyPolicyDesktop from "./desktop";
import PrivacyPolicyMobile from "./mobile";

export default function PrivacyPolicy() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<PrivacyPolicyDesktop/>) : (
            <PrivacyPolicyMobile />
        )}
        </Box>

    );
}