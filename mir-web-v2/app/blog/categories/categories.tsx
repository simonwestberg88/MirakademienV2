"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import CategoriesDesktop from "./desktop";
import CategoriesMobile from "./mobile";
import { Blog } from "@/app/types/Blog";
interface CategoriesProps{
    categories: string[];
    posts: Blog[];
}

export default function Categories({categories, posts}: CategoriesProps ){
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<CategoriesDesktop categories={categories} posts={posts} />) : (
            <CategoriesMobile categories={categories} posts={posts} />
        )}
        </Box>

    );
}