"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Blog } from "../../types/Blog";
import FeaturedDesktop from "./desktop";
import FeaturedMobile from "./mobile";

interface BlogCardProps {
    post: Blog
};

export default function Featured(props: BlogCardProps) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<FeaturedDesktop post={props.post}/>) : (
            <FeaturedMobile post={props.post}/>
        )}
        </Box>

    );
}