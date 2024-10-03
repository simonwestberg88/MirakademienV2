import { EntrySkeletonType } from "contentful";
import { Document } from '@contentful/rich-text-types';
import { AssetFileWithDetails } from "./AssetFileWithDetails";

export interface News extends EntrySkeletonType  {
    title: string;
    cover: AssetFileWithDetails;
    description: string;
    tags: string[];
    slug: string;
    author: string;
    authorDescription: string;
    date: string;
    post: Document;
    timeToRead: string;
    authorImage: AssetFileWithDetails;
}
