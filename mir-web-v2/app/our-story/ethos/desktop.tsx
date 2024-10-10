
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function EthosDesktop() {
    return (
        <Box sx={{
            pt: "112px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            mr: "64px",
            ml: "64px",
        }}>
            <Box sx={{ rowGapgap: "112px" }}>
                <Typography sx={{ fontWeight: 500 }}>ETHOS</Typography>
                <Typography variant="h2">UBUNTU circle</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <Typography>
                The concept of Ubuntu originates from the Nguni Bantu. The term is often translated as &quot;I am because we are,&quot; or &quot;humanity towards others.&quot;</Typography>
                <Typography>
                    It encapsulates a philosophy from Southern African regions, emphasizing community, sharing, and interdependence. This philosophy forms the foundation of the way communities are structured and how individuals interact within them. It holds a significant place in many African societies where the well-being of the community is considered integral to individual well-being.
                </Typography>
                <Typography>
                    The Ubuntu circle symbolizes unity, diversity and inclusion. It suggests that the community is ever-lasting and complete only when everyone is included and valued.
                </Typography>
                <Typography>
                    It resonates with the core belief where we as individuals are deeply interconnected, and that our success and well-being are tied to the success and well-being of others around us.
                </Typography>
                <Typography>
                    &quotI do believe in personal achievements and growth. But it shall be done in an environment where every member feels genuinely valued and integral to the team&quot;, says MIR Akademien&apos;s CEO and founder, Yevgeniya Averhed.
                </Typography>
                <Typography>
                    This is a culture where collaboration is not just encouraged; it&apos;s the bedrock of how we shall operate.
                </Typography>
                <Typography>
                    &quot;I want our leadership style at MIR Akademien to echo this sentiment, led by empathy and inclusion, prioritizing emotional intelligence&quot;, says Yevgeniya.
                </Typography>
                <Typography>
                    The opposite of it is a hierarchical culture where the “survival of the fittest” is a value. Ubuntu culture is naturally keeping those team members who follow the same values.
                </Typography>
                <Typography>
                    Ubuntu is chosen as a ground to stand on, deeply influencing the vision of MIR Akademien culture and shaping its mission committed to the development of social innovation and training.
                </Typography>
            </Box>
            <Box sx={{ mt: "112px", display: "flex", flexDirection: "column", gap: "112px" }}>
                <Box key="vison"
                    sx={{
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: "48px"
                    }}>
                    <Image
                        src="/our-story/vision.png"
                        alt="vision"
                        width={370}
                        height={400}
                    />
                    <Typography key="vision-para">
                        Ubuntu promotes ethical leadership that values collective success and fosters a trusting, open communication environment. By integrating Ubuntu, MIR Akademien enhances team collaboration and ensures all employees feel valued, seen and heard, contributing significantly to the organization’s goals.
                    </Typography>
                </Box>
                <Box key="mission"
                    sx=
                    {{
                        display: "flex",
                        gap: "48px",
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography>
                            MIR Akademien applies Ubuntu in its external mission through training and development of social innovation, aiming to build communities where each person&apos;s worth is upheld.
                        </Typography>
                        <Typography>
                            Our projects and initiatives are designed with the individual in the community at heart. We strive to create solutions that are not only effective in addressing immediate challenges but also empowering people to thrive.
                        </Typography>
                        <Typography>
                            This approach to social innovation is crucial as it ensures that the solutions we develop are both inclusive and beneficial to all community members.
                        </Typography>
                        <Typography>
                            Our training programs are an extension of this belief, aimed at empowering individuals not just to improve their own lives but also to become catalysts for widespread community growth and well-being.
                        </Typography>
                    </Box>
                    <Image
                        src="/our-story/mission.png"
                        alt="vision"
                        width={371}
                        height={398}
                    />
                </Box>
            </Box>
        </Box>);
}