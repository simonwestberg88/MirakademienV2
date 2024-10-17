import { Box } from "@mui/material";
import HomeDei from "@/app/components/home/dei";
import HomeWelcome from "@/app/components/home/welcome";
import HomeTeam from "./components/home/team";
import { ContentfulClient } from "@/app/lib/client";
import { TeamMember } from "@/app/types/TeamMember";
import { ClientStory } from "@/app/types/ClientStory";
import { Blog } from "./types/Blog";
import { News } from "./types/news";
import ClientStories from "./components/home/client-stories/client-stories";
import HomeNews from "./components/home/news/news";
import HomeBlog from "./components/home/blog/blog";
import HomeConnect from "./components/home/connect/connect";

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
    author: item.fields.author,
    coverImage: item.fields.coverImage,
    date: item.fields.date,
    description: item.fields.description,
    post: item.fields.post,
    slug: item.fields.slug,
    title: item.fields.title,
  } as Blog))

  const newsResponse = await contentfulClient.getEntries<News>({
    content_type: "news",
    limit: 3,
    order: ['-fields.date']
  });

  const news = newsResponse.items.map(item => ({
    title: item.fields.title,
    cover: item.fields.cover,
    description: item.fields.description,
    tags: item.fields.tags,
    slug: item.fields.slug,
    author: item.fields.author,
    date: item.fields.date,
    post: item.fields.post,
    authorImage: item.fields.authorImage,
    timeToRead: item.fields.timeToRead,
} as News));

  return (
    <Box bgcolor={"rgba(237, 230, 212, 0.5)"} pb="112px">
      <HomeDei />
      <HomeWelcome />
      <HomeTeam teamMembers={teamMembers} />
      <ClientStories stories={stories}/>
      <HomeNews news={news}/>
      <HomeBlog posts={blogPosts} />
      <HomeConnect />
    </Box>
  );
}
