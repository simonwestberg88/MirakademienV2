"use client"
import { Project } from "@/app/types/project";
import { Box, Button, Link, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface ProjectCardProps {
    project: Project;
    showTags?: boolean;
};

export default function ProjectCardMobile({ project, showTags = true }: ProjectCardProps) {
    const theme = useTheme();
    const imageUrl = project.cover.fields.file?.url as string;
    if (showTags === undefined) {
        showTags = true;
    }

    return (
        <Box display="flex" flexDirection="column" padding="20px" gap="24px">
            <Box borderRadius= "30px" overflow="hidden" width= "100%" position="relative">
                <Image
                    src={`https:${imageUrl}`}
                    alt={project.contentTypeId}
                    width={project.cover.fields.file.details.image.width}
                    height={project.cover.fields.file.details.image.height}
                    layout="responsive"
                />
            </Box>
            <Link underline="none" href={`/projects/${project.slug}`}> <Typography variant="h5">{project.title}</Typography></Link>
            <Typography>{project.description}</Typography>
            {showTags ? (

                <Box sx={{ display: "flex", gap: "8px" }}>
                    {project.tags.map((tag) => (
                        <Button
                            key={tag}
                            sx={{
                                background: "#FF7612",
                                color: "white",
                                borderRadius: 40,
                                fontSize: theme.typography.body1.fontSize,
                                lineHeight: theme.typography.body1.lineHeight,
                                fontFamily: theme.typography.body1.fontFamily,
                                textTransform: "none"
                            }}>{tag}</Button>
                    ))}
                </Box>
            ) : (<Box />)
            }
            <Link underline="none" href={`/projects/${project.slug}`}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    Learn more <ChevronRightIcon />
                </Box>
            </Link>
        </Box >
    );
}