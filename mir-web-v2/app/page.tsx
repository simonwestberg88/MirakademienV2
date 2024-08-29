import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import Footer from "@/app/components/footer";
import HomeDei from "@/app/components/home/dei";
import HomeWelcome from "@/app/components/home/welcome";
import HomeNews from "@/app/components/home/news";
import HomeClientStories from "@/app/components/home/client_stories";
import HomeTeam from "./components/HomeTeam";
import { ContentfulClient } from "@/app/lib/client";
import { TeamMember } from "@/types/TeamMember";

export default async function Home() {

  const contentfulClient = ContentfulClient.getClient();
  const entries = await contentfulClient.getEntries<TeamMember>({
    content_type: 'team',
  });
  const teamMembers = entries.items.map(item => ({
    name: item.fields.name,
    picture: item.fields.picture,
    position: item.fields.position,
    email: item.fields.email,
    responsibility: item.fields.responsibility,
    expertise: item.fields.expertise
  } as TeamMember))

  console.log(teamMembers);

  return (
    <Box sx={{ backgroundColor: "rgba(237, 230, 212, 0.5)" }}>
      <HomeDei />
      <HomeWelcome />
      <HomeTeam teamMembers={teamMembers} />
      <HomeClientStories />
      <HomeNews />
      <Box>
        <Footer></Footer>
      </Box>
    </Box>
  );
}
