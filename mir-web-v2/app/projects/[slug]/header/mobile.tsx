import NavMenu from "@/app/components/nav-menu";
import { Box, Typography } from "@mui/material";
import HeaderBoxMobile from "./headerBox/headerBoxMobile";
import { Project } from "@/app/types/project";

interface HeaderProps {
    project: Project;
}
export default function HeaderMobile({ project }: HeaderProps) {
    return (
        <Box padding="20px">
            <NavMenu
                link1="Projects"
                href1="/projects"
                link2={project.title}
            />
            <Box display={"flex"} flexDirection={"column"} gap={"24px"} pt={"24px"} >
                <Typography textAlign="center" variant="h1">{project.title}</Typography>
                <Typography textAlign="center">{project.description}</Typography>
            </Box>
            <Box pt="64px" key={"picureBox"} display="flex" flexDirection="column" gap="16px" overflow="hidden" ml="-20px" mr="-164px">
                <Box display="flex" flexDirection={"row"} gap={"16px"} ml={"-90px"} width={2732}>
                    <HeaderBoxMobile color="gray" alt="pic1" picture={project.headerPicsRow1?.[0]} />
                    <HeaderBoxMobile color='#e9f6f7' title={project.headerTitle1} text={project.headerText1} />
                    <HeaderBoxMobile color="gray" alt="pic2" picture={project.headerPicsRow1?.[1]} />
                    <HeaderBoxMobile color="gray" alt="pic3" picture={project.headerPicsRow1?.[2]} />
                    <HeaderBoxMobile color="red" />
                </Box>
                <Box display="flex" flexDirection={"row"} gap={"16px"} ml={"20px"} width={2732}>
                    <HeaderBoxMobile color="gray" alt="pic1" picture={project.headerPicsRow2?.[0]} />
                    <HeaderBoxMobile color="gray" alt="pic2" picture={project.headerPicsRow2?.[1]} />
                    <HeaderBoxMobile color='#f3b27c' title={project.headerTitle2} text={project.headerText2} />
                    <HeaderBoxMobile color="gray" alt="pic3" picture={project.headerPicsRow2?.[2]} />
                    <HeaderBoxMobile color="red" />
                </Box>
            </Box>
        </Box>
    );
}