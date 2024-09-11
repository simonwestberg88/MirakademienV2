import { Asset, EntrySkeletonType } from "contentful";
import { Document } from '@contentful/rich-text-types';

export interface News extends EntrySkeletonType  {
    title: string;
    cover: Asset;
    description: string;
    tags: string[];
    slug: string;
    author: string;
    date: string;
    post: Document;
    timeToRead: string;
    authorImage: Asset;
}
