import { Box } from "@mui/material";
import Posts from "../posts/posts";
import { Blog } from "@/app/types/Blog";

interface CategoriesProps {
    categories: string[];
    posts: Blog[];
}

export default function CategoriesDesktop({ categories, posts }: CategoriesProps) {
    return (
        <Box display={"flex"} flexDirection={"column"} gap={"80px"} pt="64px">
            <Posts categories={categories} posts={posts} />
        </Box>
    );
}