"use client"
import theme from "@/theme";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function ContactsNewsletter() {
    return (
        <Box sx={{pt: "112px", mb: "-112px"}}>
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
                    display: "flex", flexDirection: "column", pt: "39px", gap: "24px", ml: "64px",
                    mr: "64px",
                    maxWidth: "768px"
                }}>
                    <Typography variant="h2" color="white">Stay informed with Our Newsletter</Typography>
                    <Typography color="white">Subscribe to our newsletter for the latest updates and news.</Typography>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                        <TextField
                            placeholder="Your email here"
                            sx={{
                                backgroundColor: "white",
                                borderRadius: "40px",
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "40px",
                                    height: "40px", // Set a fixed height for the TextField
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
                        <Button
                            color="info"
                            variant="contained"
                            sx={{
                                borderRadius: 40,
                                textTransform: "none",
                                color: "white",
                                height: "40px", // Set the same height as the TextField
                                width: 'auto',
                                alignSelf: 'flex-start',
                                ...theme.typography.body1,
                            }}
                        >
                            Join Now
                        </Button>
                    </Box>
                    <Typography variant="caption" color="white">By joining, you agree to our Terms and Conditions.</Typography>
                </Box>
            </Box>
        </Box>
    )
}