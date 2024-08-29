import { createClient } from "contentful";

export namespace ContentfulClient {
    export function getClient() {
        const client = createClient({
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
            space: process.env.CONTENTFUL_SPACE_ID ?? ""
        })
        return client;
    }
}