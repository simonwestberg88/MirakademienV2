"use client"
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { Blog } from "../types/Blog";

interface BlogCardProps {
    post: Blog
};

export default function NewsCard(props: BlogCardProps) {
    const theme = useTheme();
    const coverimageUrl = props.post.coverImage.fields.file?.url as string;
    const authorImageUrl = props.post.authorImage.fields.file?.url as string;
    return (
        <Box key="main" sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                <Box sx={{ borderRadius: "40px", overflow: "hidden", flex: 1 }}>
                    <Image
                        src={`https:${coverimageUrl}`}
                        alt={props.post.contentTypeId}
                        width={632}
                        height={300}
                    />
                </Box>
                <Box display={"flex"} flexDirection={"column"} flex={1} gap={"24px"}>
                    <Typography fontWeight={600}>Featured</Typography>
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
                            <Typography variant="caption">{props.post.date} - {props.post.timeToRead} read</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}