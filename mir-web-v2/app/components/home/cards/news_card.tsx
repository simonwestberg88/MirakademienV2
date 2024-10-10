import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { News } from "@/app/types/news";

interface NewsCardProps {
    news: News
};

export default function HomeNewsCard({ news }: NewsCardProps) {
    const coverimageUrl = news.cover.fields.file?.url as string;
    return (
        <Box maxWidth="405px" display="flex" flexDirection="column" gap="24px" >

            <Box
                maxWidth="405px"
                borderRadius="40px"
                overflow="hidden"
                height="240px"
                position="relative">
                <Image
                    src={`https:${coverimageUrl}`}
                    alt={news.contentTypeId}
                    fill
                />
            </Box>
            <Typography variant="h5">{news.title}</Typography>
            <Typography>{news.description}</Typography>
        </Box >
    );
}