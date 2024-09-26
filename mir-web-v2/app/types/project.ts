import { Asset, EntrySkeletonType } from 'contentful';
import { Document } from '@contentful/rich-text-types';
import { AssetFileWithDetails } from './AssetFileWithDetails';

export interface Project extends EntrySkeletonType  {
    title: string;
    cover: AssetFileWithDetails;
    description: string;
    tags: string[];
    slug: string;
    website?: string;
    linkedIn?:string;
    facebook?:string;
    projectDescription: Document;
    research: string;
    descriptionPicture: Asset;
    coverHeight: number;
    shortTitle: string;
    date: string;
    isOngoing: boolean;
    pic1?: AssetFileWithDetails;
    pic2?: AssetFileWithDetails;
    pic3?: AssetFileWithDetails;
    pic4?: AssetFileWithDetails;
    pic5?: AssetFileWithDetails;
    pic6?: AssetFileWithDetails;
    headerText1: string;
    headerText2: string;
    headerTitle1: string;
    headerTitle2: string;
    courseLink: string;
}
