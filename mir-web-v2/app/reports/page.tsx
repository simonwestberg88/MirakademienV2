import { Box } from "@mui/material";
import { ContentfulClient } from "../lib/client";
import { Report } from "../types/report";
import Footer from "../components/footer/footer";
import ReportsSend from "./SendReports";
import Cover from "./cover/cover";
import ReportsBlock from "./reports/reports";

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
            <ReportsBlock reports={reports} />
            <ReportsSend />
            <Footer />
        </Box>

    )
}