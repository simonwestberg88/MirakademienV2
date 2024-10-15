"use client"
import { Box, useTheme, useMediaQuery } from "@mui/material";
import NewsCoverDesktop from "./desktop";
import NewsCoverMobile from "./mobile";

export default function NewsCover() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<NewsCoverDesktop/>) : (
            <NewsCoverMobile />
        )}
        </Box>

    );
}