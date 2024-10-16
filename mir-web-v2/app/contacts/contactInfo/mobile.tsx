import { Box, Typography } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';

export default function ContactInfoMobile(){
    return(
        <Box key="contact info"
                    sx={{
                    display: "flex", flexDirection: "column", gap: "32px", pb: "24px"
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography sx={{ fontWeight: 500 }}>Connect</Typography>
                        <Box>
                            <Typography variant="h2">Get in Touch</Typography>
                            <Typography>Have a question or need assistance? Contact us now.</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Box sx={{ display: "flex", flexDirection: "row", gap: "16px" }}>
                            <MailOutlineIcon />
                            <Typography>info@mirakademien.com</Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "row", gap: "16px" }}>
                            <LocalPhoneIcon />
                            <Typography>+46-55-222-8585</Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "row", gap: "16px" }}>
                            <PlaceIcon />
                            <Typography>Uppsala, Sweden</Typography>
                        </Box>
                    </Box>
                </Box>
    )
}