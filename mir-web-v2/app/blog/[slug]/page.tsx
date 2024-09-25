import { Box, Typography } from '@mui/material';
import { Blog } from '../../types/Blog';
import { ContentfulClient } from '../../lib/client';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const contentfulClient = ContentfulClient.getClient();
    
    const blogResponse = await contentfulClient.getEntries<Blog>({
        content_type: "blog",
        'fields.slug': params.slug,
        limit: 1,
    });
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

    if (!blogResponse.items.length) {
        return {
            notFound: true,
        };
    }

    const post = blogPosts[0];

    return (
        <Box sx={{ ml: "64px", mr: "64px" }}>
            <Typography variant="h1" sx={{ mb: 4 }}>{post.title}</Typography>
        </Box>
    );
}
