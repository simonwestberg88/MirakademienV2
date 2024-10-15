import { ContentfulClient } from "@/app/lib/client";
import { News } from "@/app/types/news";
import NewsPageSlugClient from "./story/page";

export default async function NewsSlugPage({ params }: { params: { slug: string } }) {
    const contentfulClient = ContentfulClient.getClient();

    const newsResponse = await contentfulClient.getEntries<News>({
        content_type: "news",
        'fields.slug': params.slug,
        limit: 1,
    });

    const item = newsResponse.items[0];

    const news = {
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
    } as News;

    return (
        <NewsPageSlugClient news={news}/>
    );
}