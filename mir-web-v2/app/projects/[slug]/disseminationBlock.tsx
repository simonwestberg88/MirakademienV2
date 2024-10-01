import { Box, Typography } from "@mui/material";

interface DisseminationBlockProps {
    facebook?: string;
    linkedIn?: string;
    website?: string;
}

export default function DisseminationBlock(props: DisseminationBlockProps) {
    return (
        <Box display="flex" flexDirection="column" gap="24px">
            <Typography variant="h3">Dissemination</Typography>

            {props.website && (
                <Box display="flex" >
                    <Typography fontWeight={600} width="250px">Website</Typography>
                    <Typography>{props.website}</Typography>
                </Box>
            )}

            {props.linkedIn && (
                <Box display="flex" >

                    <Typography fontWeight={600} width="250px">LinkedIn</Typography>
                    <Typography>{props.linkedIn}</Typography>
                </Box>
            )}

            {props.facebook && (
                <Box display="flex" >
                    <Typography fontWeight={600} width="250px">Facebook</Typography>
                    <Typography>{props.facebook}</Typography>
                </Box>
            )}
        </Box>
    );
}
