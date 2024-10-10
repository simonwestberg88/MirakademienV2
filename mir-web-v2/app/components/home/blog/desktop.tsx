"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import { Blog } from '@/app/types/Blog';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MirButton from '../../mir-button';
import BlogCard from '../cards/blog_card';

interface BlogProps {
    posts: Blog[];
}

export default function BlogDesktop({ posts }: BlogProps) {
    const theme = useTheme();
    return (
        <Box sx={{ pt: "112px" }}>
            <Box key="main1" sx={{ pl: "64px", pr: "64px", display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", flexDirection: "column", width: "768px" }}>
                    <Typography variant='body1' sx={{ fontWeight: 600 }}>Blog</Typography>
                    <Typography variant='h2'>Unlock Your Potential with MIR Akademien</Typography>
                    <Typography variant='body1'>Discover our range of services designed to foster diversity and inclusion. We provide comprehensive solutions to help organizations create an inclusive environment where everyone can thrive.</Typography>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", rowGap: "96px", justifyContent: "flex-start", pt: "96px", columnGap: "48px" }}>
                    {posts.map((post) => (
                        <BlogCard post={post} key={post.slug}></BlogCard>
                    ))}
                </Box>
                <MirButton href='/blog' variant='outlined' color="info" sx={{ width: '160px', mt: '64px' }}>
                    More <ChevronRightIcon />
                </MirButton>
            </Box>
        </Box>
    );
}