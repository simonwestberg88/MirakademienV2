import { Box } from "@mui/material";
import ContactsCover from "./cover";
import ContactsContact from "./contact";

export default function Contacts(){
    return(
        <Box>
            <ContactsCover />
            <ContactsContact />
        </Box>
    )
}