import { Box, Rating, Typography } from '@mui/material';
import { ClientStory } from '@/app/types/ClientStory';

interface ClientStoryCardProps {
    story: ClientStory;
}

export default function ClientStoryCard({ story }: ClientStoryCardProps) {
    return (
        <Box sx={{width: "50%", display: "flex", flexWrap: "wrap", flexDirection:"column", gap: "32px"}}>
            <Rating name="read-only" value={story.rating} readOnly />
            <Typography>{story.review}</Typography>
            <Typography variant='body2' sx={{fontWeight:600}}>{story.client}</Typography>
        </Box>
    );
}
