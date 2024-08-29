import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import Footer from "@/components/footer";
import HomeDei from "@/components/home/dei";
import HomeWelcome from "@/components/home/welcome";
import HomeNews from "@/components/home/news";
import HomeClientStories from "@/components/home/client_stories";
import HomeTeam from "./Components/HomeTeam";
import { ContentfulClient } from "@/Contentful/client";
import { TeamMember } from "@/Contentful/ITeamMember";

export default async function Home() {

  const contentfulClient = ContentfulClient.getClient();
  const entries = await contentfulClient.getEntries<TeamMember>({
    content_type: 'teamMembers',
  });
  const teamMembers = entries.items.map(item => ({
    description: item.fields.description,
    name: item.fields.name,
    picture: item.fields.picture,
    position: item.fields.position,
    facebook: item.fields.facebook,
    linkedIn: item.fields.linkedIn
  } as TeamMember))

  console.log(teamMembers);

  return (
    <Box sx={{ backgroundColor: "rgba(237, 230, 212, 0.5)" }}>
      <HomeDei />
      <HomeWelcome />
      {/* <HomeTeam teamMembers={teamMembers} /> */}
      <HomeClientStories />
      <HomeNews />
      <Box>
        <Footer></Footer>
      </Box>
    </Box>
  );
}
