import { Box, Typography } from "@mui/material";
import MirButton from "../../components/mir-button";

export default function StayInformedMobile() {
    return (
        <Box pl="20px" pr="20px" pt="112px" gap="24px" display="flex" flexDirection="column">
            <Typography variant="h2">Stay Informed with MIR Akademien</Typography>
            <Typography>Get the latest updates on diversity, inclusion, and equity.</Typography>
            <Box sx={{ width: "81px" }}>
                <MirButton >Subscribe</MirButton>
            </Box>
        </Box>
    );
}