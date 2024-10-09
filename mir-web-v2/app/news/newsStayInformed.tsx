import { Box, Typography } from "@mui/material";
import MirButton from "../components/mir-button";

export default function NewsStayInformed() {
    return (
        <Box sx={{ ml: "64px", mr: "64px", pt: "112px", gap: "24px", display: "flex", flexDirection: "column" }}>
            <Box sx={{ width: 768 }}>
                <Typography variant="h2">Stay Informed with MIR Akademien</Typography>
                <Typography>Get the latest updates on diversity, inclusion, and equity.</Typography>
                <Box sx={{ width: "81px" }}>
                    <MirButton >Subscribe</MirButton>
                </Box>
            </Box>
        </Box>
    );
}