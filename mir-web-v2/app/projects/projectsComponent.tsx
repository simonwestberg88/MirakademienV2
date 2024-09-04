"use client"
import { useState } from "react";
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
    const [showAllProjects, setShowAllProjects] = useState(false); // state to control visibility

    const visibleProjects = showAllProjects ? props.projects : props.projects.slice(0, 4); // show 4 or all

    const toggleProjectsView = () => {
        setShowAllProjects(!showAllProjects); // toggle between showing all and showing 4
    };

    const midpoint = Math.ceil(visibleProjects.length / 2);
    const firstHalf = visibleProjects.slice(0, midpoint);
    const secondHalf = visibleProjects.slice(midpoint);

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
                        <Box sx={{ display: "flex", pt: "64px", maxWidth: "632px" }} key={project.slug}>
                            <ProjectCard project={project} />
                        </Box>
                    ))}
                </Box>
                <Box>
                    {secondHalf.map((project) => (
                        <Box sx={{ display: "flex", pt: "64px", maxWidth: "632px" }} key={project.slug}>
                            <ProjectCard project={project} />
                        </Box>
                    ))}
                </Box>
            </Box>
            {props.projects.length > 4 && ( 
                <Box sx={{ display: "flex", justifyContent: "center", pt: "32px" }}>
                    <Button
                        onClick={toggleProjectsView} 
                        variant='outlined'
                        color="info"
                        sx={{
                            borderRadius: 40,
                            fontSize: theme.typography.body1.fontSize,
                            lineHeight: theme.typography.body1.lineHeight,
                            fontFamily: theme.typography.body1.fontFamily,
                            textTransform: "none"
                        }}
                    >
                        {showAllProjects ? "Show fewer" : props.buttonText} {}
                    </Button>
                </Box>
            )}
        </Box>
    );
}
