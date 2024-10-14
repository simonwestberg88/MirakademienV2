"use client"
import { useState } from "react";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Project } from "@/app/types/project";
import ProjectCard from "@/app/components/cards/projectCard";
import ProjectsComponentDesktop from "./desktop";
import ProjectsComponentMobile from "./mobile";

interface ProjectsProps {
    projects: Project[];
    title: string;
    description: string;
    buttonText: string;
}

export default function ProjectsComponent(props: ProjectsProps) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<ProjectsComponentDesktop buttonText={props.buttonText} description={props.description} projects={props.projects} title={props.title} />) : (
                <ProjectsComponentMobile buttonText={props.buttonText} description={props.description} projects={props.projects} title={props.title}/>
            )}
        </Box>
    );
}
