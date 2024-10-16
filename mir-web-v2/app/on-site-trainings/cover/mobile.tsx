import NavMenu from "@/app/components/nav-menu";
import { Box, Typography } from "@mui/material";

export default function CoverMobile() {
    return (
        <Box pl="20px" display="flex" flexDirection="column" gap="24px">
            <NavMenu link1="MIR onsite trainings" />
            <Typography variant="h1">MIR onsite trainings</Typography>
        </Box>
    );
}