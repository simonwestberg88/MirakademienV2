import { Box, Typography } from "@mui/material";
import MirButton from "../../components/mir-button";

export default function StayInformedDesktop() {
    return (
        <Box maxWidth={"768px"} display={"flex"} flexDirection={"column"} gap={"24px"} pt={"112px"} pr="64px" pl="64px">
            <Typography variant="h2">Stay Informed with MIR Akademien</Typography>
            <Typography>Get the latest updates on diversity, inclusion, and equity.</Typography>
            <Box>
                <MirButton variant="contained">Subscribe</MirButton>
            </Box>
        </Box>
    );
}