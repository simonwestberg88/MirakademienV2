import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box, Typography } from "@mui/material";
import MirButton from "./mir-button";

interface ContactFormProps {
    open: boolean;
    handleClose: () => void;
}

export default function ContactForm({ open, handleClose }: ContactFormProps) {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
        handleClose(); // Close the dialog after submitting
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    backgroundColor: "#F6F3EA", // Background color for the entire dialog
                    borderRadius: "40px", // Rounded corners for the entire dialog
                    padding: "64px",
                },
            }}
        >
            <Typography variant="h2" textAlign="center">Contact Us</Typography>
            <form onSubmit={handleSubmit}>
                <DialogContent
                    sx={{
                        backgroundColor: "#F6F3EA", // Keep consistent background inside the content
                        borderRadius: "40px", // Ensure the content also has rounded corners
                    }}
                >
                    <Box display="flex" flexDirection="column" gap={2}>
                        <Box>
                            <Typography>Name</Typography>
                            <TextField
                                placeholder="First and last name"
                                sx={{
                                    backgroundColor: "#EDE6D4",
                                    borderRadius: "10px",
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "10px",
                                    },
                                }}
                                variant="outlined"
                                required
                                fullWidth
                            />
                        </Box>
                        <Box>
                            <Typography>Email</Typography>

                            <TextField
                                placeholder="Email"
                                sx={{
                                    backgroundColor: "#EDE6D4",
                                    borderRadius: "10px",
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "10px",
                                    },
                                }}
                                variant="outlined"
                                required
                                type="email"
                                fullWidth
                            />
                        </Box>
                        <Box>
                            <Typography>Message</Typography>
                            <TextField multiline rows={4} fullWidth required
                                sx={{
                                    backgroundColor: "#EDE6D4",
                                    borderRadius: "10px",
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "10px",
                                    },
                                }}
                                placeholder="Type your message..."
                            />
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Box width="100%" display="flex" justifyContent="center">
                        <MirButton type="submit" variant="contained" color="primary">
                            Submit
                        </MirButton>
                    </Box>
                </DialogActions>
            </form>
        </Dialog>
    );
}
