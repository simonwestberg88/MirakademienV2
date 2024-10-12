"use client"
import MirButton from "@/app/components/mir-button";
import { Box, Typography } from "@mui/material";

export default function DiscoverMobile() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            padding="20px"
            pt="64px"
            pb="64px"
            gap="8px"
            sx={{
                backgroundImage: "url(/services/discover.png)",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Typography variant="h2" color="white">Discover Our Services Today</Typography>
            <Typography color="white">Contact us to learn more about our services or to schedule a consultation.</Typography>
            <MirButton  variant="contained"
                sx={{
                    mt: "16px",
                    width: '160px',
                    alignSelf: 'flex-start',
                }}
            >Lean more</MirButton>
        </Box>
    );
}