import { ContentfulClient } from "@/app/lib/client";
import { Project } from "@/app/types/project";
import { Box, Typography } from "@mui/material";
import OtherProjectsCardMobile from "./card/mobile";

interface OtherProjectsBlockProps {
    isOngoing: boolean;
    projects: Project[];
}

export default function OtherProjectsBlockMobile({projects, isOngoing}: OtherProjectsBlockProps) {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" gap="80px" padding="20px">
            <Typography variant="h3">
                {isOngoing ? "Other ongoing projects" : "Other closed projects"}
            </Typography>
            <Box display="flex" flexDirection="row" flexWrap="wrap" gap="48px">
                {projects.map(project => (
                    <OtherProjectsCardMobile key={project.title} project={project} />
                ))}
            </Box>
        </Box>
    )
}