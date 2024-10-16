import { Box, List, ListItem, Typography } from "@mui/material";
import MirButton from "../../components/mir-button";

export default function CrimePreventingMobile() {

    return (
        <Box display="flex" flexDirection="column" padding="20px"  gap="48px" pt="64px">
            <Typography variant="h3">Crime Precenting Parenting</Typography>
            <Typography>Welcome to the course &quot;Crime Prevention Parenting Support,&quot; an education program for communicators within municipal community orientation and volunteers working with newcomer parents. This course is designed to provide you with the knowledge and tools needed to support parents in matters of youth crime, its causes, and consequences.</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <Typography variant="h5">
                    Course Objectives
                </Typography>
                <Box>
                    <List sx={{ listStyleType: "disc", pl: 4 }}>
                        <ListItem sx={{ display: "list-item", padding: "4px 0" }}>
                            Provide communicators with basic knowledge in universal parenting support with a focus on intercultural parenting support
                        </ListItem>
                        <ListItem sx={{ display: "list-item", padding: "4px 0" }}>
                            Equip communicators with knowledge about youth crime, available support, and resources
                        </ListItem>
                        <ListItem sx={{ display: "list-item", padding: "4px 0" }}>
                            Give parents tools to identify warning signs and support their children in the right way
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <Typography variant="h5">
                    Course Content
                </Typography>
                <Typography sx={{ fontWeight: 600 }}>A one-day training divided into three main areas:</Typography>
                <Box>
                    <List sx={{ listStyleType: "number", pl: 2 }}>
                        <ListItem sx={{ display: "list-item", padding: "4px 0" }}>
                            Provide communicators with basic knowledge in universal parenting support with a focus on intercultural parenting support
                        </ListItem>
                        <ListItem sx={{ display: "list-item", padding: "4px 0" }}>
                            Equip communicators with knowledge about youth crime, available support, and resources
                        </ListItem>
                        <ListItem sx={{ display: "list-item", padding: "4px 0" }}>
                            Give parents tools to identify warning signs and support their children in the right way
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <Typography variant="h5">
                    What you get
                </Typography>
                <Typography >One day training and complete training materials in the form of PowerPoints with theory, exercises, and discussion questions that you can use directly in the classroom. This course will give you the opportunity to deepen your understanding of how to help parents identify warning signs and support their children in the best possible way.</Typography>

                <Box display="flex" gap="4px">
                    <Typography fontWeight="600">Language of instruction: </Typography>
                    <Typography> Swedish</Typography>
                </Box>
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", gap: "24px" }}>
                <Typography variant="h5">
                    Price
                </Typography>
                <List sx={{ listStyleType: "disc", pl: 4 }}>
                    <ListItem sx={{ display: "list-item", padding: "4px 0" }}>
                        Per group between 4 and 12 individuals - 45,500 SEK excluding VAT per day
                    </ListItem>
                    <ListItem sx={{ display: "list-item", padding: "4px 0" }}>
                        Per individual, provided there is a group of at least 4 people: 12,500 SEK
                    </ListItem>
                </List>
                <Box display="flex" gap="4px">
                    <Typography fontWeight="600">Email:</Typography>
                    <Typography>info@mirakademien.com</Typography>
                </Box>
                <MirButton variant="contained" sx={{ width: "128px" }}>Sign in</MirButton>
            </Box>
        </Box >
    );
}