"use client"
import MirButton from "@/app/components/mir-button";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Image from "next/image";

export default function OnsiteDesktop() {
    const theme = useTheme();
    return (
        <Box sx={{ ml: "64px", mr: "64px", pt: "128px", display: "flex", gap: "80px", alignItems: "center" }}>
            <Box sx={{
                gap: "32px", display: "flex", flexDirection: "column"
            }}>
                <Typography variant="h3">
                    Diversity and Inclusion on-site trainings
                </Typography>
                <Typography>
                    We utilize cutting-edge support and advisory to assist companies and municipalities in transforming their concepts of social inclusion and innovation into profitable ventures.
                </Typography>
                <MirButton 
                color="info" 
                variant="outlined"
                sx={{width: "160px"}}
                >Lean more</MirButton>
            </Box>
            <Image width={345} height={372} src="/orange_cloud.png" alt="service_orange">

            </Image>
        </Box>
    )
}