import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ROOM_SCREEN } from "routing/screens";
import usePostViewModel from "./usePostViewModel";

const useArticlesViewController = () => {
    const navigate = useNavigate();
    const [postName, setPostName] = useState("");
    const { posts, createPost, getPosts } = usePostViewModel();

    const onCreatePostClick = useCallback(async () => {
        await createPost({ name: postName });
    }, [createPost, postName]);

    const navigateToArticle = useCallback(
        (articleId: number) => {
            navigate(`article/${articleId}`);
        },
        [navigate]
    );

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return {
        postName,
        posts,
        navigateToArticle,
        onCreatePostClick,
        onArticleNameChange: setPostName,
    };
};

export default useArticlesViewController;
