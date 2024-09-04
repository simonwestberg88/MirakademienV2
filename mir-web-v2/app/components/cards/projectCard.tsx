"use client"
import { Project } from "@/app/types/project";
import { Box, Button, Link, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface ProjectCardProps {
    project: Project
};

export default function ProjectCard({ project }: ProjectCardProps) {
    const theme = useTheme();
    const imageUrl = project.cover.fields.file?.url as string;
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <Box sx={{ borderRadius: "30px", overflow: "hidden", width: 623, height: project.coverHeight }}>
                <Image
                    src={`https:${imageUrl}`}
                    alt={project.contentTypeId}
                    width={623}
                    height={project.coverHeight}
                />
            </Box>
            <Typography variant="h5">{project.shortTitle}</Typography>
            <Typography>{project.description}</Typography>
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
            <Link underline="none" href={project.slug}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    Learn more <ChevronRightIcon />
                </Box>
            </Link>
        </Box >
    );
}