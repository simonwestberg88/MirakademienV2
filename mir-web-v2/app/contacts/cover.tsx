import { Box, Link, Typography } from "@mui/material";

export default function ContactsCover() {
    return (
        <Box sx={{ ml: "64px", mr: "64px", mt: "-24px", pt: "24px" }}>
            <Box sx={{ display: "flex", gap: "32px", mt: "24px", mb: "24px" }}>
                <Link href="/" underline="none" sx={{ fontWeight: 500 }}>Home</Link>
                <Typography>Contacts</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", pt: "24px", pb: "24px" }}>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h1">Connect with Us</Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography>We would love to hear from you. Contact us today to learn more about our inclusive education programs and how we can partner together to create a more equitable world.</Typography>
                </Box>
            </Box>
        </Box>);
}