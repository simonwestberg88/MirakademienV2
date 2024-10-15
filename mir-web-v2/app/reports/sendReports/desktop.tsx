"use client"
import theme from "@/theme";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function ReportsSendDesktop() {

    return (
        <Box sx={{ pt: "112px", maxWidth: "768px", display: "flex", flexDirection: "column", gap: "16px", pl: "64px", pr: "64px" }}>
            <Typography variant="h5">Select the reports you are interested in, enter your email, and we will send them to your email address.</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "16px" }}>
                <TextField
                    placeholder="Your email here"
                    sx={{
                        backgroundColor: "#EDE6D4",
                        borderRadius: "30px",
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "30px",
                            height: "48px"
                        },
                        height: "48px"
                    }}
                    variant="outlined"
                />
                <Button variant="contained"
                    sx={{
                        borderRadius: '30px',
                        color: theme.palette.background.default,
                        background: "#199DEA",
                        fontSize: theme.typography.body1.fontSize,
                        lineHeight: theme.typography.body1.lineHeight,
                        fontFamily: theme.typography.body1.fontFamily,
                        textTransform: "none",
                        height: "48px"
                    }}>Send me reports</Button>
            </Box>
        </Box>
    );
}