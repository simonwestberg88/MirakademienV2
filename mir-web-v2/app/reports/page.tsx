import { Box, Link, Typography } from "@mui/material";
import ReportCard from "../components/cards/reportCard";
import { ContentfulClient } from "../lib/client";
import { Report } from "../types/report";

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
            <Box sx={{pt: "112px"}}>
            {reports.map((report) => (
                    <Box sx={{ display: "flex", pt: "64px", maxWidth: "632px",  }} key={report.title}>
                        <ReportCard report={report}/>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}