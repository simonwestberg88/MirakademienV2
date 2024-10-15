"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import NewsSlugPageDesktop from "./desktop";
import NewsSlugPageMobile from "./mobile";
import { News } from "@/app/types/news";

interface NewsSlugPageProps{
    news: News;
}

export default async function NewsPageSlugClient({ news }: NewsSlugPageProps) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<NewsSlugPageDesktop news={news}/>) : (
            <NewsSlugPageMobile news={news} />
        )}
        </Box>

    );
}