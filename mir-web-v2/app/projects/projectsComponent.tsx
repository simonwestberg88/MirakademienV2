"use client"
import { Box, Button, Typography, useTheme } from "@mui/material";
import ProjectCard from "../components/cards/projectCard";
import { Project } from "../types/project";

interface ProjectsProps {
    projects: Project[];
    title: string;
    description: string;
    buttonText: string;
}
export default function ProjectsComponent(props: ProjectsProps) {
    const theme = useTheme();
    const midpoint = Math.ceil(props.projects.length / 2);
    const firstHalf = props.projects.slice(0, midpoint);
    const secondHalf = props.projects.slice(midpoint);

    return (
        <Box>
            <Box sx={{ pt: "112px", display: "flex", flexDirection: "column", gap: "24px", alignItems: "center" }}>
                <Typography variant="h2">{props.title}</Typography>
                <Typography>{props.description}</Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    gap: "32px",
                    width: "100%",
                }}
            >
                <Box>
                    {firstHalf.map((project) => (
                        <Box sx={{ display: "flex", pt: "64px", maxWidth: "632px" }}>
                            <ProjectCard key={project.slug} project={project} />
                        </Box>
                    ))}
                </Box>
                <Box>
                    {secondHalf.map((project) => (
                        <Box sx={{ display: "flex", pt: "64px", maxWidth: "632px" }}>
                            <ProjectCard key={project.slug} project={project} />
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", pt: "64px" }}>
                <Button
                    variant='outlined'
                    color="info"
                    sx={{
                        borderRadius: 40,
                        fontSize: theme.typography.body1.fontSize,
                        lineHeight: theme.typography.body1.lineHeight,
                        fontFamily: theme.typography.body1.fontFamily,
                        textTransform: "none"
                    }}
                >{props.buttonText}
                </Button>
            </Box>
        </Box>
    );
}