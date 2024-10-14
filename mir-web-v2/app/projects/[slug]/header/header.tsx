"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Project } from "@/app/types/project";
import HeaderDesktop from "./desktop";
import HeaderMobile from "./mobile";

interface HeaderProps {
    project: Project;
}
export default function Header({project} : HeaderProps){
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<HeaderDesktop project={project} />) : (
                <HeaderMobile project={project} />
            )}
        </Box>
    );
}