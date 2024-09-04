import { Box, Link, Typography } from "@mui/material";
import { ContentfulClient } from "../lib/client";
import { Project } from "../types/project";
import ProjectsComponent from "./projectsComponent";
import ProjectsSupport from "./support";

export default async function Projects() {
  const contentfulClient = ContentfulClient.getClient();
  const projectsResponse = await contentfulClient.getEntries<Project>({
    content_type: 'project',
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
    ], // Specify the fields to fetch
  });

  const projects = projectsResponse.items.map(item => ({
    // title: item.fields.title,
    cover: item.fields.cover,
    description: item.fields.description,
    // descriptionPicture: item.fields.descriptionPicture,
    // pictures: item.fields.pictures,
    // projectDescription: item.fields.projectDescription,
    // research: item.fields.research,
    slug: item.fields.slug,
    tags: item.fields.tags,
    // facebook: item.fields.facebook,
    // linkedIn: item.fields.linkedIn,
    // website: item.fields.website,
    coverHeight: item.fields.coverHeight,
    shortTitle: item.fields.shortTitle,
    isOngoing: item.fields.isOngoing,
    date: item.fields.date,
  } as Project));

  const ongoingProjects = projects.filter(project => project.isOngoing === true);
  const closedProjects = projects.filter(project => project.isOngoing === false);

  return (
    <Box sx={{ ml: "64px", mr: "64px" }}>
      <Box sx={{ display: "flex", gap: "32px", mt: "24px", mb: "24px" }}>
        <Link href="/" underline="none" sx={{ fontWeight: 500 }}>Home</Link>
        <Typography>Projects</Typography>
      </Box>
      <Box sx={{ tp: "112px", maxWidth: "768px" }}>
        <Typography variant="h1">Projects</Typography>
        <Typography>As dedicated contributors to Diversity and Inclusion practices and social innovation at EU scale, we actively develop and participate in projects aimed at promoting diversity, inclusion and belonging in education and labor market sectors.</Typography>
      </Box>
      <ProjectsComponent
        description="Explore our ongoing projects and their objectives."
        title="Ongoing Projects"
        projects={ongoingProjects}
        buttonText="View all ongoing Projects"
      />
      <ProjectsComponent
        description="Explore our closed projects and their objectives."
        title="Closed Projects"
        projects={closedProjects}
        buttonText="View all closed Projects"
      />
      <ProjectsSupport />
    </Box>
  );
}