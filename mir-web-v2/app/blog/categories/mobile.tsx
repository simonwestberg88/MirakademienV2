import { Box } from "@mui/material";
import Posts from "../posts/posts";
import { Blog } from "@/app/types/Blog";

interface CategoriesProps {
    categories: string[];
    posts: Blog[];
}

export default function CategoriesMobile({ categories, posts }: CategoriesProps) {
    return (
        <Box display={"flex"} flexDirection={"column"} gap={"24px"}>
            <Posts categories={categories} posts={posts} />
        </Box>
    );
}