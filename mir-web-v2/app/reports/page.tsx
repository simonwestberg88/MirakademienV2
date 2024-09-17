import { Box, Link, Typography } from "@mui/material";

export default function Reports() {
    return (
        <Box sx={{ ml: "64px", mr: "64px" }}>
            <Box sx={{ display: "flex", gap: "32px", mt: "24px", mb: "24px" }}>
                <Link href="/" underline="none" sx={{ fontWeight: 500 }}>Home</Link>
                <Typography>Contacts</Typography>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    height: "398px",
                    backgroundImage: "url(/reports/cover.png)",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    ml: "-64px",
                    pr: "128px"
                }}
            >
                <Box key="b2" sx={{
                    display: "flex", flexDirection: "column", pt: "39px", gap: "24px", ml: "64px",
                    mr: "64px",
                    maxWidth: "768px"
                }}>
                    <Typography color="white">Reports</Typography>
                    <Typography variant="h1" color="white">Here you can access MIR Akademien free reports</Typography>
                </Box>
            </Box>
        </Box>
    )
}