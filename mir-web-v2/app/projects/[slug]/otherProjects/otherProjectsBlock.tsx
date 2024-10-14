import { ContentfulClient } from "@/app/lib/client";
import { Project } from "@/app/types/project";
import { Box, Typography } from "@mui/material";
import OtherProjectsCard from "./card/otherProjectsCard";

interface OtherProjectsBlockProps {
    isOngoing: boolean;
    currentProjectTitle: string;
}

export default async function OtherProjectsBlock(props: OtherProjectsBlockProps) {
    const contentfulClient = ContentfulClient.getClient();
    const projectsResponse = await contentfulClient.getEntries<Project>({
        content_type: 'project',
        limit: 4,
        order: ['fields.date'],
        select: [
            'fields.title',
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

    let projects = projectsResponse.items.map(item => ({
        cover: item.fields.cover,
        description: item.fields.description,
        slug: item.fields.slug,
        tags: item.fields.tags,
        coverHeight: item.fields.coverHeight,
        title: item.fields.title,
        isOngoing: item.fields.isOngoing,
        date: item.fields.date,
    } as unknown as Project));

    projects = projects.filter(project => project.title !== props.currentProjectTitle);
    return (
        <Box display="flex" flexDirection="column" alignItems="center" gap="80px">
            <Typography variant="h3">
                {props.isOngoing ? "Other ongoing projects" : "Other closed projects"}
            </Typography>
            <Box display="flex" flexDirection="row" flexWrap="wrap" gap="48px">
                {projects.map(project => (
                    <OtherProjectsCard key={project.title} project={project} />
                ))}
            </Box>
        </Box>
    )
}