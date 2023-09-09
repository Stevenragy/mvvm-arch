import useArticleModel from "../models/posts/usePostModel";

const useArticleViewModel = () => {
    const { articles, createArticle, getArticles } = useArticleModel();
    return {
        articles,
        createArticle,
        getArticles,
    };
};

export default useArticleViewModel;
