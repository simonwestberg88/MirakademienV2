import { Box, Typography } from "@mui/material";
import MirButton from "../../mir-button";
import Image from "next/image";
import { useState } from "react";
import ContactForm from "../../dialogs/contact/contact-form";

export default function DeiMobile() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box >
            <Box key="main1" padding="20px">
                <Box display="flex" flexDirection="column" gap="20px">
                    <Typography variant="h1">We Foster Diversity and Inclusion</Typography>
                    <Typography variant='body1'>
                        At MIR Akademien, we believe in fostering diversity and inclusion. Our commitment to equity drives everything we do, ensuring fairness and justice in every aspect of our work.
                    </Typography>
                    <MirButton sx={{ width: "160px" }} variant='contained'
                        onClick={handleClickOpen}>Contact us
                    </MirButton>
                    <ContactForm open={open} handleClose={handleClose} />
                    <Box key="v2"
                        display="flex" width="100%" gap="16px" pt="20px">
                        <Box key="img1"
                            flex={1}
                            display="flex"
                            flexDirection="column"
                            gap="16px"
                        >
                            <Image src="/home/dei/a1.png" width={320} height={170} alt="a1" style={{ maxWidth: '100%', height: 'auto' }} />
                            <Image src="/home/dei/a2.png" width={320} height={340} alt="a2" style={{ maxWidth: '100%', height: 'auto' }} />
                            <Image src="/home/dei/a3.png" width={320} height={340} alt="a3" style={{ maxWidth: '100%', height: 'auto' }} />
                        </Box>
                        <Box key="img2"
                            flex={1}
                            display="flex"
                            flexDirection="column"
                            gap="16px"
                        >
                            <Image src="/home/dei/b1.png" width={320} height={340} alt="b1" style={{ maxWidth: '100%', height: 'auto' }} />
                            <Image src="/home/dei/b2.png" width={320} height={340} alt="b2" style={{ maxWidth: '100%', height: 'auto' }} />
                            <Image src="/home/dei/b3.png" width={320} height={170} alt="b3" style={{ maxWidth: '100%', height: 'auto' }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}