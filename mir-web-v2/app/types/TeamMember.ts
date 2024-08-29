import { Asset, EntrySkeletonType } from 'contentful';

export interface TeamMember extends EntrySkeletonType  {
    picture: Asset;
    name: string;
    expertise: string;
    responsibility: string;
    position: string;
    email: string;
}
