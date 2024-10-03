import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { News } from '@/app/types/news';
import HomeNewsCard from './cards/news_card';
import MirButton from '../mir-button';
import ChevronRight from '@mui/icons-material/ChevronRight';

interface HomeNewsProps {
    news: News[];
}

export default function HomeNews({ news }: HomeNewsProps) {
    return (
        <Box pt="112px" display="flex" flexDirection="column" gap="80px" pl="64px" pr="64px">
            <Box display= "flex"  flexDirection= "column"  width = "768px" gap="16px">
                <Typography variant='body1' sx={{ fontWeight: 600 }}>News</Typography>
                <Typography variant='h2'>Unlock Your Potential with MIR Akademien</Typography>
                <Typography variant='body1'>Discover our range of services designed to foster diversity and inclusion. We provide comprehensive solutions to help organizations create an inclusive environment where everyone can thrive.</Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap="48px" flexWrap="wrap">
                {news.map(item => (
                    <HomeNewsCard news={item} />
                ))}
            </Box>
            <MirButton
            href='/news'
                variant='outlined'
                color='info'
                sx={{ width: "160px" }}
            >
                More news
                <ChevronRight />
            </MirButton>
        </Box>
    );
}