import { AssetFileWithDetails } from "@/app/types/AssetFileWithDetails";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface HeaderBoxProps {
    picture?: AssetFileWithDetails;
    title?: string;
    text?: string;
    color: string;
    alt?: string;
}

export default function HeaderBoxDesktop(props: HeaderBoxProps) {

    const imageBox =
        (
            <Box
                overflow={"hidden"}
                position={"relative"}
                borderRadius={"40px"}
                height="340px"
                width="416px">
                {props.picture ? (
                    <Image
                        src={`https:${props.picture.fields.file.url}`}
                        alt={props.alt ?? "pic"}
                        layout="fill"
                        objectFit="cover"
                    />
                ) : (
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: props.color
                        }}
                    />)}
            </Box>
        )

    const textBox = (
        <Box
            overflow={"hidden"}
            position={"relative"}
            borderRadius={"40px"}
            height="340px"
            width="416px"
        >

            <Box
                width={"100%"}
                height={'100%'}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                sx={{
                    backgroundColor: props.color
                }}
            >
                <Typography px={"20px"} variant="h5">{props.title}</Typography>
                <Typography px={"20px"}>{props.text}</Typography>
            </Box>
        </Box>
    );

    if (props.picture) {
        return imageBox;
    }
    return textBox;
}