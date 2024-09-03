"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';


export default function BlueButton({ text = "Contained", ...props }) {
    const theme = useTheme();
    return (
        <Button variant="contained"
            sx={{
                borderRadius: '30px',
                color: theme.palette.background.default,
                background: "#199DEA",
                fontSize: theme.typography.body1.fontSize,
                lineHeight: theme.typography.body1.lineHeight,
                fontFamily: theme.typography.body1.fontFamily,
                textTransform: "none"
            }}>{text}</Button>
    );
}