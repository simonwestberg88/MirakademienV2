import { Report } from "@/app/types/report";
import { Box, Checkbox, Typography } from "@mui/material";
interface ReportCardProps {
    report: Report;
}
export default function ReportCard(props: ReportCardProps) {
    return (
        <Box key="a" sx={{ display: "flex", flexDirection: "row", gap: "16px", alignItems: "flex-start" }}>
            <Checkbox slot="10pxs"
                defaultChecked
                sx={{
                    color: "#FF7612", // Default color
                    '&.Mui-checked': {
                        color: "#FF7612", // Color when checked
                    },
                    alignSelf: "flex-start",
                    mt: "-9px"
                }}
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <Typography variant="h6">
                    {props.report.title}
                </Typography>
                <Typography>
                    {props.report.description}
                </Typography>
            </Box>
        </Box>
    );
}