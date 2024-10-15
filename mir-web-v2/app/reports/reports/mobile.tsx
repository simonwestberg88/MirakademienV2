import ReportCard from "@/app/components/cards/reportCard";
import { Report } from "@/app/types/report";
import { Box } from "@mui/material";

interface ReportsProps {
    reports: Report[];
}

export default function ReportsMobile({ reports }: ReportsProps) {
    return (
        <Box display="flex" flexDirection="column" gap="24px" pt="48px">
            {reports.map((report) => (
                <ReportCard key={report.title} report={report} />
            ))}
        </Box>
    );
}