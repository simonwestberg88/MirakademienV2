"use client"
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Image from "next/image";

export default function ServiceCoaching
    () {
    const theme = useTheme();
    return (
        <Box sx={{ ml: "64px", mr: "64px", pt: "128px", display: "flex", gap: "80px", alignItems: "center" }}>
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
                <Box sx={{display: "flex", gap: "24px"}}>

                    <Button color="info" variant="outlined"
                        sx={{
                            borderRadius: 40, textTransform: "none", ...theme.typography.body1,
                            width: 'auto',
                            alignSelf: 'flex-start'
                        }}
                    >
                        SIGN IN Mentors
                    </Button>
                    <Button color="info" variant="outlined"
                        sx={{
                            borderRadius: 40, textTransform: "none", ...theme.typography.body1,
                            width: 'auto',
                            alignSelf: 'flex-start'
                        }}
                    >
                        SIGN IN Mentees
                    </Button>

                </Box>
            </Box>
            <Image width={345} height={372} src="/green_cloud.png" alt="service_green">

            </Image>
        </Box>
    )
}