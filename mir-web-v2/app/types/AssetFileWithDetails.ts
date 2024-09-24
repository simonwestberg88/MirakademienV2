import { Asset } from "contentful";

interface ImageDetails {
    width: number;
    height: number;
  }
  
  interface FileDetails {
    size: number;
    image: ImageDetails;
  }
  
  export interface AssetFileWithDetails extends Asset {
    fields: {
      title: string;
      description: string;
      file: {
        url: string;
        fileName: string;
        contentType: string;
        details: FileDetails;  // Includes size and image details
      };
    };
  }