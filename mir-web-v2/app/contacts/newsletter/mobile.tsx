"use client"
import MirButton from "@/app/components/mir-button";
import theme from "@/theme";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function ContactsNewsletterMobile() {
    return (
        <Box sx={{ pt: "64px" }}>
            <Box
                sx={{
                    width: '100%',
                    height: "505px",
                    backgroundImage: "url(/contacts/newsletter.png)",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }}
            >
                <Box key="b2" sx={{
                    display: "flex", flexDirection: "column", pt: "39px", gap: "24px", pl: "20px", pr: "20px",
                }}>
                    <Typography variant="h2" color="white">Stay informed with Our Newsletter</Typography>
                    <Typography color="white">Subscribe to our newsletter for the latest updates and news.</Typography>
                    <TextField
                        placeholder="Your email here"
                        sx={{
                            backgroundColor: "white",
                            borderRadius: "40px",
                            width: "100%",
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "40px",
                                height: "48px", // Set a fixed height for the TextField
                            },
                            mr: 2,
                            "& .MuiInputBase-input": {
                                color: theme.palette.text.primary,
                                height: "auto", // Ensures the input content is aligned properly
                                padding: "12px 16px", // Adjust the padding to vertically center the text
                            },
                        }}
                        variant="outlined"
                    />
                    <MirButton
                        color="info"
                        variant="contained"
                    >
                        Join Now
                    </MirButton>
                    <Typography variant="caption" color="white">By joining, you agree to our Terms and Conditions.</Typography>
                </Box>
            </Box>
        </Box>
    )
}