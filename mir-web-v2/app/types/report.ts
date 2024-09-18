import { Asset, EntrySkeletonType } from "contentful";

export interface Report extends EntrySkeletonType  {
    title: string;
    description: string;
    pdf: Asset;
    date: string;
}
