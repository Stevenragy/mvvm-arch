import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ROOM_SCREEN } from "routing/screens";
import useArticleViewModel from "../../../view-model/usePostViewModel";

const useArticlesViewController = () => {
    const navigate = useNavigate();
    const [articleName, setArticleName] = useState("");
    const { articles, createArticle, getArticles } = useArticleViewModel();

    const onCreateArticleClick = useCallback(async () => {
        await createArticle({ name: articleName });
    }, [createArticle, articleName]);

    const navigateToArticle = useCallback(
        (articleId: number) => {
            navigate(`article/${articleId}`);
        },
        [navigate]
    );

    useEffect(() => {
        getArticles();
    }, [getArticles]);

    return {
        articleName,
        articles,
        navigateToArticle,
        onCreateArticleClick,
        onArticleNameChange: setArticleName,
    };
};

export default useArticlesViewController;
