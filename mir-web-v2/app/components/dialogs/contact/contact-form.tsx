import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, TextField, Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import MirButton from "../../mir-button";
import ContactFormDesktop from "./desktop";
import ContactFormMobile from "./mobile";

interface ContactFormProps {
    open: boolean;
    handleClose: () => void;
}

export default function ContactForm({ open, handleClose }: ContactFormProps) {
    const [contactName, setName] = useState("");
    const [contactEmail, setEmail] = useState("");
    const [contactFormMessage, setMessage] = useState("");
    const [statusMessage, setStatusMessage] = useState<string | null>(null); // Status message for success/failure

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: contactEmail, name: contactName, message: contactFormMessage }),
            });

            const result = await response.json();

            if (response.ok) {
                setStatusMessage('Message sent!');
            } else {
                setStatusMessage(result.error || 'Failed to send message');
            }
        } catch (error) {
            setStatusMessage('An error occurred while sending the message');
        }
    };
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<ContactFormDesktop open handleClose={handleClose} handleSubmit={handleSubmit} />) : (
                <ContactFormMobile  open handleClose={handleClose} handleSubmit={handleSubmit}/>
            )}
        </Box>

    );
} 
