"use client"
import { Box, Typography, Link, useTheme, useMediaQuery } from "@mui/material";
import CoverComponentDesktop from "./desktop";
import CoverComponentMobile from "./mobile";

interface CoverProps{
    top:string;
    heading: string;
    buttonText:string;
    imgSrc: string;
}
export default function CoverComponent({ top, heading, buttonText, imgSrc: imageSrc }: CoverProps) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<CoverComponentDesktop top={top} heading={heading} buttonText={buttonText} imgSrc={imageSrc} />) : (
            <CoverComponentMobile top={top} heading={heading} buttonText={buttonText} imgSrc={imageSrc} />
        )}
        </Box>

    );
}