import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, TextField, Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import MirButton from "../../mir-button";
import ContactFormDesktop from "./desktop";
import ContactFormMobile from "./mobile";

interface ContactFormProps {
    open: boolean;
    handleClose: () => void;
}

export interface ContactFormSharedProps {
    open: boolean;
    handleClose: () => void;
    handleSubmit: (event: React.FormEvent) => Promise<void>;
    contactName: string;
    setName: (value: string) => void;
    contactEmail: string;
    setEmail: (value: string) => void;
    contactFormMessage: string;
    setMessage: (value: string) => void;
    statusMessage: string | null;
}

export default function ContactForm({ open, handleClose }: ContactFormProps) {
    const [contactName, setName] = useState("");
    const [contactEmail, setEmail] = useState("");
    const [contactFormMessage, setMessage] = useState("");
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

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
            {isDesktop ? (<ContactFormDesktop open={open}
                    handleClose={handleClose}
                    handleSubmit={handleSubmit}
                    contactName={contactName}
                    setName={setName}
                    contactEmail={contactEmail}
                    setEmail={setEmail}
                    contactFormMessage={contactFormMessage}
                    setMessage={setMessage}
                    statusMessage={statusMessage}
            />) : (
                <ContactFormMobile 
                open={open}
                    handleClose={handleClose}
                    handleSubmit={handleSubmit}
                    contactName={contactName}
                    setName={setName}
                    contactEmail={contactEmail}
                    setEmail={setEmail}
                    contactFormMessage={contactFormMessage}
                    setMessage={setMessage}
                    statusMessage={statusMessage}
                />
            )}
        </Box>

    );
} 
