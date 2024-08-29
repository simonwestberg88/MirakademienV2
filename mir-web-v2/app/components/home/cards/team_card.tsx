import { TeamMember } from '@/types/TeamMember';
import { Box, Typography } from '@mui/material';
import Image from 'next/image'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

interface TeamCardProps {
    member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
    const imageUrl = member.picture.fields.file?.url as string;
    return (
        <Box sx={{ width: "405px", display: "flex", flexDirection: "column", gap: "24px", alignItems: "center", justifyContent: "center" }}>
            <Image
                src={`https:${imageUrl}`} alt={member.contentTypeId}
                width={204}
                height={220}
            ></Image>
            <Box>
                <Typography sx={{ fontWeight: 700 }}>{member.name}</Typography>
                <Typography>{member.position}</Typography>
            </Box>
            <Box>
                <Typography variant='body2' sx={{ fontWeight: 700 }}>Area of expertise:</Typography>
                <Typography variant='body2'>{member.expertise}</Typography>
            </Box>
            <Box>
                <Typography variant='body2' sx={{ fontWeight: 700 }}>Area of responsibility:</Typography>
                <Typography variant='body2'>{member.responsibility}</Typography>
            </Box>
            <Box sx={{display: "flex", gap:"8px"}}>
                <MailOutlineIcon />
                <Typography>{member.email}</Typography>
            </Box>
        </Box>
    );
}
