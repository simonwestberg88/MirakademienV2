"use client"
import { Box, Typography } from "@mui/material";
import { News } from "../../types/news";
import MirButton from "../../components/mir-button";
import { useState } from "react";
import NewsCardMobile from "@/app/components/cards/newsCard/mobile";

interface NewsStoriesProps {
    newsStories: News[]
}

export default function NewsStoriesMobile(props: NewsStoriesProps) {
    const [showAllNews, setShowAllNews] = useState(false);

    let visibleNews = showAllNews ? props.newsStories : props.newsStories.slice(0, 6);

    const toggleNews = () => {
        console.log(showAllNews)
        setShowAllNews(!showAllNews);
    };
    return (
        <Box display="flex" flexDirection="column" padding="20px" gap="64px">
            <Box sx={{ alignItems: "center", display: "flex", flexDirection: "column", textAlign: "center", gap: "16px" }}>
                <Typography sx={{ fontWeight: 600 }}>Our News</Typography>
                <Typography variant="h2">Stay Informed with MIR</Typography>
                <Typography>Discover the latest updates and achievements from MIR Akademien.</Typography>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "space-between" }}>
                {visibleNews.map((news) => (
                    <Box pt="24x" key={news.slug}>
                        <NewsCardMobile news={news} />
                    </Box>
                ))}
            </Box>
            {props.newsStories.length > 6 && !showAllNews && (

                <Box display="flex" justifyContent="center" width="100%">
                    <MirButton
                        onClick={() => toggleNews()}
                        variant="outlined"
                        color="info"
                        sx={{ width: "160px" }}
                    >Show more
                    </MirButton>
                </Box>
            )
            }
        </Box>
    )
}