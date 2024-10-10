"use client"
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import OnsiteDesktop from "./desktop";
import OnsiteMobile from "./mobile";

export default function ServiceOnsite() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<OnsiteDesktop/>) : (
            <OnsiteMobile />
        )}
        </Box>
    );
}