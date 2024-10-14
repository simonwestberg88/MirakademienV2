import { Box, Typography } from "@mui/material";

interface DisseminationBlockProps {
    facebook?: string;
    linkedIn?: string;
    website?: string;
}

export default function DisseminationBlockMobile(props: DisseminationBlockProps) {
    return (
        <Box display="flex" flexDirection="column" gap="24px" padding="20px">
            <Typography variant="h3">Dissemination</Typography>

            {props.website && (
                <Box display="flex" gap="8px" flexWrap="wrap">
                    <Typography fontWeight={600}>Website</Typography>
                    <Typography>{props.website}</Typography>
                </Box>
            )}

            {props.linkedIn && (
                <Box display="flex" gap="8px" flexWrap="wrap">
                    <Typography fontWeight={600}>LinkedIn</Typography>
                    <Typography >{props.linkedIn}</Typography>
                </Box>
            )}

            {props.facebook && (
                <Box display="flex" gap="8px" flexWrap="wrap">
                    <Typography fontWeight={600}>Facebook</Typography>
                    <Typography>{props.facebook}</Typography>
                </Box>
            )}
        </Box>
    );
}
