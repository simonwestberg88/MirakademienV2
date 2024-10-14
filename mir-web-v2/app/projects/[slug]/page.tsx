import NavMenu from "@/app/components/nav-menu";
import { ContentfulClient } from "@/app/lib/client";
import { Project } from "@/app/types/project";
import { Box, Typography } from "@mui/material";
import HeaderBox from "./header/headerBox/headerBoxDesktop";
import DescriptionBlock from "./descriptionBlock";
import ResultsBlock from "./resultsBlock";
import DisseminationBlock from "./disseminationBlock";
import OtherProjectsBlock from "./otherProjectsBlock";
import SupportBlock from "./supportBlock";
import Header from "./header/header";

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

    return (
        <Box>
            <Header project={project} />
            <DescriptionBlock imageUrl={project.descriptionPicture.fields.file.url} description={project.projectDescription} />
            <ResultsBlock reserachResults={project.researchResults} description={project.researchDescription} />
            <DisseminationBlock website={project.website} facebook={project.facebook} linkedIn={project.linkedIn} />
            <OtherProjectsBlock isOngoing={project.isOngoing} currentProjectTitle={project.title} />
            <SupportBlock />
        </Box>
    );
}