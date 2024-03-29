import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import ArticlesView from "../views/posts/PostsView";

function App() {
    return (
        <Routes>
            <Route path="/" element={<ArticlesView />} />
        </Routes>
    );
}

export default App;
