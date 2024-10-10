import { Box, Typography, Link } from "@mui/material";
import MirButton from "../mir-button";
import NavMenu from "../nav-menu";

interface CoverProps {
    top: string;
    heading: string;
    buttonText: string;
    imgSrc: string;
}
export default function CoverComponentMobile({ top, heading, buttonText, imgSrc: imageSrc }: CoverProps) {
    return (
        <Box>

            <Box pl="20px" pr="20px">
                <NavMenu link1="Our Story" />
            </Box>
            <Box
                sx={{
                    width: '100%', // Set the width of the Box
                    height: "462px", // Set the height of the Box
                    backgroundImage: `url(${imageSrc})`, // Set the background image
                    backgroundSize: 'cover', // Make sure the image covers the entire box
                    backgroundPosition: 'center', // Center the image in the box
                    backgroundRepeat: 'no-repeat', // Prevent the image from repeating
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", pt: "39px", gap: "24px" }}>
                    <Typography textAlign="center" color="white" sx={{ fontWeight: 400 }}>{top}</Typography>
                    <Typography textAlign="center" variant="h2" color="white">{heading}</Typography>
                    <MirButton variant="contained" sx={{width: "160px"}}>{buttonText}</MirButton>
                </Box>
            </Box>
        </Box>
    );
}