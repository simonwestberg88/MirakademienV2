import Footer from "@/app/components/footer";
import NavMenu from "@/app/components/nav-menu";
import { ContentfulClient } from "@/app/lib/client";
import { Project } from "@/app/types/project";
import { BLOCKS } from "@contentful/rich-text-types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

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
        pictures: item.fields.pictures,
        projectDescription: item.fields.projectDescription,
        research: item.fields.research,
        slug: item.fields.slug,
        tags: item.fields.tags,
        facebook: item.fields.facebook,
        linkedIn: item.fields.linkedIn,
        website: item.fields.website,
        coverHeight: item.fields.coverHeight,
        shortTitle: item.fields.shortTitle,
        isOngoing: item.fields.isOngoing,
        date: item.fields.date,
        pic1: item.fields.pic1,
        pic2: item.fields.pic2,
        pic3: item.fields.pic3,
        pic4: item.fields.pic4,
        pic5: item.fields.pic5,
        pic6: item.fields.pic6,
        headerText1: item.fields.headerText1,
        headerText2: item.fields.headerText2,
        headerTitle1: item.fields.headerTitle1,
        headerTitle2: item.fields.headerTitle2,
        courseLink: item.fields.courseLink
    } as Project));
    const project = projects[0];

    const renderOptions = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
                const { file, title, description } = node.data.target.fields;
                const imageUrl = file.url;
                const imageWidth = file.details.image.width;
                const imageHeight = file.details.image.height;

                return (
                    <Image
                        src={`https:${imageUrl}`}
                        alt={title || 'Image'}
                        width={imageWidth}
                        height={imageHeight}
                        style={{ borderRadius: '10px', objectFit: 'cover' }}
                    />
                );
            },
        },
    };

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
                    <Box display={"flex"} flexDirection={"column"} gap={"24px"} maxWidth={"1000px"} alignItems={"center"} pt={"24px"} >
                        <Typography variant="h1">{project.shortTitle}</Typography>
                        <Typography>{project.description}</Typography>
                    </Box>
                    <Box key={"picureBox"}>
                        <Box display={"flex"} flexDirection={"row"} gap={"16px"} ml={"-400px"} >
                            <Box
                                overflow={"hidden"}
                                position={"relative"}
                                borderRadius={"40px"}
                                height="340px"
                                width="416px"
                            >
                                {project.pic1 ? (
                                    <Image
                                        src={`https:${project.pic1.fields.file.url}`}
                                        alt="pic1"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                ) : (
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: 'gray'
                                        }}
                                    />
                                )}
                            </Box>
                            <Box
                                overflow={"hidden"}
                                position={"relative"}
                                borderRadius={"40px"}
                                height="340px"
                                width="416px"
                            >

                                <Box
                                    width={"100%"}
                                    height={'100%'}
                                    display={"flex"}
                                    flexDirection={"column"}
                                    justifyContent={"center"}
                                    sx={{
                                        backgroundColor: '#e9f6f7'
                                    }}
                                >
                                    <Typography px={"20px"} variant="h5">{project.headerTitle1}</Typography>
                                    <Typography px={"20px"}>{project.headerText1}</Typography>
                                </Box>
                            </Box>
                            <Box
                                overflow={"hidden"}
                                position={"relative"}
                                borderRadius={"40px"}
                                height="340px"
                                width="416px"
                            >
                                {project.pic2 ? (
                                    <Image
                                        src={`https:${project.pic2.fields.file.url}`}
                                        alt="pic1"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                ) : (
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: 'gray'
                                        }}
                                    />
                                )}
                            </Box>
                            <Box
                                overflow={"hidden"}
                                position={"relative"}
                                borderRadius={"40px"}
                                height="340px"
                                width="416px"
                            >
                                {project.pic3 ? (
                                    <Image
                                        src={`https:${project.pic3.fields.file.url}`}
                                        alt="pic1"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                ) : (
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: 'gray'
                                        }}
                                    />
                                )}
                            </Box>
                            <Box
                                overflow={"hidden"}
                                position={"relative"}
                                borderRadius={"40px"}
                                height="340px"
                                width="416px"
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'red'
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box></Box>
                    </Box>

                </Box>
            </Box>
            <Footer />
        </Box>
    );
}