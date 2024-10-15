import { ContentfulClient } from "@/app/lib/client";
import { Project } from "@/app/types/project";
import { Box } from "@mui/material";
import DescriptionBlock from "./description/descriptionBlock";
import ResultsBlock from "./results/resultsBlock";
import DisseminationBlock from "./dessemination/disseminationBlock";
import SupportBlock from "./support/supportBlock";
import Header from "./header/header";
import OtherProjectsBlock from "./otherProjects/otherProjectsBlock";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const contentfulClient = ContentfulClient.getClient();

    const projectResponse = await contentfulClient.getEntries<Project>({
        content_type: "project",
        'fields.slug': params.slug,
        limit: 1,
    });

    const projects = projectResponse.items.map(item => ({
        title: item.fields.title,
        cover: item.fields.cover,
        description: item.fields.description,
        descriptionPicture: item.fields.descriptionPicture,
        projectDescription: item.fields.projectDescription,
        researchResults: item.fields.researchResults,
        researchDescription: item.fields.researchDescription,
        slug: item.fields.slug,
        tags: item.fields.tags,
        facebook: item.fields.facebook,
        linkedIn: item.fields.linkedIn,
        website: item.fields.website,
        coverHeight: item.fields.coverHeight,
        isOngoing: item.fields.isOngoing,
        date: item.fields.date,
        headerPicsRow1: item.fields.headerPicsRow1,
        headerPicsRow2: item.fields.headerPicsRow2,
        headerText1: item.fields.headerText1,
        headerText2: item.fields.headerText2,
        headerTitle1: item.fields.headerTitle1,
        headerTitle2: item.fields.headerTitle2,
        courseLink: item.fields.courseLink,
    } as unknown as Project));
    const project = projects[0];

    const otherProjectsResponse = await contentfulClient.getEntries<Project>({
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
        'fields.isOngoing': project.isOngoing
    });

    let otherProjects = otherProjectsResponse.items.map(item => ({
        cover: item.fields.cover,
        description: item.fields.description,
        slug: item.fields.slug,
        tags: item.fields.tags,
        coverHeight: item.fields.coverHeight,
        title: item.fields.title,
        isOngoing: item.fields.isOngoing,
        date: item.fields.date,
    } as unknown as Project));

    otherProjects = otherProjects.filter(proj =>
        proj.title !== project.title
    ).slice(0,3);

    return (
        <Box>
            <Header project={project} />
            <DescriptionBlock image={project.descriptionPicture} description={project.projectDescription} />
            <ResultsBlock reserachResults={project.researchResults} description={project.researchDescription} />
            <DisseminationBlock website={project.website} facebook={project.facebook} linkedIn={project.linkedIn} />
            <OtherProjectsBlock isOngoing projects={otherProjects} />
            <SupportBlock />
        </Box>
    );
}