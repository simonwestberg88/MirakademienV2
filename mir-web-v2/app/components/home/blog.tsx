"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import { Blog } from '@/app/types/Blog';
import BlogCard from './cards/blog_card';
import BlueButtonOutlined from '../blue_button_outlined';

interface BlogProps {
    posts: Blog[];
}

export default function HomeBlog({ posts }: BlogProps) {
    const theme = useTheme();
    return (
        <Box sx={{ pt: "112px" }}>
            <Box key="main1" sx={{ pl: "64px", pr: "64px", display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", flexDirection: "column", width: "768px" }}>
                    <Typography variant='body1' sx={{ fontWeight: 600 }}>Blog</Typography>
                    <Typography variant='h2'>Unlock Your Potential with MIR Akademien</Typography>
                    <Typography variant='body1'>Discover our range of services designed to foster diversity and inclusion. We provide comprehensive solutions to help organizations create an inclusive environment where everyone can thrive.</Typography>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", rowGap: "96px", justifyContent: "flex-start", pt: "96px", columnGap: "48px"  }}>
                    {posts.map((post) => (
                        <BlogCard post={post}></BlogCard>
                    ))}
                </Box>
                <Button variant='outlined' color="info"
                    sx={{
                        fontFamily: theme.typography.body1.fontFamily,
                        textTransform: "none",
                        mt: 10,
                        width: "auto",
                        alignSelf: "flex-start",
                        borderRadius: 40,
                        minWidth: "120px"
                    }}>More</Button>
            </Box>
        </Box>
    );
}