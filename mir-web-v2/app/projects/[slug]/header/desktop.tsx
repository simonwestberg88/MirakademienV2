import NavMenu from "@/app/components/nav-menu";
import { Box, Typography } from "@mui/material";
import HeaderBox from "./headerBox/headerBoxDesktop";
import { Project } from "@/app/types/project";

interface HeaderProps {
    project: Project;
}
export default function HeaderDestkop({project} : HeaderProps){
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
                    link2={project.title}
                />
                <Box display={"flex"} flexDirection={"column"} gap={"80px"}>
                    <Box display={"flex"} flexDirection={"column"} gap={"80px"} alignItems="center">
                        <Box display={"flex"} flexDirection={"column"} gap={"24px"} maxWidth={"1000px"} alignItems={"center"} pt={"24px"} >
                            <Typography variant="h1">{project.title}</Typography>
                            <Typography>{project.description}</Typography>
                        </Box>
                    </Box>
                    <Box key={"picureBox"} display="flex" flexDirection="column" gap="16px" overflow="hidden" ml="-64px" mr="-164px">
                        <Box display="flex" flexDirection={"row"} gap={"16px"} ml={"-400px"}  width={2732}>
                            <HeaderBox color="gray" alt="pic1" picture={project.headerPicsRow1?.[0]} />
                            <HeaderBox color='#e9f6f7' title={project.headerTitle1} text={project.headerText1} />
                            <HeaderBox color="gray" alt="pic2" picture={project.headerPicsRow1?.[1]} />
                            <HeaderBox color="gray" alt="pic3" picture={project.headerPicsRow1?.[2]} />
                            <HeaderBox color="red" />
                        </Box>
                        <Box display="flex" flexDirection={"row"} gap={"16px"} ml={"-100px"}  width={2732}>
                            <HeaderBox color="gray" alt="pic1" picture={project.headerPicsRow2?.[0]} />
                            <HeaderBox color="gray" alt="pic2" picture={project.headerPicsRow2?.[1]} />
                            <HeaderBox color='#f3b27c' title={project.headerTitle2} text={project.headerText2} />
                            <HeaderBox color="gray" alt="pic3" picture={project.headerPicsRow2?.[2]} />
                            <HeaderBox color="red" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}