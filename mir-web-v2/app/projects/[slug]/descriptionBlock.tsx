"use client"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";

interface DescriptionBlockProps {
    imageUrl: string;
    description: Document;
}
export default function DescriptionBlock(props: DescriptionBlockProps) {
    const theme = useTheme();
    const renderOptions = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
                return (
                    <Typography
                        variant="body1"
                        style={{
                            fontFamily: theme.typography.body1.fontFamily,
                            fontSize: theme.typography.body1.fontSize,
                            lineHeight: theme.typography.body1.lineHeight,
                            whiteSpace: 'pre-line'
                        }}
                    >
                        {children}
                    </Typography>
                );
            },
            [BLOCKS.HEADING_3]: (node: any, children: any) => {
                return (
                    <Typography
                        variant="h1"
                        style={{
                            fontFamily: theme.typography.h1.fontFamily,
                            fontSize: theme.typography.h1.fontSize,
                            lineHeight: theme.typography.h1.lineHeight,
                        }}
                    >
                        {children}
                    </Typography>
                );
            },
        },
    };
    return (
        <Box key="descriptionBox" display="flex" flexDirection="row" gap="64px" alignItems="center">
            <Box width="50%">
                {documentToReactComponents(props.description, renderOptions)}
            </Box>
            <Box
                width="50%"
                overflow={"hidden"}
                position={"relative"}
                borderRadius={"40px"}
                height="640px"
            >
                <Image
                    src={`https:${props.imageUrl}`}
                    alt={"project picture"}
                    layout="fill"
                    objectFit="cover"
                />
            </Box>
        </Box>
    )
}