import { Box, Typography } from '@mui/material';
import { Blog } from '../../types/Blog';
import { ContentfulClient } from '../../lib/client';
import NavMenu from '@/app/components/nav-menu';
import LinkIcon from '@mui/icons-material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import MirButton from '@/app/components/mir-button';
import Footer from '@/app/components/footer';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const contentfulClient = ContentfulClient.getClient();

    const blogResponse = await contentfulClient.getEntries<Blog>({
        content_type: "blog",
        'fields.slug': params.slug,
        limit: 1,
    });
    let blogPosts = blogResponse.items.map(item => ({
        title: item.fields.title,
        post: item.fields.post,
        date: item.fields.date,
        author: item.fields.author,
        authorImage: item.fields.authorImage,
        slug: item.fields.slug,
        description: item.fields.description,
        tags: item.fields.tags,
        coverImage: item.fields.coverImage,
        timeToRead: item.fields.timeToRead,
        category: item.fields.category,
    } as Blog));

    if (!blogResponse.items.length) {
        return {
            notFound: true,
        };
    }

    const post = blogPosts[0];

    const renderOptions = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
                const { file, title, description } = node.data.target.fields;
                const imageUrl = file.url;
                const imageWidth = file.details.image.width;
                const imageHeight = file.details.image.height;

                return (
                    <Image
                        src={`https:${imageUrl}`}
                        alt={title || 'Image'}
                        width={imageWidth}
                        height={imageHeight}
                        style={{ borderRadius: '10px', objectFit: 'cover' }}
                    />
                );
            },
        },
    };

    return (
        <Box>

            <Box sx={{ ml: "64px", mr: "64px" }}>
                <NavMenu link1='Blog' link2={post.title} href1='/blog'></NavMenu>
                <Box display={"flex"} flexDirection={"column"} gap={"80px"}>
                    <Box display={"flex"} flexDirection={"column"} gap={"16px"}>
                        <Box display={"fleX"} flexDirection={"row"} gap={"16px"} alignItems="center">
                            <Typography borderRadius={"20px"} padding={"4px"} pl={"10px"} pr={"10px"} bgcolor={"orange.main"} color={"white"} variant='caption'>{post.category}</Typography>
                            <Typography variant='caption'>{post.timeToRead} read</Typography>
                        </Box>
                        <Typography variant="h1" sx={{ mb: 4 }}>{post.title}</Typography>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} gap={"32px"}>
                        <Box
                            overflow={"hidden"}
                            position={"relative"}
                            borderRadius={"40px"}
                            height="600px"
                        >
                            <Image
                                src={`https:${post.coverImage.fields.file.url}`}
                                alt="cover image"
                                layout="fill"
                                objectFit="cover"
                            />
                        </Box>
                        <Box display="flex" flexDirection="row" justifyContent="space-between" width="100%">
                            <Box display="flex" flexDirection="row" gap={4}>
                                <Box display="flex" flexDirection="column">
                                    <Typography>Written by</Typography>
                                    <Typography fontWeight={500}>{post.author}</Typography>
                                </Box>

                                <Box display="flex" flexDirection="column">
                                    <Typography>Published on</Typography>
                                    <Typography fontWeight={500}>{post.date}</Typography>
                                </Box>
                            </Box>
                            <Box display="flex" gap={1}>
                                <LinkIcon />
                                <LinkedInIcon />
                                <XIcon />
                                <FacebookIcon />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box maxWidth={"768px"} pt={"112px"} mx="auto">
                    {documentToReactComponents(post.post, renderOptions)}
                    <Box key="btmBox" display={"flex"} flexDirection={"column"} gap={"48px"} alignItems="center">
                        <Box display={"flex"} flexDirection={"column"} gap={"16px"} alignItems="center">
                            <Typography fontWeight={500}>Share this post</Typography>
                            <Box alignItems="center">
                                <LinkIcon />
                                <LinkedInIcon />
                                <FacebookIcon />
                            </Box>
                            <Box alignItems="center">
                                {post.tags.map(tag => (
                                    <MirButton>{tag}</MirButton>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Box>

    );
}
