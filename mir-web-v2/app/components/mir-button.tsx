"use client"
import { Button, ButtonProps, useTheme } from "@mui/material";

export default function MirButton(props: ButtonProps) {
    const theme = useTheme();

    return (
        <Button
            variant="contained"
            {...props}
            sx={{
                borderRadius: '30px',
                background: "#199DEA",
                fontSize: theme.typography.body1.fontSize,
                lineHeight: theme.typography.body1.lineHeight,
                fontFamily: theme.typography.body1.fontFamily,
                textTransform: "none",
                height: "48px",
                ...props.sx,
            }}
        >
            {props.children}
        </Button>
    );
}