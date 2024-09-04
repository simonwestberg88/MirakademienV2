import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

export default function OurStoryStart() {
    const theme = useTheme();
    return (
        <Box sx={{ pt: "112px" }}>
            <Box key="main1" sx={{ pl: "64px", pr: "64px", display: "flex", columnGap: "80px" }}>
                <Box key="first">
                    <Typography variant="h3">Before MIR Akademien came into being, I would be all over the place with social innovation, leading life-long learning projects such as Erasmus+, Horizon, Just projects International, and SI.</Typography>
                </Box>
                <Box
                    key="second"
                    sx={{
                        display: "flex",
                        flexDirection: "column",  // Stack items vertically
                        gap: "24px"               // Set a 24px gap between each Typography component
                    }}
                >
                    <Typography>I never actually planned to start my own thing. But, funny enough, it just happened overnight.</Typography>
                    <Typography>Back in 2018 I was running the study circle “Human Rights for newly arrived migrants” for a group of women. I always thought of myself as a human rights advocate, totally open-minded. I&apos;ve been doing research and communication work as well as methodology development for social inclusion for years.</Typography>
                    <Typography>One day I was running the circle and together with participants we were talking about rights in Sweden and I was pouring my heart out, trying to “share my wisdom.” However, the connection between them and me never happened. It turned out I was subjective to my audience and did a little research on it, so I was underestimating their knowledge on human rights.</Typography>
                    <Typography>During the break, my friend, who was running the NGO and invited me to host a circle, took me aside and gave me a reality check. She was super diplomatic about it but basically said, “Jenny, get off your high horse and start talking to them, not at them. They&apos;ve got plenty to share too.”</Typography>
                </Box>
            </Box>
        </Box>
    );
}