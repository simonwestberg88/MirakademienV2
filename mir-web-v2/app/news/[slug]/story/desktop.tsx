import NavMenu from "@/app/components/nav-menu";
import { ContentfulClient } from "@/app/lib/client";
import { News } from "@/app/types/news";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import LinkIcon from '@mui/icons-material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { BLOCKS } from "@contentful/rich-text-types";

interface NewsSlugPageProps{
    news: News;
}

export default function NewsSlugPageDesktop({ news }: NewsSlugPageProps) {

    const renderOptions = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
                const { file, title, description } = node.data.target.fields;
                const imageUrl = file.url;
                const imageWidth = file.details.image.width;
                const imageHeight = file.details.image.height;

                let boxHeight = "500px";
                if(imageHeight < 500){
                    boxHeight = `${imageHeight}px`
                }

                return (
                    <Box
                        borderRadius="10px"
                        position="relative"
                        width="768px"
                        overflow="hidden"
                        height={boxHeight}>
                        <Image
                            src={`https:${imageUrl}`}
                            alt={title || 'Image'}
                            width={imageWidth}
                            height={imageHeight}
                            layout="responsive"
                        />
                    </Box>
                );
            },
        },
    };

    return (
        <Box>

            <Box sx={{ ml: "64px", mr: "64px" }}>
                <NavMenu link1='Blog' link2={news.title} href1='/blog'></NavMenu>
                <Box display={"flex"} flexDirection={"column"} gap={"80px"}>
                    <Box display={"flex"} flexDirection={"column"} gap={"16px"}>
                        <Box display={"fleX"} flexDirection={"row"} gap={"16px"} alignItems="center">
                            <Typography variant='caption'>{news.timeToRead} read</Typography>
                        </Box>
                        <Typography variant="h1" sx={{ mb: 4 }}>{news.title}</Typography>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} gap={"32px"}>
                        <Box
                            overflow={"hidden"}
                            position={"relative"}
                            borderRadius={"40px"}
                            height="600px"
                        >
                            <Image
                                src={`https:${news.cover.fields.file.url}`}
                                alt="cover image"
                                layout="fill"
                                objectFit="cover"
                            />
                        </Box>
                        <Box display="flex" flexDirection="row" justifyContent="space-between" width="100%">
                            <Box display="flex" flexDirection="row" gap={4}>
                                <Box display="flex" flexDirection="column">
                                    <Typography>Written by</Typography>
                                    <Typography fontWeight={500}>{news.author}</Typography>
                                </Box>

                                <Box display="flex" flexDirection="column">
                                    <Typography>Published on</Typography>
                                    <Typography fontWeight={500}>{news.date}</Typography>
                                </Box>
                            </Box>
                            <Box display="flex" gap={1}>
                                <LinkIcon />
                                <LinkedInIcon />
                                <XIcon />
                                <FacebookIcon />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box maxWidth={"768px"} pt={"112px"} mx="auto">
                    {documentToReactComponents(news.post, renderOptions)}
                    <Box key="btmBox" display={"flex"} flexDirection={"column"} gap={"48px"} alignItems="center">
                        <Box display={"flex"} flexDirection={"column"} gap={"16px"} alignItems="center">
                            <Typography fontWeight={600}>Share this news</Typography>
                            <Box alignItems="center">
                                <LinkIcon />
                                <LinkedInIcon />
                                <FacebookIcon />
                            </Box>
                            <Box
                                display={"flex"}
                                gap={"8px"}
                                alignItems="center">
                                {news.tags.map(tag => (
                                    <Typography key={tag} borderRadius={"20px"} padding={"4px"} pl={"10px"} pr={"10px"} bgcolor={"orange.main"} color={"white"} variant='caption'>{tag}</Typography>
                                ))}
                            </Box>
                        </Box>
                        <Divider sx={{ width: "100%", mb: 5, background: "black" }} />
                        <Box display={"flex"} flexDirection={"column"} gap={"16px"} alignItems="center">
                            <Image
                                width={48}
                                height={48}
                                src={`https:${news.authorImage.fields.file.url}`}
                                alt="authImage"
                            />
                            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                                <Typography variant='caption' fontWeight={600}>{news.author}</Typography>
                                <Typography variant='caption'>{news.authorDescription}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Box>

    );
}