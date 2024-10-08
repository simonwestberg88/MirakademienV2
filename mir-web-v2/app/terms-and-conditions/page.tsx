import { Box, Typography, List, ListItem } from "@mui/material";
import Footer from "../components/footer";
import NavMenu from "../components/nav-menu";

export default function TermsOfService() {
    return (
        <Box>

            <Box pl="64px" pr="64px">
                <NavMenu link1="Terms and Conditions" />
                <Box display="flex" flexDirection="column" pt="112px" width="100%" alignItems="center">
                    <Box display="flex" flexDirection="column" gap="64px" maxWidth="768px">
                        <Typography variant="h1">Terms and Conditions</Typography>
                        <List>
                            <ListItem>
                                <Typography>
                                    <strong>1. Introduction: </strong>
                                    These general terms and conditions (&quot;Terms&quot;) govern your use of the website https://mirakademien.com (&quot;Website&quot;). By visiting or using the Website, you agree to these Terms. If you do not accept the Terms, please do not use the Website.
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Typography>
                                    <strong>2. Use of the Website: </strong>
                                    The Website is available to all users and does not require you to create an account. You agree to use the Website only for lawful purposes and in a manner that does not infringe on anyone else&apos;s rights or restrict or inhibit anyone else&apos;s use and enjoyment of the Website.
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Typography>
                                    <strong>3. Intellectual Property: </strong>
                                    The content on the Website, including but not limited to text, graphics, logos, images, and software, belongs to MIR Akademien or its licensors and is protected by intellectual property laws. You may not copy, reproduce, distribute, publish, display, perform, modify, create derivative works from, transmit, or exploit any of the content without written permission from MIR Akademien.
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Typography>
                                    <strong>4. Limitation of Liability: </strong>
                                    MIR Akademien is not liable for any direct, indirect, incidental, consequential, or special damages arising from or in connection with your use of or inability to use the Website or its content.
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Typography>
                                    <strong>5. Links to Third-Party Websites: </strong>
                                    The Website may contain links to other websites owned and operated by third parties. These links are provided for your convenience only and do not imply endorsement of such websites or any responsibility for their content. You visit such linked websites at your own risk.
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Typography>
                                    <strong>6. Changes to the Terms: </strong>
                                    MIR Akademien reserves the right to modify these Terms at any time. Such changes take effect immediately upon being posted on the Website. Your continued use of the Website following such changes indicates your acceptance of the new Terms.
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Typography>
                                    <strong>7. Governing Law and Dispute Resolution: </strong>
                                    These Terms are governed by and construed in accordance with the laws of Sweden. Any disputes arising in connection with these Terms shall be finally settled by Swedish courts.
                                </Typography>
                            </ListItem>

                            <ListItem sx={{ display: 'block' }}>
                                <Typography>
                                    <strong>8. Contact Information: </strong>
                                    If you have any questions about these Terms, please contact us at:
                                </Typography>
                                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                                        <Typography><strong>Email:</strong> info@mirakademien.com</Typography>
                                    </ListItem>
                                </List>
                            </ListItem>

                            <ListItem>
                                <Typography>
                                    By using our Website, you fully accept these Terms.
                                </Typography>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
}
