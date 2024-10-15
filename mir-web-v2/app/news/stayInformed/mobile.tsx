import { Box, Typography } from "@mui/material";
import MirButton from "../../components/mir-button";

export default function StayInformedMobile() {
    return (
        <Box pl="20px" pr="20px" pt="64px" gap="24px" display="flex" flexDirection="column" pb="64px">
            <Typography variant="h2">Stay Informed with MIR Akademien</Typography>
            <Typography>Get the latest updates on diversity, inclusion, and equity.</Typography>
                <MirButton sx={{width: "160px"}} variant="contained">Subscribe</MirButton>
        </Box>
    );
}