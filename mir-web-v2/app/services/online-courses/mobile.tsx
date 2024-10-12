"use client"
import MirButton from "@/app/components/mir-button";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Image from "next/image";

export default function OnlineCoursesMobile() {
    const theme = useTheme();
    return (
        <Box display="flex" flexDirection="column" padding="20px" pt="112px">
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
                >Lean more</MirButton>
                <Image width={345} height={372} src="/yellow_cloud.png" alt="service_yellow" />
            </Box>
        </Box>
    )
}