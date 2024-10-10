"use client"
import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import { News } from "@/app/types/news";

interface NewsCardProps {
    news: News
};

export default function NewsCard(props: NewsCardProps) {
    const coverimageUrl = props.news.cover.fields.file?.url as string;
    const authorImageUrl = props.news.authorImage.fields.file?.url as string;
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>

            <Box sx={{ borderRadius: "40px", overflow: "hidden" }}>
                <Image
                    src={`https:${coverimageUrl}`}
                    alt="newsimage"
                    width={632}
                    height={300}
                />
            </Box>
            <Link href={`/news/${props.news.slug}`} underline="none">
                <Typography variant="h5">{props.news.title}</Typography>
            </Link>
            <Typography>{props.news.description}</Typography>
            <Box sx={{ display: "flex", gap: "16px" }}>
                <Image
                    width={48}
                    height={48}
                    src={`https:${authorImageUrl}`}
                    alt="auth"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>{props.news.author}</Typography>
                    <Typography variant="caption">{props.news.author} - {props.news.timeToRead}</Typography>
                </Box>
            </Box>
        </Box >
    );
}