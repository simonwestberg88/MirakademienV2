import NavMenu from "@/app/components/nav-menu";
import { Box, Typography } from "@mui/material";

export default function NewsCoverMobile() {
    return (
        <Box>
            <Box pl="20px" pr="20px">
            <NavMenu link1="News" />

            </Box>
            <Box
                sx={{
                    width: '100%',
                    height: "382px",
                    backgroundImage: 'url(/news/cover.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    alignItems: "center",
                    display: "flex"
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", ml: "64px", mr: "64px",}}>
                    <Typography color="white" sx={{ fontWeight: 600 }}>News</Typography>
                    <Typography variant="h2" color="white">Get the latest</Typography>
                    <Typography variant="body2" color="white">Stay updated with the latest news and updates from MIR Akademien.</Typography>
                </Box>
            </Box>
        </Box>
    );
}