import { TeamMember } from '@/Contentful/ITeamMember';
import { Box, Typography } from '@mui/material';

interface HomeTeamProps {
    teamMembers: TeamMember[];
  }

export default function HomeTeam({ teamMembers }: HomeTeamProps) {
    return (
        <Box sx={{ pt: '112px', px: '64px', textAlign: 'center' }}>
            <Typography variant="h2" gutterBottom>
                Meet Our Team
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Get to know the talented individuals behind MIR Akademien.
            </Typography>
            <Typography variant="body1" gutterBottom>
                {`We have ${teamMembers.length} team member${teamMembers.length !== 1 ? 's' : ''}.`}
            </Typography>
        </Box>
    );
}
