import { Box } from "@mui/material";
import ContactsCover from "./cover/cover";
import ContactsContact from "./contact/contact";
import Footer from "../components/footer/footer";
import ContactsNewsletter from "./newsletter";
import ContactsGetInTouch from "./getInTouch/getInTouch";

export default function Contacts(){
    return(
        <Box >
            <ContactsCover />
            <ContactsContact />
            <ContactsGetInTouch />
            <ContactsNewsletter />
        </Box>
    )
}