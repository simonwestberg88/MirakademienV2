import { Box, Link, Typography } from '@mui/material';
import Image from 'next/image'
import { Blog } from '@/app/types/Blog';

interface BlogCardProps {
    post: Blog;
}

export default function BlogCard({ post }: BlogCardProps) {
    const imageUrl = post.coverImage.fields.file?.url as string;
    return (
        <Box display="flex" flexDirection="column" maxWidth="405px" gap="24px">
            <Box maxWidth= "405px" height="205px" borderRadius="40px" overflow="hidden" position="relative">
                <Image
                    src={`https:${imageUrl}`} 
                    alt="blog-card"
                    fill
                ></Image>
            </Box>
            <Box>
                <Link underline='none' href={`/blog/${post.slug}`}>
                <Typography variant='h4' sx={{ fontWeight: 300 }}>{post.title}</Typography>
                </Link>
                <Typography>{post.description}</Typography>
            </Box>
        </Box>
    );
}
