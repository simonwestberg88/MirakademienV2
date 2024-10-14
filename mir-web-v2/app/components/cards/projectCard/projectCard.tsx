"use client"
import { Project } from "@/app/types/project";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ProjectCardDesktop from "./desktop";
import ProjectCardMobile from "./mobile";

interface ProjectCardProps {
    project: Project;
    showTags?: boolean;
};

export default function ProjectCard({ project, showTags = true }: ProjectCardProps) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<ProjectCardDesktop project={project} showTags={showTags} />) : (
                <ProjectCardMobile project={project} showTags={showTags}/>
            )}
        </Box>
    );
}