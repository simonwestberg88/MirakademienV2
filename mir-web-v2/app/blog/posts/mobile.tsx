'use client'
import { Blog } from '../../types/Blog';
import { useState } from 'react';
import { Box } from '@mui/material';
import MirButton from '../../components/mir-button';
import BlogCard from '../../components/cards/blogCard/blogCard';


interface BlogPostsProps {
    posts: Blog[];
    categories: string[];
}
export default function PostsMobile(props: BlogPostsProps) {
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
        setShowAllBlogPosts(false);
    };

    const sxSelected = { color: "orange.main", borderColor: "orange.main" };
    const sxNotSelected = { color: "black", borderColor: "orange.main" };

    return (
        <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} flexDirection={"row"} flexWrap="wrap">
                <MirButton
                    onClick={() => filterCategories("all")}
                    variant={filterCategory === "all" ? "outlined" : "text"}
                    sx={filterCategory === "all" ? sxSelected : sxNotSelected}
                >
                    View all
                </MirButton>
                {props.categories.map(category => (
                    <MirButton
                        key={category}
                        sx={filterCategory === category ? sxSelected : sxNotSelected}
                        onClick={() => filterCategories(category)}
                        variant={filterCategory === category ? "outlined" : "text"}
                    >{category}</MirButton>
                ))}
            </Box>
            <Box display="flex" flexDirection="column" gap="48px">
                {visibleBlogPosts.map((post) => (
                    <BlogCard post={post} key={post.title} />
                ))}
            </Box>
            {filteredBlogPosts.length > 6 && (
                <Box display="flex" justifyContent="center">
                    <MirButton
                        onClick={togglePosts}
                        variant='outlined'
                        color="info"
                        sx={{ width: "160px" }}
                    >
                        {showAllBlogPosts ? "Show fewer" : "Show more"}
                    </MirButton>
                </Box>
            )}
        </Box>
    );
}