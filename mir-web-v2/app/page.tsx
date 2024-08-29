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
import { ClientStory } from "@/types/ClientStory";

export default async function Home() {

  const contentfulClient = ContentfulClient.getClient();
  const teamResponse = await contentfulClient.getEntries<TeamMember>({
    content_type: 'team',
  });
  const teamMembers = teamResponse.items.map(item => ({
    name: item.fields.name,
    picture: item.fields.picture,
    position: item.fields.position,
    email: item.fields.email,
    responsibility: item.fields.responsibility,
    expertise: item.fields.expertise
  } as TeamMember))

  const storyResponse = await contentfulClient.getEntries<ClientStory>({
    content_type: "clientStories"
  })

  const stories = storyResponse.items.map(item => ({
    client: item.fields.client,
    review: item.fields.review,
    rating: item.fields.rating
  }as ClientStory));

  console.log(stories);


  return (
    <Box sx={{ backgroundColor: "rgba(237, 230, 212, 0.5)" }}>
      <HomeDei />
      <HomeWelcome />
      <HomeTeam teamMembers={teamMembers} />
      <HomeClientStories stories={stories}/>
      <HomeNews />
      <Box>
        <Footer></Footer>
      </Box>
    </Box>
  );
}
