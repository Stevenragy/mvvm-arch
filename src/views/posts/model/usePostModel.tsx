import { useCallback, useState } from "react";
import { getAllPosts, postPost } from "./posts/api/article";
import { Post, CreatePost } from "./posts/api/article";

const useArticleModel = () => {
    const [postsData, setPostsData] = useState<Post[] | null>(null);

    const getPosts = useCallback(async () => {
        const posts = await getAllPosts();
        setPostsData(posts);
    }, []);

    const createPost = useCallback(
        async (createData: CreatePost) => {
            if (Array.isArray(postsData)) {
                const response = await postPost(createData);

                if (response !== null) {
                    setPostsData([...postsData, { id: response.id, title: response.title }]);
                }
            }
        },
        [postsData]
    );

    return {
        posts: postsData,
        createPost,
        getPosts,
    };
};

export default useArticleModel;
