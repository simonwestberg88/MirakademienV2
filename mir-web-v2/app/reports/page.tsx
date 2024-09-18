import { Box, Button, Link, TextField, Typography, useTheme } from "@mui/material";
import ReportCard from "../components/cards/reportCard";
import { ContentfulClient } from "../lib/client";
import { Report } from "../types/report";
import Grid from '@mui/material/Grid2';
import Footer from "../components/footer";
import ReportsSend from "./SendReports";

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

            <Box sx={{ ml: "64px", mr: "64px" }}>
                <Box sx={{ display: "flex", gap: "32px", mt: "24px", mb: "24px" }}>
                    <Link href="/" underline="none" sx={{ fontWeight: 500 }}>Home</Link>
                    <Typography>Reports</Typography>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        height: "398px",
                        backgroundImage: "url(/reports/cover.png)",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        ml: "-64px",
                        pr: "128px"
                    }}
                >
                    <Box key="b2" sx={{
                        display: "flex", flexDirection: "column", pt: "39px", gap: "24px", ml: "64px",
                        mr: "64px",
                        maxWidth: "768px"
                    }}>
                        <Typography color="white">Reports</Typography>
                        <Typography variant="h1" color="white">Here you can access MIR Akademien free reports</Typography>
                    </Box>
                </Box>
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
            </Box>
            <Footer />
        </Box>

    )
}