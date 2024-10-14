"use client"
import { useState } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { Project } from "@/app/types/project";
import ProjectCard from "@/app/components/cards/projectCard/projectCard";

interface ProjectsProps {
    projects: Project[];
    title: string;
    description: string;
    buttonText: string;
}

export default function ProjectsComponentMobile(props: ProjectsProps) {
    const theme = useTheme();
    const [showAllProjects, setShowAllProjects] = useState(false); // state to control visibility

    const visibleProjects = showAllProjects ? props.projects : props.projects.slice(0, 4); // show 4 or all

    const toggleProjectsView = () => {
        setShowAllProjects(!showAllProjects); // toggle between showing all and showing 4
    };

    return (
        <Box>
            <Box padding="20px">
                <Typography variant="h2">{props.title}</Typography>
                <Typography>{props.description}</Typography>
            </Box>
            <Box>
                {visibleProjects.map((project) => (
                    <Box sx={{ display: "flex", pt: "64px", maxWidth: "632px" }} key={project.slug}>
                        <ProjectCard project={project} />
                    </Box>
                ))}
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
                        {showAllProjects ? "Show fewer" : props.buttonText} { }
                    </Button>
                </Box>
            )}
        </Box>
    );
}
