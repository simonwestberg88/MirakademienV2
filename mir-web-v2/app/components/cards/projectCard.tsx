import { Box } from "@mui/material";
import Image from "next/image";

export default function ProjectCard(){
    return (
        <Box>
            <Image
                src={`https:${imageUrl}`} alt={post.contentTypeId}
                width={405}
                height={240}
            ></Image> 
        </Box>
    );
}