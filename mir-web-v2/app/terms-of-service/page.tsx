import { Box, Typography } from "@mui/material";
import Footer from "../components/footer";
import NavMenu from "../components/nav-menu";

export default function TermsOfService() {
    return (
        <Box pl="64px" pr="64px">
            <NavMenu link1="Terms and Conditions" />
            <Box display="flex" flexDirection="column" width="100%" alignItems="center" pt="112px">
                <Box display="flex" flexDirection="column" gap="64px" maxWidth="768px">
                    <Typography variant="h1">Terms and Conditions</Typography>
                    <Typography whiteSpace="pre-line">
                        Date: July 30, 2024
                        {"\n"} <strong> 1. Introduction </strong> These general terms and conditions ("Terms") govern your use of the website https://mirakademien.com ("Website"). By visiting or using the Website, you agree to these Terms. If you do not accept the Terms, please do not use the Website.
                        {"\n"}
                        {"\n"}<strong>2. Use of the Website</strong> The Website is available to all users and does not require you to create an account. You agree to use the Website only for lawful purposes and in a manner that does not infringe on anyone else's rights or restrict or inhibit anyone else's use and enjoyment of the Website.
                        {"\n"}
                        {"\n"}<strong>3. Intellectual Property</strong> The content on the Website, including but not limited to text, graphics, logos, images, and software, belongs to MIR Akademien or its licensors and is protected by intellectual property laws. You may not copy, reproduce, distribute, publish, display, perform, modify, create derivative works from, transmit, or exploit any of the content without written permission from MIR Akademien.
                        {"\n"}
                        {"\n"}<strong>4. Limitation of Liability</strong> MIR Akademien is not liable for any direct, indirect, incidental, consequential, or special damages arising from or in connection with your use of or inability to use the Website or its content. This includes, but is not limited to, damages for lost profits, business interruption, loss of programs, or other data.
                        {"\n"}
                        {"\n"}<strong>5. Links to Third-Party Websites</strong> The Website may contain links to other websites owned and operated by third parties. These links are provided for your convenience only and do not imply endorsement of such websites or any responsibility for their content. You visit such linked websites at your own risk.
                        {"\n"}
                        {"\n"}<strong>6. Changes to the Terms</strong> MIR Akademien reserves the right to modify these Terms at any time. Such changes take effect immediately upon being posted on the Website. Your continued use of the Website following such changes indicates your acceptance of the new Terms.
                        {"\n"}
                        {"\n"}<strong>7. Governing Law and Dispute Resolution</strong> These Terms are governed by and construed in accordance with the laws of Sweden. Any disputes arising in connection with these Terms shall be finally settled by Swedish courts.
                        {"\n"}
                        {"\n"}<strong>8. Contact Information</strong> If you have any questions about these Terms, please contact us at:
                        {"\n"}
                        {"\n"}<strong>Email:</strong> info@mirakademien.com
                        {"\n"}
                        {"\n"}By using our Website, you fully accept these Terms.

                    </Typography>

                </Box>
            </Box>
            <Footer />
        </Box>
    )
}