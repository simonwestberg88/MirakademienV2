import Footer from "@/app/components/footer";
import NavMenu from "@/app/components/nav-menu";
import { ContentfulClient } from "@/app/lib/client";
import { Project } from "@/app/types/project";
import { Box, Typography } from "@mui/material";
import HeaderBox from "./headerBox";
import DescriptionBlock from "./descriptionBlock";
import ResultsBlock from "./resultsBlock";
import DisseminationBlock from "./disseminationBlock";
import OtherProjectsBlock from "./otherProjectsBlock";

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
        shortTitle: item.fields.shortTitle,
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
            <Box
                ml={"64px"}
                mr={"64px"}
                display={"flex"}
                flexDirection={"column"}
            >
                <NavMenu
                    link1="Projects"
                    href1="/projects"
                    link2={project.shortTitle}
                />
                <Box display={"flex"} flexDirection={"column"} gap={"80px"}>
                    <Box display={"flex"} flexDirection={"column"} gap={"80px"} alignItems="center">
                        <Box display={"flex"} flexDirection={"column"} gap={"24px"} maxWidth={"1000px"} alignItems={"center"} pt={"24px"} >
                            <Typography variant="h1">{project.shortTitle}</Typography>
                            <Typography>{project.description}</Typography>
                        </Box>
                    </Box>
                    <Box key={"picureBox"} display="flex" flexDirection="column" gap="16px">
                        <Box display="flex" flexDirection={"row"} gap={"16px"} ml={"-400px"} overflow="visible" width={2732}>
                            <HeaderBox color="gray" alt="pic1" picture={project.headerPicsRow1?.[0]} />
                            <HeaderBox color='#e9f6f7' title={project.headerTitle1} text={project.headerText1} />
                            <HeaderBox color="gray" alt="pic2" picture={project.headerPicsRow1?.[1]} />
                            <HeaderBox color="gray" alt="pic3" picture={project.headerPicsRow1?.[2]} />
                            <HeaderBox color="red" />
                        </Box>
                        <Box display="flex" flexDirection={"row"} gap={"16px"} ml={"-100px"} overflow="visible" width={2732}>
                            <HeaderBox color="gray" alt="pic1" picture={project.headerPicsRow2?.[0]} />
                            <HeaderBox color="gray" alt="pic2" picture={project.headerPicsRow2?.[1]} />
                            <HeaderBox color='#f3b27c' title={project.headerTitle2} text={project.headerText2} />
                            <HeaderBox color="gray" alt="pic3" picture={project.headerPicsRow2?.[2]} />
                            <HeaderBox color="red" />
                        </Box>
                    </Box>
                    <DescriptionBlock imageUrl={project.descriptionPicture.fields.file.url} description={project.projectDescription} />
                    <ResultsBlock reserachResults={project.researchResults} description={project.researchDescription} />
                    <DisseminationBlock website={project.website} facebook={project.facebook} linkedIn={project.linkedIn}/>
                    <OtherProjectsBlock  isOngoing={project.isOngoing} currentProjectTitle={project.title}/>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
}