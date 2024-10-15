import { Box, Typography } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';

export default function ContactsContactMobile() {
    return (
        <Box padding="20px" pt="48px" display="flex" flexDirection="column" gap="48px">
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <Typography sx={{ fontWeight: "600" }}>Connect</Typography>
                <Typography variant="h2">Contact Us</Typography>
                <Typography>If you have any inquiries or need support, please reach out to us. We are here to help!</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", width: "300" }}>
                <MailOutlineIcon />
                <Typography variant="h6">Email</Typography>
                <Typography>Send us an email</Typography>
                <Typography>hello@mirakademien.com</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", width: "300" }}>
                <LocalPhoneIcon />
                <Typography variant="h6">Phone</Typography>
                <Typography>Give us a call</Typography>
                <Typography>+46-55-222-8585</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", width: "300" }}>
                <PlaceIcon />
                <Typography variant="h6">Office</Typography>
                <Typography>Uppsala Sweden</Typography>
            </Box>
        </Box>
    )
}