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
    const [filterCategory, setFilterCategory] = useState<string>("all");

    const filteredBlogPosts = filterCategory === "all"
        ? props.posts
        : props.posts.filter(post => post.category === filterCategory);

    const visibleBlogPosts = showAllBlogPosts ? filteredBlogPosts : filteredBlogPosts.slice(0, 6);

    const togglePosts = () => {
        setShowAllBlogPosts(!showAllBlogPosts);
    };

    const filterCategories = (category: string) => {
        setFilterCategory(category);
    };

    const sxSelected = { color: "orange.main", borderColor: "orange.main" };
    const sxNotSelected = { color: "black", borderColor: "orange.main" };

    return (
        <Box display={"flex"} flexDirection={"column"} gap={"64px"}>
            <Box display={"flex"} flexDirection={"row"}>
                <MirButton
                    onClick={() => filterCategories("all")}
                    variant={filterCategory === "all" ? "outlined" : "text"}
                    sx={filterCategory === "all" ? sxSelected : sxNotSelected}
                >
                    View all
                </MirButton>
                {props.categories.map(category => (
                    <MirButton
                        sx={filterCategory === category ? sxSelected : sxNotSelected}
                        onClick={() => filterCategories(category)}
                        variant={filterCategory === category ? "outlined" : "text"}
                    >{category}</MirButton>
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