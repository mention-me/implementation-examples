declare global {
    interface Window {
        MentionMeFiredTags: Record<string, boolean>;
    }
}

// Adding this exports the declaration file which Typescript/CRA can now pickup:
export {}
