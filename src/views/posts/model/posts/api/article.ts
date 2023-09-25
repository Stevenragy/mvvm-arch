export interface ArticleDTO {
    id: number;
    title: string;
    userId?: number;
    body?: string;
}

export interface CreateArticleDTO {
    name: string;
}

const API_URL = "https://jsonplaceholder.typicode.com";

export const getAllArticles = async (): Promise<ArticleDTO[] | null> => {
    const response = await fetch(`${API_URL}/posts`);
    if (!response.ok) {
        throw new Error("Failed to get all articles");
    }
    const data = await response.json();
    return data;
};

export const postArticle = async (createData: CreateArticleDTO): Promise<ArticleDTO | null> => {
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
