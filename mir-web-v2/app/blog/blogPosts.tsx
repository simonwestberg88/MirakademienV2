'use client'
import Grid from '@mui/material/Grid2';
import { Blog } from '../types/Blog';
import { useState } from 'react';
import { Box } from '@mui/material';
import MirButton from '../components/mir-button';
import BlogCard from '../components/cards/blogCard';


interface BlogPostsProps {
    posts: Blog[];
    categories: string[];
}
export default function BlogPosts(props: BlogPostsProps) {
    const [showAllBlogPosts, setShowAllBlogPosts] = useState(false);
    const [showAllCategories, setShowAllCategories] = useState(false);

    const visibleBlogPosts = showAllBlogPosts ? props.posts : props.posts.slice(0, 6);
    const visibleCategories = showAllCategories ? props.categories : props.categories.slice(0, 4);
    const togglePosts = () => {
        setShowAllBlogPosts(!showAllBlogPosts);
    };
    const toggleCategories = () => {
        setShowAllCategories(!showAllCategories);
    }

    return (
        <Box display={"flex"} flexDirection={"column"} gap={"64px"}>
            <Box display={"flex"} flexDirection={"row"}>
                <MirButton
                    onClick={toggleCategories}
                    variant='outlined'
                    sx={{ color: "orange.main", borderColor: "orange.main", width: "100px" }}
                >
                    {showAllCategories ? "Hide" : "View all"}
                </MirButton>
                {visibleCategories.map(category => (
                    <MirButton>{category}</MirButton>
                ))}
            </Box>
            <Grid container spacing={4}>
                {visibleBlogPosts.map((post) => (
                    <Grid size={4} key={post.title}>
                        <BlogCard post={post} />
                    </Grid>
                ))}
            </Grid>
            <MirButton
                onClick={togglePosts}
                variant='outlined'
                color="info"
            >
                {showAllBlogPosts ? "show fewer" : "show more"}
            </MirButton>
        </Box>
    );
}