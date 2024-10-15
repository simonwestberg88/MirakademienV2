import NavMenu from "@/app/components/nav-menu";
import { Box, Link, Typography } from "@mui/material";

export default function ContactsCoverMobile() {
    return (
        <Box>
            <Box pl="20px">
                <NavMenu link1="Contacts" />
            </Box>
            <Box display="flex" flexDirection="column" gap="20px" padding="20px">
                <Typography variant="h1">Connect with Us</Typography>
                <Typography>We would love to hear from you. Contact us today to learn more about our inclusive education programs and how we can partner together to create a more equitable world.</Typography>
            </Box>
        </Box>);
}