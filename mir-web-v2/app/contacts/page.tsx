import { Box } from "@mui/material";
import ContactsCover from "./cover/cover";
import ContactsContact from "./contact";
import ContactsGetInTouch from "./getInTouch";
import Footer from "../components/footer/footer";
import ContactsNewsletter from "./newsletter";

export default function Contacts(){
    return(
        <Box >
            <ContactsCover />
            <ContactsContact />
            <ContactsGetInTouch />
            <ContactsNewsletter />
            <Footer />
        </Box>
    )
}