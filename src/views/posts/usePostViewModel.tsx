import usePostModel from "./model/usePostModel";

const useArticleViewModel = () => {
    const { posts, createPost, getPosts } = usePostModel();
    return {
        posts,
        createPost,
        getPosts,
    };
};

export default useArticleViewModel;
