import { Asset, EntrySkeletonType } from 'contentful';
import { Document } from '@contentful/rich-text-types';
import { AssetFileWithDetails } from './AssetFileWithDetails';

export interface Blog extends EntrySkeletonType  {
    title: string;
    post: Document;
    date: string;
    author: string;
    authorImage: AssetFileWithDetails;
    slug: string;
    description: string;
    tags: string[];
    coverImage: AssetFileWithDetails;
    timeToRead: string;
}