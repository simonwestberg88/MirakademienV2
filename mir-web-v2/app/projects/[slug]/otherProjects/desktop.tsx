import { ContentfulClient } from "@/app/lib/client";
import { Project } from "@/app/types/project";
import { Box, Typography } from "@mui/material";
import OtherProjectsCardDesktop from "./card/desktop";

interface OtherProjectsBlockProps {
    projects: Project[];
    isOngoing: boolean;
}

export default function OtherProjectsBlockDesktop({projects, isOngoing}: OtherProjectsBlockProps) {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" gap="80px" pl="64px" pr="64px">
            <Typography variant="h3">
                {isOngoing ? "Other ongoing projects" : "Other closed projects"}
            </Typography>
            <Box display="flex" flexDirection="row" flexWrap="wrap" gap="48px">
                {projects.map(project => (
                    <OtherProjectsCardDesktop key={project.title} project={project} />
                ))}
            </Box>
        </Box>
    )
}