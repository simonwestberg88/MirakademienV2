"use client"
import { TeamMember } from '@/app/types/TeamMember';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import TeamDesktop from './team/desktop';
import TeamMobile from './team/mobile';

interface HomeTeamProps {
    teamMembers: TeamMember[];
}

export default function HomeTeam({ teamMembers }: HomeTeamProps) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<TeamDesktop teamMembers={teamMembers} />) : (
                <TeamMobile teamMembers={teamMembers} />
            )}
        </Box>

    );
}
