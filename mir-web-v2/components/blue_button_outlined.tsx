import * as React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';


export default function BlueButtonOutlined({ text = "Contained", ...props }) {
    const theme = useTheme();
    return (
        <Button
        variant='outlined'
        color="info"
            sx={{
                borderRadius: 40,
                fontSize: theme.typography.body1.fontSize,
                lineHeight: theme.typography.body1.lineHeight,
                fontFamily: theme.typography.body1.fontFamily,
                textTransform: "none"
            }}
        >{text}</Button>
    );
}