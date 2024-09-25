'use client'
import Grid from '@mui/material/Grid2';
import { Blog } from '../types/Blog';
import { useState } from 'react';
import { Box } from '@mui/material';
import MirButton from '../components/mir-button';
import BlogCard from '../components/cards/blogCard';


interface BlogPostsProps {
    posts: Blog[];
}
export default function BlogPosts(props: BlogPostsProps) {
    const [showAllBlogPosts, setShowAllBlogPosts] = useState(false);

    const visibleBlogPosts = showAllBlogPosts ? props.posts : props.posts.slice(0, 6);
    const togglePosts = () => {
        setShowAllBlogPosts(!showAllBlogPosts);
    };

    return (
        <Box>
            <MirButton
                onClick={togglePosts}
                variant='outlined'
                color="info"
            >
                {showAllBlogPosts ?   "show fewer": "show more"}
            </MirButton>
            <Grid container spacing={4}>
                {visibleBlogPosts.map((post) => (
                    <Grid size={4} key={post.title}>
                        <BlogCard post={post} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}