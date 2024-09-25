"use client";
import { Button, ButtonProps, useTheme } from "@mui/material";

export default function MirButton(props: ButtonProps) {
    const theme = useTheme();

    return (
        <Button
            {...props}
            sx={{
                borderRadius: '30px',
                background: props.variant === 'contained' ? "#199DEA" : undefined, // Only apply background for 'contained' variant
                fontSize: theme.typography.body1.fontSize,
                lineHeight: theme.typography.body1.lineHeight,
                fontFamily: theme.typography.body1.fontFamily,
                textTransform: "none",
                height: "48px",
                ...props.sx,  // Allow overriding styles via props.sx
            }}
        >
            {props.children}
        </Button>
    );
}
