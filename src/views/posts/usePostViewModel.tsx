import usePostModel from "./model/usePostModel";

const useArticleViewModel = () => {
    const { articles, createArticle, getArticles } = usePostModel();
    return {
        articles,
        createArticle,
        getArticles,
    };
};

export default useArticleViewModel;
