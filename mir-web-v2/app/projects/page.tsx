import { Box, Link, Typography } from "@mui/material";
import { ContentfulClient } from "../lib/client";
import { Project } from "../types/project";
import ProjectCard from "../components/cards/projectCard";

export default async function Projects() {
  const contentfulClient = ContentfulClient.getClient();
  const teamResponse = await contentfulClient.getEntries<Project>({
    content_type: 'project',
  });
  const projects = teamResponse.items.map(item => ({
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
    shortTitle: item.fields.shortTitle
  } as Project));

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
      <Box sx={{ pt: "112px", display: "flex", flexDirection: "column", gap: "24px", alignItems: "center" }}>
        <Typography variant="h2">Ongoing Projects</Typography>
        <Typography>Explore our ongoing projects and their objectives.</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start", // Ensures the items start at the top of the row
          gap: "32px", // Adds space between the rows and columns
          width: "100%",
        }}
      >
        {projects.map((project) => (
          <Box sx={{ display: "flex", pt: "64px", maxWidth: "632px" }}>
            <ProjectCard key={project.slug} project={project} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}