import { Asset, EntrySkeletonType } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface Project extends EntrySkeletonType  {
    title: string;
    cover: Asset;
    description: string;
    tags: string[];
    slug: string;
    pictures: Asset[];
    website?: string;
    linkedIn?:string;
    facebook?:string;
    projectDescription: Document;
    research: string;
    descriptionPicture: Asset;
    coverHeight: number;
    shortTitle: string;
}
