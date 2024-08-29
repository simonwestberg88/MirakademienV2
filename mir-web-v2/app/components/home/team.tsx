import { TeamMember } from '@/app/types/TeamMember';
import { Box, Typography } from '@mui/material';
import TeamCard from './cards/team_card';

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
            <Box sx={{display: "flex", flexWrap: "wrap", rowGap: "96px", justifyContent: "center", pt: "96px"}}>
                {teamMembers.map((member) => (
                    <TeamCard key={member.name} member={member} />
                ))}
            </Box>
        </Box>
    );
}
