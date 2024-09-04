import { Box, Typography } from "@mui/material";
import ProjectCard from "../components/cards/projectCard";
import { Project } from "../types/project";

interface ProjectsProps {
    projects: Project[];
    title: string;
    description: string;
}
export default function ProjectsComponent(props: ProjectsProps) {
    const midpoint = Math.ceil(props.projects.length / 2);
    const firstHalf = props.projects.slice(0, midpoint);
    const secondHalf = props.projects.slice(midpoint);

    return (
        <Box>
            <Box sx={{ pt: "112px", display: "flex", flexDirection: "column", gap: "24px", alignItems: "center" }}>
                <Typography variant="h2">{props.title}</Typography>
                <Typography>{props.description}</Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    gap: "32px",
                    width: "100%",
                }}
            >
                <Box>
                    {firstHalf.map((project) => (
                        <Box sx={{ display: "flex", pt: "64px", maxWidth: "632px" }}>
                            <ProjectCard key={project.slug} project={project} />
                        </Box>
                    ))}
                </Box>
                <Box>
                    {secondHalf.map((project) => (
                        <Box sx={{ display: "flex", pt: "64px", maxWidth: "632px" }}>
                            <ProjectCard key={project.slug} project={project} />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}