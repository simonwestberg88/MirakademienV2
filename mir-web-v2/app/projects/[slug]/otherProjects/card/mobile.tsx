import { Project } from "@/app/types/project";
import { Box, Typography, Link } from "@mui/material";
import Image from "next/image";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


interface ProjectCardProps {
    project: Project;
};

export default function OtherProjectsCardMobile({ project }: ProjectCardProps) {

    const imageUrl = project.cover.fields.file?.url as string;
    return (
        <Box display="flex" flexDirection="column" gap="24px">
            <Box borderRadius="40px" position="relative" overflow="hidden">
                <Image
                    src={`https:${imageUrl}`}
                    alt={project.contentTypeId}
                    width={project.cover.fields.file.details.image.width}
                    height={project.cover.fields.file.details.image.height}
                    layout="responsive"
                />
            </Box>
            <Link underline="none" href={`/projects/${project.slug}`}> <Typography variant="h5">{project.title}</Typography></Link>
            <Typography>{project.description}</Typography>
            <Link underline="none" href={`/projects/${project.slug}`}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    Learn more <ChevronRightIcon />
                </Box>
            </Link>
        </Box >
    );
}