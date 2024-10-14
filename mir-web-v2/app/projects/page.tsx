import { Box, Link, Typography } from "@mui/material";
import { ContentfulClient } from "../lib/client";
import { Project } from "../types/project";
import ProjectsSupport from "./support/support";
import Footer from "../components/footer/footer";
import ProjectsHeader from "./header/header";
import ProjectsComponent from "./ProjectsComponent/projectsComponent";

export default async function Projects() {
  const contentfulClient = ContentfulClient.getClient();
  const projectsResponse = await contentfulClient.getEntries<Project>({
    content_type: 'project',
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
  });

  const projects = projectsResponse.items.map(item => ({
    cover: item.fields.cover,
    description: item.fields.description,
    slug: item.fields.slug,
    tags: item.fields.tags,
    coverHeight: item.fields.coverHeight,
    title: item.fields.title,
    isOngoing: item.fields.isOngoing,
    date: item.fields.date,
  } as unknown as Project));

  const ongoingProjects = projects.filter(project => project.isOngoing === true);
  const closedProjects = projects.filter(project => project.isOngoing === false);

  return (
    <Box>
      <ProjectsHeader />
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
      <Footer />
    </Box>
  );
}