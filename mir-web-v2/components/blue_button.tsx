import * as React from 'react';
import Button from '@mui/material/Button';

export default function BlueButton({ text = "Contained", ...props }) {
    return (
        <Button variant="contained"
            sx={{ borderRadius: '16px' }}>{text}</Button>
    );
}