"use client"
import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { Blog } from "@/app/types/Blog";
import BlogCardDesktop from "./desktop";
import BlogCardMobile from "./mobile";

interface BlogCardProps {
    post: Blog
};

export default function BlogCard(props: BlogCardProps) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<BlogCardDesktop post={props.post}/>) : (
            <BlogCardMobile post={props.post}/>
        )}
        </Box>

    );
}