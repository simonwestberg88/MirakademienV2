"use client"
import { Box, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import ContactInfo from "./contactInfo";
import ContactForm from "./contactForm";


export default function ContactsGetInTouch() {
    return (
        <Box sx={{ mr: "64px", ml: "64px", pt: "122px" }}>
            <ContactInfo />
            <ContactForm />
        </Box>
    )
}