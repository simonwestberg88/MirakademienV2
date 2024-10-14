"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import DisseminationBlockDesktop from "./desktop";
import DisseminationBlockMobile from "./mobile";

interface DisseminationBlockProps {
    facebook?: string;
    linkedIn?: string;
    website?: string;
}

export default function DisseminationBlock(props: DisseminationBlockProps) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<DisseminationBlockDesktop facebook={props.facebook} linkedIn={props.linkedIn} website={props.website} />) : (
                <DisseminationBlockMobile facebook={props.facebook} linkedIn={props.linkedIn} website={props.website} />
            )}
        </Box>
    );
}
