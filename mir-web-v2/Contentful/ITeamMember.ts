import { Asset, Entry, EntrySkeletonType } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface TeamMember extends EntrySkeletonType  {
    picture: Asset;
    description: Document;
    name: string;
    position: string;
    facebook?: string; // Optional field
    linkedIn?: string; // Optional field
}
