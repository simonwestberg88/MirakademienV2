"use client"
import theme from "@/theme";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function ReportsSendMobile() {

    return (
        <Box sx={{ padding: "20px", pb: "48px", pt: "48px", maxWidth: "768px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <Typography variant="h5">Select the reports you are interested in, enter your email, and we will send them to your email address.</Typography>
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
    );
}