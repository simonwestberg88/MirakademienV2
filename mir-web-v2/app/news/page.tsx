import { Box } from "@mui/material"; import Footer from "../components/footer/footer";
import { ContentfulClient } from "../lib/client";
import { News } from "../types/news";
import NewsCover from "./cover/cover";
import NewsStories from "./stories/stories";
import NewsStayInformed from "./stayInformed/stayInformed";

export default async function NewsPage() {
    const contentfulClient = ContentfulClient.getClient();

    const newsResponse = await contentfulClient.getEntries<News>({
        content_type: "news",
        order: ["-fields.date"],
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
        authorImage: item.fields.authorImage,
        timeToRead: item.fields.timeToRead,
    } as News));

    console.log(news);

    return (
        <Box>
            <NewsCover />
            <NewsStories newsStories={news}/>
            <NewsStayInformed />
            <Footer />
        </Box >
    );
}