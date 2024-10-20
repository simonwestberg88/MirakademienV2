import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, TextField, Box, Typography } from "@mui/material";
import MirButton from "../../mir-button";

interface ContactFormProps {
    open: boolean;
    handleClose: () => void;
    handleSubmit: (event: React.FormEvent) => Promise<void>;
}

export default function ContactFormDesktop({ open, handleClose, handleSubmit }: ContactFormProps) {
    const [contactName, setName] = useState("");
    const [contactEmail, setEmail] = useState("");
    const [contactFormMessage, setMessage] = useState("");
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    backgroundColor: "#F6F3EA",
                    borderRadius: "40px",
                    padding: "64px",
                },
            }}
        >
            <Typography variant="h2" textAlign="center">Contact Us</Typography>
            <form onSubmit={handleSubmit}>
                <DialogContent
                    sx={{
                        backgroundColor: "#F6F3EA",
                        borderRadius: "40px",
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
                                value={contactName}
                                onChange={(e) => setName(e.target.value)}
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
                                value={contactEmail}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Box>
                        <Box>
                            <Typography>Message</Typography>
                            <TextField
                                multiline
                                rows={4}
                                fullWidth
                                required
                                sx={{
                                    backgroundColor: "#EDE6D4",
                                    borderRadius: "10px",
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "10px",
                                    },
                                }}
                                placeholder="Type your message..."
                                value={contactFormMessage}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </Box>
                    </Box>
                    {statusMessage && (
                        <Typography
                            variant="body1"
                            color={statusMessage.includes("success") ? "green" : "red"}
                            textAlign="center"
                            marginTop="16px"
                        >
                            {statusMessage}
                        </Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Box width="100%" display="flex" justifyContent="center" gap="8px">
                        <MirButton type="submit" variant="contained" color="primary">
                            Submit
                        </MirButton>
                        <MirButton onClick={handleClose} variant="outlined" color="info">
                            Close
                        </MirButton>
                    </Box>
                </DialogActions>
            </form>
        </Dialog>
    );
} 
