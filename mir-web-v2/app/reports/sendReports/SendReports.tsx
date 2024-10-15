"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ReportsSendDesktop from "./desktop";
import ReportsSendMobile from "./mobile";

export default function ReportsSend() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<ReportsSendDesktop/>) : (
            <ReportsSendMobile />
        )}
        </Box>

    );
}