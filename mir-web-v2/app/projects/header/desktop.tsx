import NavMenu from "@/app/components/nav-menu";
import { Box, Typography } from "@mui/material";

export default function HeaderDesktop() {
    return (
        <Box pr="64px" pl="64px">
            <NavMenu link1="Projects" />
            <Box sx={{ tp: "112px", maxWidth: "768px" }}>
                <Typography variant="h1">Projects</Typography>
                <Typography>As dedicated contributors to Diversity and Inclusion practices and social innovation at EU scale, we actively develop and participate in projects aimed at promoting diversity, inclusion and belonging in education and labor market sectors.</Typography>
            </Box>
        </Box>
    )
}