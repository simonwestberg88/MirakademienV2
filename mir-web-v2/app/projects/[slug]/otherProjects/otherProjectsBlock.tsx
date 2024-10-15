"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import OtherProjectsBlockDesktop from "./desktop";
import OtherProjectsBlockMobile from "./mobile";
import { Project } from "@/app/types/project";

interface OtherProjectsBlockProps {
    projects: Project[];
    isOngoing: boolean;
}

export default function OtherProjectsBlock({projects, isOngoing}: OtherProjectsBlockProps) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<OtherProjectsBlockDesktop projects={projects} isOngoing />) : (
                <OtherProjectsBlockMobile projects={projects} isOngoing />
            )}
        </Box>
    );
}