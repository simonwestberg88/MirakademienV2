import MirButton from "@/app/components/mir-button";
import { Box, Typography } from "@mui/material";

export default function SupportBlockMobile() {
    return (
        <Box padding="20px" pt="64px" pb="64px">
            <Box display="flex" flexDirection="column" alignItems="center" gap="24px">
                <Typography variant="h2">Support Our Exciting New Projects</Typography>
                <Typography>Discover how you can make a difference and contribute to our impactful projects.</Typography>
                <Box display="flex" gap="16px">
                    <MirButton
                        sx={{ width: "160px" }}
                        variant="contained"
                    >Get involved</MirButton>
                    <MirButton
                        variant="outlined"
                        color="info"
                        sx={{ width: "160px" }}
                    >Learn more</MirButton>
                </Box>
            </Box>
        </Box>
    )
}