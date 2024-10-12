"use client"
import MirButton from "@/app/components/mir-button";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Image from "next/image";

export default function OnlineCoursesDesktop() {
    const theme = useTheme();
    return (
        <Box sx={{ ml: "64px", mr: "64px", pt: "128px", display: "flex", gap: "80px", alignItems: "center" }}>
            <Image width={345} height={372} src="/yellow_cloud.png" alt="service_yellow">

            </Image>
            <Box sx={{
                gap: "32px", display: "flex", flexDirection: "column"
            }}>
                <Typography variant="h3">
                    Diversity and Inclusion online courses
                </Typography>
                <Typography>
                    Our online courses are designed to empower individuals to champion Diversity and Inclusion initiatives while driving positive social change. We offer practical insights, strategies, and tools to navigate the complex landscape of Diversity and Inclusion and social innovation.
                </Typography>
                <Typography sx={{ fontWeight: 700 }}>
                    Coming  soon!  Stay  tuned!
                </Typography>
                <MirButton color="info" variant="outlined"
                    sx={{
                        width: '160px',
                    }}
                >Lean more</MirButton>
            </Box>
        </Box>
    )
}