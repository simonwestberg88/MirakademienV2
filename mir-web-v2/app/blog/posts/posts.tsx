'use client'
import { Blog } from '../../types/Blog';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import PostsDesktop from './desktop';
import PostsMobile from './mobile';


interface BlogPostsProps {
    posts: Blog[];
    categories: string[];
}
export default function Posts(props: BlogPostsProps) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<PostsDesktop categories={props.categories} posts={props.posts} />) : (
            <PostsMobile categories={props.categories} posts={props.posts} />
        )}
        </Box>
    );
}