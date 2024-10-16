import { Box } from "@mui/material";
import WritingProjectApplication from "./writing-project-application/writing-project-application";
import CrimePreventing from "./crime-preventing/crime-preventing";
import Cover from "./cover/cover";

export default function OnSiteTrainings() {

    return (
        <Box>
            <Cover />
            <CrimePreventing />
            <WritingProjectApplication />
        </Box>
    );
}