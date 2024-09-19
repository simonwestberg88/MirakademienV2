import { Box, Link, Typography } from "@mui/material";

interface NavMenuProps {
    link1: string;
    href1?: string;
    link2?: string;
}
export default function NavMenu(props: NavMenuProps) {
    return (
        <Box sx={{ display: "flex", gap: "32px", pt: "24px", pb: "24px" }}>
            <Link href="/" underline="none" sx={{ fontWeight: 500 }}>Home</Link>
            <Link href={props.href1} underline="none">{props.link1}</Link>
            <Link underline="none">{props.link2}</Link>
        </Box>
    );
}