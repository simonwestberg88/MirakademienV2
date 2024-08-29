import Image from "next/image";
import styles from "./page.module.css";
import { Box, listItemSecondaryActionClasses } from "@mui/material";
import Footer from "@/app/components/footer";
import HomeDei from "@/app/components/home/dei";
import HomeWelcome from "@/app/components/home/welcome";
import HomeNews from "@/app/components/home/news";
import HomeClientStories from "@/app/components/home/client_stories";
import HomeTeam from "./components/home/team";
import { ContentfulClient } from "@/app/lib/client";
import { TeamMember } from "@/app/types/TeamMember";
import { ClientStory } from "@/app/types/ClientStory";
import { Blog } from "./types/Blog";
import HomeBlog from "./components/home/blog";

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
    content_type: "clientStories",
    limit: 2
  })

  const stories = storyResponse.items.map(item => ({
    client: item.fields.client,
    review: item.fields.review,
    rating: item.fields.rating
  } as ClientStory));

  const blogResponse = await contentfulClient.getEntries<Blog>({
    content_type: "blog",
    limit: 3,
    order: ['-fields.date']
  })

  const blogPosts = blogResponse.items.map(item => ({
    autor: item.fields.author,
    coverImage: item.fields.coverImage,
    date: item.fields.date,
    description: item.fields.description,
    post: item.fields.post,
    slug: item.fields.slug,
    title: item.fields.title
  } as Blog))

  console.log(blogPosts[0].description)

  return (
    <Box sx={{ backgroundColor: "rgba(237, 230, 212, 0.5)" }}>
      <HomeDei />
      <HomeWelcome />
      <HomeTeam teamMembers={teamMembers} />
      <HomeClientStories stories={stories}/>
      <HomeNews />
      <HomeBlog posts={blogPosts} />
      <Box>
        <Footer></Footer>
      </Box>
    </Box>
  );
}
