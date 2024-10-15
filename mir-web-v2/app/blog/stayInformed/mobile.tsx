import { Box, Typography } from "@mui/material";
import MirButton from "../../components/mir-button";

export default function StayInformedMobile() {
    return (
        <Box display={"flex"} flexDirection={"column"} gap={"24px"} padding="20px" pt={"64px"} pb="64px">
            <Typography variant="h2">Stay Informed with MIR Akademien</Typography>
            <Typography>Get the latest updates on diversity, inclusion, and equity.</Typography>
            <Box>
                <MirButton variant="contained">Subscribe</MirButton>
            </Box>
        </Box>
    );
}