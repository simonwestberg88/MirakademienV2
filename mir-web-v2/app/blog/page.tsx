import { Box, Typography } from "@mui/material";
import NavMenu from "../components/nav-menu";
import BlogFeatured from "./featured";
import { ContentfulClient } from "../lib/client";
import { Blog } from "../types/Blog";
import { AssetFile, EntrySkeletonType } from 'contentful';

export default async function BlogPage() {
    const contentfulClient = ContentfulClient.getClient();
    const blogResponse = await contentfulClient.getEntries<Blog>({
        content_type: "blog",
        order: ['-fields.date']
    })

    const blogPosts = blogResponse.items.map(item => ({
        title: item.fields.title,
        post: item.fields.post,
        date: item.fields.date,
        author: item.fields.author,
        authorImage: item.fields.authorImage,
        slug: item.fields.slug,
        description: item.fields.description,
        tags: item.fields.tags,
        coverImage: item.fields.coverImage,
        timeToRead: item.fields.timeToRead,
    } as Blog));

    const featuredBlog = blogPosts[0];
    return (
        <Box sx={{ ml: "64px", mr: "64px" }}>
            <NavMenu link1="Blog" />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "80px" }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "768", pt: "24px" }}>
                    <Typography variant="h1">Blog</Typography>
                    <Typography>Discover insights and stories on diversity, equity, and inclusion.</Typography>
                </Box>
                <Box>
                    <BlogFeatured post={featuredBlog} />
                </Box>
            </Box>
        </Box>
    )
}