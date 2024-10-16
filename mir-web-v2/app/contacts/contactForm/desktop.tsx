import { Box, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import MirButton from "../../components/mir-button";

export default function ContactFormDesktop(){
    return(
        <Box>
                
                <Box key="contact form"
                    sx={{ display: "flex", flexDirection: "column", gap: "24px" }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography>Name</Typography>
                        <TextField
                            placeholder="Your name"
                            sx={{
                                backgroundColor: "#EDE6D4",
                                borderRadius: "10px",
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "10px",
                                },
                            }}
                            variant="outlined"
                        />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography>Email</Typography>
                        <TextField
                            placeholder="Your email"
                            sx={{
                                backgroundColor: "#EDE6D4",
                                borderRadius: "10px",
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "10px",
                                },
                            }}
                            variant="outlined"
                        />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography>Message</Typography>
                        <TextField
                            placeholder="Enter your message..."
                            multiline
                            minRows={4}
                            sx={{
                                backgroundColor: "#EDE6D4",
                                borderRadius: "10px",
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "10px",
                                    resize: "vertical",
                                    overflow: "auto",
                                    padding: "12px",
                                },
                            }}
                            variant="outlined"
                        />
                    </Box>
                    <FormControlLabel
                        control={
                            <Checkbox
                                defaultChecked
                                sx={{
                                    color: "#FF7612", // Default color
                                    '&.Mui-checked': {
                                        color: "#FF7612", // Color when checked
                                    },
                                }}
                            />
                        }
                        label="I accept the Terms"
                    />
                </Box>
                <MirButton variant="contained">Send</MirButton>
            </Box>
    )
}