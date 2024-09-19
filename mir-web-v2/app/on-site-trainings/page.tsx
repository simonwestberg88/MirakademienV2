import { Box, Link, Typography } from "@mui/material";
import CrimePreventing from "./crime-preventing";

export default function OnSiteTrainings() {

    return (
        <Box sx={{ ml: "64px", mr: "64px" }}>
            <Box sx={{ display: "flex", gap: "24px", mt: "24px", mb: "24px" }}>
                <Link href="/" underline="none" sx={{ fontWeight: 500 }}>Home</Link>
                <Typography>MIR onsite trainings</Typography>
            </Box>
            <Box key="mainbody" sx={{ display: "flex", flexDirection: "column", gap: "80px" }}>
                <Typography variant="h1">MIR onsite trainings</Typography>
                <CrimePreventing />
            </Box>
        </Box>
    );
}