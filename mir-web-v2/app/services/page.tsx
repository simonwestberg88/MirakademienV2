import { Box } from "@mui/material"; import Footer from "../components/footer/footer";
import CoverComponent from "../components/cover/cover";
import Services123 from "./one-two-three/one-two-three";
import ServiceOnsite from "./on-site/on-site";
import ServiceOnlineCourses from "./online-courses/online-courses";
import ServiceCoaching from "./coaching/coaching";
import ClientStories from "../components/home/client-stories/client-stories";
import { ClientStory } from "../types/ClientStory";
import { ContentfulClient } from "../lib/client";
import ServicesDiscover from "./discover/discover";

export default async function Services() {
    const contentfulClient = ContentfulClient.getClient();

    const storyResponse = await contentfulClient.getEntries<ClientStory>({
        content_type: "clientStories",
        limit: 2
    })

    const stories = storyResponse.items.map(item => ({
        client: item.fields.client,
        review: item.fields.review,
        rating: item.fields.rating
    } as ClientStory));
    return (
        <Box>
            <CoverComponent top="Our Services" heading="Unlock Your Potential" buttonText="Contact Us" imgSrc="/services/cover.png" />
            <Services123 />
            <ServiceOnsite />
            <ServiceOnlineCourses />
            <ServiceCoaching />
            <ClientStories stories={stories}/>
            <ServicesDiscover />
            <Footer />
        </Box>
    );
}