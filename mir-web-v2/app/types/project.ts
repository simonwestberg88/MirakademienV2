import { EntrySkeletonType } from 'contentful';
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
    researchResults: string;
    researchDescription: string;
    descriptionPicture: AssetFileWithDetails;
    coverHeight: number;
    date: string;
    isOngoing: boolean;
    headerPicsRow1: AssetFileWithDetails[];
    headerPicsRow2: AssetFileWithDetails[];
    headerText1: string;
    headerText2: string;
    headerTitle1: string;
    headerTitle2: string;
    courseLink: string;
}
