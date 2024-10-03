"use client"
import { Box, Link, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { Blog } from "../types/Blog";

interface BlogCardProps {
    post: Blog
};

export default function BlogFeatured(props: BlogCardProps) {
    const coverimageUrl = props.post.coverImage.fields.file?.url;
    const authorImageUrl = props.post.authorImage.fields.file?.url;

    return (
        <Box key="main" sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={"80px"}  >
                <Box
                    sx={{
                        position: "relative",
                        width: "656px",
                        borderRadius: "40px",
                        overflow: "hidden",
                        height: "500px"
                    }}
                >
                    <Image
                        src={`https:${coverimageUrl}`}
                        alt="cover image"
                        layout="fill"
                    />
                </Box>
                <Box display={"flex"} flexDirection={"column"} flex={1} gap={"24px"}>
                    <Typography fontWeight={600}>Featured</Typography>
                    <Link underline="none" href={`/blog/${props.post.slug}`}>
                        <Typography variant="h5">{props.post.title}</Typography>
                    </Link>
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