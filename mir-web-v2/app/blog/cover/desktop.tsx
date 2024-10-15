import NavMenu from "@/app/components/nav-menu";
import { Box, Typography } from "@mui/material";

export default function CoverDesktop() {
    return (
        <Box>
            <Box pl="64px" pr="64px">
                <NavMenu link1="Blog" />
            </Box>
            <Box pl="64px" pr="64px" sx={{ display: "flex", flexDirection: "column", gap: "80px", pb: "64px" }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "768", pt: "24px" }}>
                    <Typography variant="h1">Blog</Typography>
                    <Typography>Discover insights and stories on diversity, equity, and inclusion.</Typography>
                </Box>
            </Box>
        </Box>
    );

}