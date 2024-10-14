import { Box, Typography, Link } from "@mui/material";

export default function NewsCover() {
    return (
        <Box>
            <Box sx={{ ml: "64px", display: "flex", gap: "32px", mt: "24px", mb: "24px" }}>
                <Link href="/" underline="none" sx={{ fontWeight: 500 }}>Home</Link>
                <Typography>News</Typography>
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