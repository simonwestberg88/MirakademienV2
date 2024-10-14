"use client"
import MirButton from "@/app/components/mir-button";
import { Box, Typography } from "@mui/material";

export default function ProjectsSupportMobile() {
    return (
        <Box display="flex" flexDirection="column" padding="20px" alignItems="center" gap="24px">
            <Typography textAlign="center" variant="h2">Support Our Exciting New Projects</Typography>
            <Typography textAlign="center">Discover how you can make a difference and contribute to our impactful projects.</Typography>
            <Box display="flex" width="100%" gap="4px" >
                <MirButton sx={{flex: 1}} variant="contained">Get Involved</MirButton>
                <MirButton sx={{flex: 1}} color="info" variant="outlined">Learn More</MirButton>
            </Box>
        </Box>
    );
}
