"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import SupportBlockDesktop from "./desktop";
import SupportBlockMobile from "./mobile";

export default function SupportBlock() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<SupportBlockDesktop />) : (
                <SupportBlockMobile  />
            )}
        </Box>
    );
}