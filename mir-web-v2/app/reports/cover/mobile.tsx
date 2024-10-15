import NavMenu from "@/app/components/nav-menu";
import { Box, Typography } from "@mui/material";

export default function CoverMobile() {
    return (
        <Box>
            <Box pl="20px" pr="20px">
                <NavMenu link1="Reports" />
            </Box>
            <Box
            pl="20px"
            pr="20px"
                sx={{
                    width: '100%',
                    height: "356px",
                    backgroundImage: "url(/reports/cover.png)",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Box key="b2" sx={{
                    display: "flex", flexDirection: "column", pt: "39px", gap: "24px"
                }}>
                    <Typography color="white">Reports</Typography>
                    <Typography variant="h1" color="white">Here you can access MIR Akademien free reports</Typography>
                </Box>
            </Box>
        </Box>
    );
}