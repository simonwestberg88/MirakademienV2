import { Asset, EntrySkeletonType } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface Blog extends EntrySkeletonType  {
    title: string;
    post: Document;
    date: string;
    author: string;
    authorImage: Asset;
    slug: string;
    description: string;
    tags: string[];
    coverImage: Asset;
    timeToRead: string;
}
