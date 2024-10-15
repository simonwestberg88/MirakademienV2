"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { News } from "../../types/news";
import NewsStoriesDesktop from "./desktop";
import NewsStoriesMobile from "./mobile";

interface NewsStoriesProps {
    newsStories: News[]
}

export default function NewsStories(props: NewsStoriesProps) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<NewsStoriesDesktop newsStories={props.newsStories}/>) : (
            <NewsStoriesMobile newsStories={props.newsStories}/>
        )}
        </Box>

    );
}