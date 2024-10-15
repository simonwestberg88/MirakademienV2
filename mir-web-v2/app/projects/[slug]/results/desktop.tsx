import { Box, Typography } from "@mui/material";
import DoneAllIcon from '@mui/icons-material/DoneAll';

interface ResultsBlockProps {
    reserachResults: string;
    description: string;
}

export default function ResultsBlockDesktop(props: ResultsBlockProps) {
    const results = props.reserachResults.split(",");
    return (
        <Box display="flex" flexDirection="column" pl="64px" pr="64px" pt="112px">
            <Typography variant="h3">Research results</Typography>
            <Box display="flex" flexDirection="row" flexWrap="wrap">
                {results.map((item, index) => (
                    <Box display="flex" flexDirection="row" flex={1} key={index} gap="48px" minWidth="405px" pt="80px">
                        <DoneAllIcon />
                        <Typography fontWeight={500}>{item}</Typography>
                    </Box>
                )
                )}
            </Box>
            <Typography pt="80px" fontWeight={500}>{props.description}</Typography>
        </Box>
    )
}