"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import CrimePreventingDesktop from "./desktop";
import CrimePreventingMobile from "./mobile";

export default function CrimePreventing() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<CrimePreventingDesktop/>) : (
            <CrimePreventingMobile />
        )}
        </Box>

    );
}