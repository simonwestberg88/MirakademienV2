import { Box } from "@mui/material";
import ContactsCover from "./cover/cover";
import ContactsContact from "./contact/contact";
import ContactsNewsletter from "./newsletter/newsletter";
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