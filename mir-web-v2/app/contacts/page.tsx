import { Box } from "@mui/material";
import ContactsCover from "./cover";
import ContactsContact from "./contact";
import ContactsGetInTouch from "./getInTouch";
import Footer from "../components/footer";

export default function Contacts(){
    return(
        <Box>
            <ContactsCover />
            <ContactsContact />
            <ContactsGetInTouch />
            <Footer />
        </Box>
    )
}