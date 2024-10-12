"use client"
import MirButton from "@/app/components/mir-button";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Image from "next/image";

export default function CoachingMobile
    () {
    const theme = useTheme();
    return (
        <Box display="flex" flexDirection="column" padding="20px" pt="112px">
            <Box sx={{
                gap: "32px", display: "flex", flexDirection: "column"
            }}>
                <Typography variant="h3">
                    Diversity and Inclusion career coaching & matching
                </Typography>
                <Typography>
                    Career counseling aims to assist individuals in defining their choices, thereby empowering them to take steps towards employment or entrepreneurship. Our career coaching & matching services are based on building a personal brand, understanding individual aspirations, skills, and capabilities, aligning them with the demands of the job market.
                </Typography>
                <Typography variant="caption">
                    *more information is coming soon
                </Typography>
                <Typography variant="caption">
                    *meanwhile leave your inquiry for participating in the program
                </Typography>
                <MirButton color="info" variant="outlined"
                >
                    SIGN IN Mentors
                </MirButton>
                <MirButton color="info" variant="outlined"
                >
                    SIGN IN Mentees
                </MirButton>
            </Box>
            <Image width={345} height={372} src="/green_cloud.png" alt="service_green">

            </Image>
        </Box>
    )
}