import { Box, Link, Typography } from "@mui/material"; import Footer from "../components/footer";
import CoverComponent from "../components/cover";
import { ContentfulClient } from "../lib/client";
import { News } from "../types/news";
import NewsCover from "./cover";

export default async function NewsPage() {
    const contentfulClient = ContentfulClient.getClient();

    const newsResponse = await contentfulClient.getEntries<News>({
        content_type: "clientStories"
    })

    const news = newsResponse.items.map(item => ({
        title: item.fields.title,
        cover: item.fields.cover,
        description: item.fields.description,
        tags: item.fields.tags,
        slug: item.fields.slug,
        author: item.fields.author,
        date: item.fields.date,
        post: item.fields.post,
    } as News));

    return (
        <Box>
            <Box>
                <NewsCover />
            </Box>
            <Footer />
        </Box >
    );
}