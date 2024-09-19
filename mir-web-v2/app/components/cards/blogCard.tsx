"use client"
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { News } from "@/app/types/news";

interface BlogCardProps {
    post: News
};

export default function NewsCard(props: BlogCardProps) {
    const theme = useTheme();
    const coverimageUrl = props.post.cover.fields.file?.url as string;
    const authorImageUrl = props.post.authorImage.fields.file?.url as string;
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>

            <Box sx={{ borderRadius: "40px", overflow: "hidden" }}>
                <Image
                    src={`https:${coverimageUrl}`}
                    alt={props.post.contentTypeId}
                    width={632}
                    height={300}
                />
            </Box>
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