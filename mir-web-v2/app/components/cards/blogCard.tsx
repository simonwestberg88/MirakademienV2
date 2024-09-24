"use client"
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { Blog } from "@/app/types/Blog";

interface BlogCardProps {
    post: Blog
};

export default function BlogCard(props: BlogCardProps) {
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
                    alt={props.post.contentTypeId}
                    layout="fill"
                    objectFit="cover"
                />
            </Box>
            <Typography sx={{fontWeight: 600}}>{props.post.category}</Typography>
            <Typography variant="h5">{props.post.title}</Typography>
            <Typography>{props.post.description}</Typography>
            <Box sx={{ display: "flex", gap: "16px" }}>
                <Image
                    width={48}
                    height={48}
                    src={`https:${authorImageUrl}`}
                    alt="auth"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>{props.post.author}</Typography>
                    <Typography variant="caption">{props.post.author} - {props.post.timeToRead}</Typography>
                </Box>
            </Box>
        </Box >
    );
}