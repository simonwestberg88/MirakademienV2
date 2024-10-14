"use client"
import { Document } from "@contentful/rich-text-types";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import DescriptionBlockDesktop from "./desktop";
import DescriptionBlockMobile from "./mobile";
import { AssetFileWithDetails } from "@/app/types/AssetFileWithDetails";

interface DescriptionBlockProps {
    image: AssetFileWithDetails;
    description: Document;
}
export default function DescriptionBlock(props: DescriptionBlockProps) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<DescriptionBlockDesktop description={props.description} image={props.image} />) : (
                <DescriptionBlockMobile description={props.description} image={props.image} />
            )}
        </Box>
    );
}