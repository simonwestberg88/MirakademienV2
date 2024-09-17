"use client"
import { Box, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import ContactInfo from "./contactInfo";
import ContactForm from "./contactForm";


export default function ContactsGetInTouch() {
    return (
        <Box sx={{ mr: "64px", ml: "64px", pt: "122px", display: "flex", flexDirection: "row", gap: "80px" }}>
            <Box sx={{flex: 1}}>
                <ContactInfo />
            </Box>
            <Box sx={{flex: 1}}>
                <ContactForm />
            </Box>
        </Box>
    )
}