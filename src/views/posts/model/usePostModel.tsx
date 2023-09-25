import { useCallback, useState } from "react";
import { getAllArticles, postArticle } from "./posts/api/article";
import { ArticleDTO, CreateArticleDTO } from "./posts/api/article";

const useArticleModel = () => {
    const [articlesData, setArticlesData] = useState<ArticleDTO[] | null>(null);

    const getArticles = useCallback(async () => {
        const articles = await getAllArticles();
        setArticlesData(articles);
    }, []);

    const createArticle = useCallback(
        async (createData: CreateArticleDTO) => {
            if (Array.isArray(articlesData)) {
                const response = await postArticle(createData);

                if (response !== null) {
                    setArticlesData([...articlesData, { id: response.id, title: response.title }]);
                }
            }
        },
        [articlesData]
    );

    return {
        articles: articlesData,
        createArticle,
        getArticles,
    };
};

export default useArticleModel;
