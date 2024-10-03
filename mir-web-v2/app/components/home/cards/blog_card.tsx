import { Box, Typography } from '@mui/material';
import Image from 'next/image'
import { Blog } from '@/app/types/Blog';

interface BlogCardProps {
    post: Blog;
}

export default function BlogCard({ post }: BlogCardProps) {
    const imageUrl = post.coverImage.fields.file?.url as string;
    return (
        <Box display="flex" flexDirection="column" width="405px" gap="24px">
            <Box width= "405px" height="205px" borderRadius="40px" overflow="hidden">
                <Image
                    src={`https:${imageUrl}`} alt={post.contentTypeId}
                    width={405}
                    height={240}
                ></Image>
            </Box>
            <Box>
                <Typography variant='h4' sx={{ fontWeight: 300 }}>{post.title}</Typography>
                <Typography>{post.description}</Typography>
            </Box>
        </Box>
    );
}
