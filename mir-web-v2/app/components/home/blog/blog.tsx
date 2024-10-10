"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
import { Blog } from '@/app/types/Blog';
import BlogDesktop from './desktop';
import BlogMobile from './mobile';

interface BlogProps {
    posts: Blog[];
}

export default function HomeBlog({ posts }: BlogProps) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<BlogDesktop posts={posts} />) : (
            <BlogMobile posts={posts} />
        )}
        </Box>

    );
}