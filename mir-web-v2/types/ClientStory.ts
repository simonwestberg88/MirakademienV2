import { Asset, EntrySkeletonType } from 'contentful';

export interface ClientStory extends EntrySkeletonType  {
    client: string;
    review: string;
    rating: number;
}
