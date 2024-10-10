import { Box, Typography } from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function TimelineMobile() {
    return (
        <Box pt="112px" >
            <Typography textAlign="center">Inclusion</Typography>
            <Typography textAlign="center" variant="h2">MIR&apos;s Timeline</Typography>
            <Timeline position="right"
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{mb: "48px"}}>
                        <Typography variant="h3">2018</Typography>
                        <Typography variant="body2">Free of charge study circles about human rights for newly arrived migrants</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{mb: "48px"}}>
                        <Typography variant="h3">2018-2020</Typography>
                        <Typography variant="body2">3 mobility projects for members of circles to provide them with an opportunity for internships and study visits abroad</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{mb: "48px"}}>
                        <Typography variant="h3">2020</Typography>
                        <Typography variant="body2">MIR Akademien became a partner of the big EU project for the first time (project DIME)</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{mb: "48px"}}>
                        <Typography variant="h3">2021 - 2022</Typography>
                        <Typography variant="body2">Started offering services in D&I consultancy and training</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{mb: "48px"}}>
                        <Typography variant="h3">2022</Typography>
                        <Typography variant="body2">Established on side project Spotlight</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem >
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography variant="h3">2023 - Current</Typography>
                        <Typography variant="body2">Running European projects, consultancy and training while scaling up by building online platforms development, expanding services variety and providing training credentials
                        </Typography>
                        <Typography variant="body2">
                            I believe that by embracing differences, we forge stronger teams, make better decisions and create spaces where individuals feel seen, heard, and valued.</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    );
}