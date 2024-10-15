import NavMenu from "@/app/components/nav-menu";
import { Box, Typography } from "@mui/material";

export default function CoverDesktop() {
    return (
        <Box>
            <NavMenu link1="Reports" />
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
    );
}