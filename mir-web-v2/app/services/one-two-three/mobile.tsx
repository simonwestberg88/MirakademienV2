"use client"

import { Box, Typography } from "@mui/material";

export default function Services123Mobile() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "80px", ml: "64px", mr: "64px", pt: "128px" }}>
            <Typography sx={{ width: "768px" }} variant="h3">We can help your team to become diverse and inclusive</Typography>
            <Box sx={{ display: "flex", gap: "48px" }}>
                <Box key="box1">
                    <Typography variant="h2">1</Typography>
                    <Typography variant="h5">Diversity and Inclusion on-site trainings</Typography>
                </Box>
                <Box key="box2">
                <Typography variant="h2">2</Typography>
                <Typography variant="h5">Diversity and Inclusion online courses</Typography>
                </Box>
                <Box key="box3">
                <Typography variant="h2">3</Typography>
                <Typography variant="h5">Diversity and Inclusion career coaching & matching</Typography>
                </Box>
            </Box>
        </Box>
    )
}