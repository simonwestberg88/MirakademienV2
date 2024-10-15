"use client"
import { Box } from "@mui/material";
import ContactInfo from "../contactInfo";
import ContactForm from "../contactForm";


export default function ContactsGetInTouchMobile() {
    return (
        <Box padding="20px">
            <Box sx={{flex: 1}}>
                <ContactInfo />
            </Box>
            <Box sx={{flex: 1}}>
                <ContactForm />
            </Box>
        </Box>
    )
}