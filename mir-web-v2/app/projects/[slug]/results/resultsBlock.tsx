"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ResultsBlockDesktop from "./desktop";
import ResultsBlockMobile from "./mobile";

interface ResultsBlockProps {
    reserachResults: string;
    description: string;
}

export default function ResultsBlock(props: ResultsBlockProps) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<ResultsBlockDesktop reserachResults={props.reserachResults} description={props.description} />) : (
                <ResultsBlockMobile reserachResults={props.reserachResults} description={props.description} />
            )}
        </Box>
    );
}