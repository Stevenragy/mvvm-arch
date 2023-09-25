import React from "react";
import usePostViewController from "./usePostViewController";

const ArticlesView: React.FC = () => {
    const { articleName, articles, navigateToArticle, onArticleNameChange, onCreateArticleClick } = usePostViewController();

    return (
        <div>
            <ol>
                {!!articles &&
                    articles.map(({ id, title }) => (
                        <li key={id} onClick={() => navigateToArticle(id)}>
                            {title}
                        </li>
                    ))}
            </ol>
            <div>
                <input type="text" onChange={(e) => onArticleNameChange(e.target.value)} value={articleName} placeholder="Add an article..." />
                <button onClick={onCreateArticleClick}>Create article</button>
            </div>
        </div>
    );
};

export default ArticlesView;
