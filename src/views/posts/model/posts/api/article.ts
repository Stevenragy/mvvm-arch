export interface Post {
    id: number;
    title: string;
    userId?: number;
    body?: string;
}

export interface CreatePost {
    name: string;
}

const API_URL = "https://jsonplaceholder.typicode.com";

export const getAllPosts = async (): Promise<Post[] | null> => {
    const response = await fetch(`${API_URL}/posts`);
    if (!response.ok) {
        throw new Error("Failed to get all articles");
    }
    const data = await response.json();
    return data;
};

export const postPost = async (createData: CreatePost): Promise<Post | null> => {
    const response = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(createData),
    });
    if (!response.ok) {
        throw new Error("Failed to create article");
    }
    const data = await response.json();
    return data;
};
