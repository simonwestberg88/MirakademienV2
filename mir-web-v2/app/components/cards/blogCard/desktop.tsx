"use client"
import { Box, Link, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { Blog } from "@/app/types/Blog";

interface BlogCardProps {
    post: Blog
};

export default function BlogCardDesktop(props: BlogCardProps) {
    const coverimageUrl = props.post.coverImage.fields.file?.url as string;
    const authorImageUrl = props.post.authorImage.fields.file?.url as string;
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <Box
                sx={{
                    position: "relative",
                    width: "416px",
                    borderRadius: "40px",
                    overflow: "hidden",
                    height: "300px"
                }}
            >
                <Image
                    src={`https:${coverimageUrl}`}
                    alt="cover image"
                    fill
                    objectFit="cover"
                />
            </Box>
            <Typography sx={{fontWeight: 600}}>{props.post.category}</Typography>
            <Link underline="none" href={`/blog/${props.post.slug}`}> <Typography variant="h5">{props.post.title}</Typography></Link>
            <Typography>{props.post.description}</Typography>
            <Box sx={{ display: "flex", gap: "16px" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>{props.post.author}</Typography>
                    <Typography variant="caption">{props.post.author} - {props.post.timeToRead}</Typography>
                </Box>
            </Box>
        </Box >
    );
}