import ProjectCard from "@/app/components/cards/projectCard";
import { ContentfulClient } from "@/app/lib/client";
import { Project } from "@/app/types/project";
import { Box, Typography } from "@mui/material";
import OtherProjectsCard from "./otherProjectsCard";

interface OtherProjectsBlockProps {
    isOngoing: boolean;
}

export default async function OtherProjectsBlock(props: OtherProjectsBlockProps) {
    const contentfulClient = ContentfulClient.getClient();
    const projectsResponse = await contentfulClient.getEntries<Project>({
        content_type: 'project',
        limit: 3,
        order: ['fields.date'],
        select: [
            'fields.shortTitle',
            'fields.description',
            'fields.slug',
            'fields.cover',
            'fields.date',
            'fields.isOngoing',
            'fields.tags',
            'fields.coverHeight'
        ],
        'fields.isOngoing': props.isOngoing
    });

    const projects = projectsResponse.items.map(item => ({
        cover: item.fields.cover,
        description: item.fields.description,
        slug: item.fields.slug,
        tags: item.fields.tags,
        coverHeight: item.fields.coverHeight,
        shortTitle: item.fields.shortTitle,
        isOngoing: item.fields.isOngoing,
        date: item.fields.date,
    } as Project));
    return (
        <Box display="flex" flexDirection="column" alignItems="center" gap="80px">
            <Typography variant="h3">
                {props.isOngoing ? "Other ongoing projects" : "Other closed projects"}
            </Typography>
            <Box display="flex" flexDirection="row" flexWrap="wrap" gap="48px">
                {projects.map(project => (
                    <OtherProjectsCard project={project} />
                ))}
            </Box>
        </Box>
    )
}