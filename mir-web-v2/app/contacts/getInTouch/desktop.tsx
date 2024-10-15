"use client"
import { Box } from "@mui/material";
import ContactInfo from "../contactInfo/contactInfo";
import ContactForm from "../contactForm/contactForm";


export default function ContactsGetInTouchDesktop() {
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