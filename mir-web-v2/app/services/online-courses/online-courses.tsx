"use client"
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import OnlineCoursesDesktop from "./desktop";
import OnlineCoursesMobile from "./mobile";

export default function ServiceOnlineCourses() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<OnlineCoursesDesktop/>) : (
            <OnlineCoursesMobile />
        )}
        </Box>
    );
}