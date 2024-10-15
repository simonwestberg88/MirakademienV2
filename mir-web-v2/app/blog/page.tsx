import { Box, Typography } from "@mui/material";
import NavMenu from "../components/nav-menu";
import Featured from "./featured/featured";
import { ContentfulClient } from "../lib/client";
import { Blog } from "../types/Blog";
import Posts from "./posts/posts";
import Footer from "../components/footer/footer";
import StayInformed from "./stayInformed/stayInformed";
import Cover from "./cover/cover";
import Categories from "./categories/categories";

export default async function BlogPage() {
    const contentfulClient = ContentfulClient.getClient();

    const blogResponse = await contentfulClient.getEntries<Blog>({
        content_type: "blog",
        order: ['-fields.date']
    })

    let blogPosts = blogResponse.items.map(item => ({
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
        category: item.fields.category,
    } as Blog));

    const featuredBlog = blogPosts[0];
    blogPosts = blogPosts.slice(1, blogPosts.length);


    const categories = Array.from(new Set(blogPosts.map(post => post.category)));

    return (
        <Box>
            <Cover />
            <Featured post={featuredBlog} />
            <Categories categories={categories} posts={blogPosts} />
            <StayInformed />
        </Box>
    )
}