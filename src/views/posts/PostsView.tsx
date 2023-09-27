import React from "react";
import usePostViewController from "./usePostViewController";

const ArticlesView: React.FC = () => {
    const { postName, posts, navigateToArticle, onArticleNameChange, onCreatePostClick } = usePostViewController();

    return (
        <div>
            <ol>
                {!!posts &&
                    posts.map(({ id, title }) => (
                        <li key={id} onClick={() => navigateToArticle(id)}>
                            {title}
                        </li>
                    ))}
            </ol>
            <div>
                <input type="text" onChange={(e) => onArticleNameChange(e.target.value)} value={postName} placeholder="Add an article..." />
                <button onClick={onCreatePostClick}>Create article</button>
            </div>
        </div>
    );
};

export default ArticlesView;
