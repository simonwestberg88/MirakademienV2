import { TeamMember } from '@/app/types/TeamMember';
import { Box, Typography } from '@mui/material';
import Image from 'next/image'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Blog } from '@/app/types/Blog';

interface BlogCardProps {
    post: Blog;
}

export default function BlogCard({ post }: BlogCardProps) {
    const imageUrl = post.coverImage.fields.file?.url as string;
    return (
        <Box sx={{ width: "405px", display: "flex", flexDirection: "column", gap: "24px", alignItems: "flex-start" }}>
            <Image
                src={`https:${imageUrl}`} alt={post.contentTypeId}
                width={405}
                height={240}
            ></Image>
            <Box>
                <Typography variant='h4' sx={{ fontWeight: 700 }}>{post.title}</Typography>
                <Typography>{post.description}</Typography>
            </Box>
        </Box>
    );
}
