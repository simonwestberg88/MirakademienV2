import { Box, Typography } from "@mui/material";
import NavMenu from "../components/nav-menu";

export default function PrivacyPolicyDesktop() {
    return (
        <Box display="flex" flexDirection="column" ml="64px" mr="64px">
            <NavMenu link1="Privacy policy" />
            <Box display="flex" flexDirection="column" pt="112px" width="100%" alignItems="center">
                <Box display="flex" flexDirection="column" pt="112px" maxWidth="768px">
                    <Box display="flex" flexDirection="column" gap="64px" maxWidth="768px" alignItems="flex-start">
                        <Typography variant="h3">Privacy policy</Typography>
                        <Typography>
                        Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}