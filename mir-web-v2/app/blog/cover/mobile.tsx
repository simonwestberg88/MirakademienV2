import NavMenu from "@/app/components/nav-menu";
import { Box, Typography } from "@mui/material";

export default function CoverMobile() {
    return (
        <Box pl="20px" pr="20px">
            <NavMenu link1="Blog" />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "80px" }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "768", pt: "24px" }}>
                    <Typography variant="h1">Blog</Typography>
                    <Typography>Discover insights and stories on diversity, equity, and inclusion.</Typography>
                </Box>
            </Box>
        </Box>
    );

}