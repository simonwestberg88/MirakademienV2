"use client"
import { AssetFileWithDetails } from "@/app/types/AssetFileWithDetails";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";

interface DescriptionBlockProps {
    image: AssetFileWithDetails;
    description: Document;
}
export default function DescriptionBlockMobile(props: DescriptionBlockProps) {
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
        <Box key="descriptionBox" display="flex" flexDirection="column" gap="48px" alignItems="center" padding="20px">
            <Box >
                {documentToReactComponents(props.description, renderOptions)}
            </Box>
            <Box
                overflow={"hidden"}
                position={"relative"}
                borderRadius={"40px"}
                width="100%"
            >
                <Image
                    src={`https:${props.image.fields.file.url}`}
                    alt={"project picture"}
                    layout="responsive"
                    width={props.image.fields.file.details.image.width}
                    height={props.image.fields.file.details.image.height}
                />
            </Box>
        </Box>
    )
}