import { Box, Link, List, ListItem, Typography } from "@mui/material";
import MirButton from "../../components/mir-button";

export default function WritingProjectApplication() {

    return (
        <Box sx={{ pt: "112px" }}>
            <Box display="flex">
                <Typography flex={1.5} variant="h3">Writing a Successful Transnational Project Application</Typography>
                <Typography flex={2}>Welcome to the course &quot;Writing a Successful Application,&quot; designed for those who want to craft effective proposals for international projects such as Erasmus, JUST, CERV, and other programs. Our course leaders have written over 300 applications with a success rate of 70%. This course is tailored to equip you with the skills needed to formulate a concrete idea, set goals and priorities that support the idea, and describe methodology and plans with quantitative and qualitative indicators. Additionally, you will learn the best ways to outline project management methods and quality assurance.</Typography>
            </Box>
            <Box sx={{ pt: "112px", display: "flex", flexDirection: "column", gap: "24px" }}>
                <Typography variant="h5">
                    Course Objectives
                </Typography>
                <Box>
                    <List sx={{ listStyleType: "disc", pl: 4 }}>
                        <ListItem sx={{ display: "list-item", padding: "4px 0" }}>
                            Provide participants with the knowledge to write successful applications for international projects
                        </ListItem>
                        <ListItem sx={{ display: "list-item", padding: "4px 0" }}>
                            Teach participants how to formulate a concrete idea and set supportive goals and priorities
                        </ListItem>
                        <ListItem sx={{ display: "list-item", padding: "4px 0" }}>
                            Equip participants with the skills to describe methodology and plans using quantitative and qualitative indicators
                        </ListItem>
                        <ListItem sx={{ display: "list-item", padding: "4px 0" }}>
                            Instruct participants on the best practices for describing project management methods and quality assurance
                        </ListItem>
                        <ListItem sx={{ display: "list-item", padding: "4px 0" }}>
                            Advise on how to build successful partnerships and calculate relevant budget
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Box sx={{ pt: "112px", display: "flex", flexDirection: "column", gap: "24px" }}>
                <Typography variant="h5">
                    Course Content
                </Typography>
                <Typography sx={{ fontWeight: 600 }}>A one-day training divided into three main areas:</Typography>
                <Box>
                    <List sx={{ listStyleType: "number", pl: 2 }}>
                        <ListItem sx={{ display: "list-item", padding: "4px 0" }}>
                            Formulating a concrete idea
                        </ListItem>
                        <ListItem sx={{ display: "list-item", padding: "4px 0" }}>
                            Setting goals and priorities
                        </ListItem>
                        <ListItem sx={{ display: "list-item", padding: "4px 0" }}>
                            Describing methodology and plans with indicators
                        </ListItem>
                        <ListItem sx={{ display: "list-item", padding: "4px 0" }}>
                            Project management and quality assurance
                        </ListItem>
                        <ListItem sx={{ display: "list-item", padding: "4px 0" }}>
                            Building successful partnerships
                        </ListItem>
                        <ListItem sx={{ display: "list-item", padding: "4px 0" }}>
                            Calculating relevant budgets
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Box sx={{ pt: "112px", display: "flex", flexDirection: "column", gap: "24px" }}>
                <Typography variant="h5">
                    What you get
                </Typography>
                <Typography >One-day training with complete course materials, including PowerPoints with theory, exercises, and discussion questions that you can use directly. This course will provide you with the opportunity to work with actual application forms from last year&apos;s calls, deepening your understanding of how to craft successful applications.</Typography>

                <Box display="flex" gap="4px">
                    <Typography fontWeight="600">Language of instruction: </Typography>
                    <Typography> Swedish</Typography>
                </Box>
            </Box>
            <Box sx={{ pt: "112px", display: "flex", flexDirection: "column", gap: "24px" }}>
                <Typography variant="h5">
                    Price
                </Typography>
                <List sx={{ listStyleType: "disc", pl: 4}}>
                    <ListItem sx={{ display: "list-item", padding: "4px 0" }}>
                        For groups between 4 and 7 individuals: 73,500 SEK excluding VAT per day
                    </ListItem>
                    <ListItem sx={{ display: "list-item", padding: "4px 0" }}>
                        Per individual, provided there is a group of at least 3 people: 25,500 SEK
                    </ListItem>
                </List>
                <Box display="flex" gap="4px">
                    <Typography fontWeight="600">Email:</Typography>
                    <Typography>info@mirakademien.com</Typography>
                </Box>
                <MirButton sx={{ width: "128px" }}>Sign in</MirButton>
            </Box>
        </Box>
    );
}