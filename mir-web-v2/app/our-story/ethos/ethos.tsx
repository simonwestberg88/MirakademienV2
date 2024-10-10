
"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import EthosDesktop from "./desktop";
import EthosMobile from "./mobile";

export default function OurStoryEthos() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<EthosDesktop/>) : (
            <EthosMobile />
        )}
        </Box>
    );
}