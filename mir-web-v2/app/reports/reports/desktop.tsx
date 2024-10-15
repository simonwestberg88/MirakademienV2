import ReportCard from "@/app/components/cards/reportCard";
import { Report } from "@/app/types/report";
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';

interface ReportsProps {
    reports: Report[];
}

export default function ReportsDesktop({ reports }: ReportsProps) {
    return (
        <Box sx={{ pt: "112px", flexGrow: 1 }} pl="64px" pr="64px">
            <Grid container spacing={4}>
                {reports.map((report) => (
                    <Grid size={6} key={report.title}>
                        <ReportCard report={report} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}