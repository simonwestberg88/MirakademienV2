"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ReportsDesktop from "./desktop";
import ReportsMobile from "./mobile";
import { Report } from "@/app/types/report";

interface ReportsProps{
    reports: Report[];
}
export default function ReportsBlock({reports} : ReportsProps){
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<ReportsDesktop reports={reports}/>) : (
            <ReportsMobile reports={reports}/>
        )}
        </Box>
    );
}