"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import OtherProjectsBlockDesktop from "./desktop";
import OtherProjectsBlockMobile from "./mobile";

interface OtherProjectsBlockProps {
    isOngoing: boolean;
    currentProjectTitle: string;
}

export default async function OtherProjectsBlock(props: OtherProjectsBlockProps) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<OtherProjectsBlockDesktop isOngoing={props.isOngoing} currentProjectTitle={props.currentProjectTitle} />) : (
                <OtherProjectsBlockMobile isOngoing={props.isOngoing} currentProjectTitle={props.currentProjectTitle} />
            )}
        </Box>
    );
}