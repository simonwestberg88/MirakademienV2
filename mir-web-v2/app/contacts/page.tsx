import { Box } from "@mui/material";
import ContactsCover from "./cover";
import ContactsContact from "./contact";
import ContactsGetInTouch from "./getInTouch";
import Footer from "../components/footer/footer";
import ContactsNewsletter from "./newsletter";

export default function Contacts(){
    return(
        <Box sx={{ backgroundColor: "rgba(237, 230, 212, 0.5)" }}>
            <ContactsCover />
            <ContactsContact />
            <ContactsGetInTouch />
            <ContactsNewsletter />
            <Footer />
        </Box>
    )
}