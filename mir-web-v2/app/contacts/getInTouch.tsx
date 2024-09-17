"use client"
import { Box, TextField, Typography } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';

export default function ContactsGetInTouch() {
    return (
        <Box sx={{ mr: "64px", ml: "64px", pt: "122px" }}>
            <Box>

                <Box key="contact info"
                    sx={{
                        display: "flex", flexDirection: "column", gap: "32px"
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
                <Box key="contact form"
                    sx={{ display: "flex", flexDirection: "column", gap: "24px" }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography>Name</Typography>
                        <TextField
                            placeholder="Your name"
                            sx={{
                                backgroundColor: "#EDE6D4",
                                borderRadius: "40px",
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "40px",
                                },
                            }}
                            variant="outlined"
                        />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography>Email</Typography>
                        <TextField
                            placeholder="Your email"
                            sx={{
                                backgroundColor: "#EDE6D4",
                                borderRadius: "40px",
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "40px",
                                },
                            }}
                            variant="outlined"
                        />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography>Message</Typography>
                        <TextField
                            placeholder="Enter your message..."
                            multiline 
                            minRows={4}
                            sx={{
                                backgroundColor: "#EDE6D4",
                                borderRadius: "40px",
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "40px",
                                    resize: "vertical",
                                    overflow: "auto",
                                    padding: "12px", 
                                },
                            }}
                            variant="outlined"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}