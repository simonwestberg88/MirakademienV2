import { Box, Typography } from "@mui/material";
import { News } from "../types/news";
import NewsCard from "../components/cards/newsCard";

interface NewsStoriesProps {
    newsStories: News[]
}

export default function NewsStories(props: NewsStoriesProps) {
    return (
        <Box sx={{ pl: "64px", pr: "64px", pt: "112px" }}>
            <Box sx={{ alignItems: "center", display: "flex", flexDirection: "column", textAlign: "center", gap: "16px" }}>
                <Typography sx={{ fontWeight: 600 }}>Our News</Typography>
                <Typography variant="h2">Stay Informed with MIR</Typography>
                <Typography>Discover the latest updates and achievements from MIR Akademien.</Typography>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {props.newsStories.map((news) => (
                    <Box sx={{ display: "flex", pt: "64px", maxWidth: "632px" }} key={news.slug}>
                        <NewsCard news={news} />
                    </Box>
                ))}
            </Box>
        </Box>
    )
}