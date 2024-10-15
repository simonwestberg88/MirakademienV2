import { Box, Button, Link, TextField, Typography, useTheme } from "@mui/material";
import ReportCard from "../components/cards/reportCard";
import { ContentfulClient } from "../lib/client";
import { Report } from "../types/report";
import Grid from '@mui/material/Grid2';
import Footer from "../components/footer/footer";
import ReportsSend from "./SendReports";
import CoverComponent from "../components/cover/cover";
import Cover from "./cover/cover";

export default async function Reports() {
    const contentfulClient = ContentfulClient.getClient();

    const reportsResponse = await contentfulClient.getEntries<Report>({
        content_type: "report",
        order: ["-fields.date"],
    });

    const reports = reportsResponse.items.map(item => ({
        title: item.fields.title,
        description: item.fields.description,
        date: item.fields.date,
        pdf: item.fields.pdf,
    } as Report));

    return (
        <Box>
            <Cover />
            <Box sx={{ pt: "112px", flexGrow: 1 }}>
                <Grid container spacing={4}>
                    {reports.map((report) => (
                        <Grid size={6} key={report.title}>
                            <ReportCard report={report} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <ReportsSend />
            <Footer />
        </Box>

    )
}