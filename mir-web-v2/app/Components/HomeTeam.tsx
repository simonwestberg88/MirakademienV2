// app/components/HomeTeam.tsx
import { ContentfulClient } from '@/Contentful/client';
import { TeamMember } from '@/Contentful/ITeamMember';
import { Box, Typography } from '@mui/material';

export default async function HomeTeam(teamMembers:TeamMember[]) {
  try {
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
        {/* Pass data to Client Component */}
      </Box>
    );
  } catch (error) {
    console.error('Error fetching team members:', error);
    return (
      <Box sx={{ pt: '112px', px: '64px', textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          Meet Our Team
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Unable to fetch team members at this time.
        </Typography>
      </Box>
    );
  }
}
