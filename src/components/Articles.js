import React from "react";
import { useSelector } from "react-redux";
import {
  selectArticles,
  filterArticles,
} from "../features/articles/articlesSlice";
import Search from "./Search";
import { useSearchParams, Link } from "react-router-dom";

export default function Articles() {
  const articles = useSelector(selectArticles);

  const [params, setParams] = useSearchParams();

  // Get the queryParams from object returned from useSearchParams and set to `title`
  const title = params;

  const filteredArticles = title
    ? filterArticles(title, articles)
    : Object.values(articles);

  return (
    <main>
      <h1>Articles</h1>
      <ul>
        {filteredArticles.map((article) => (
          <li key={article.slug}>
            <Link to={`${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <Search />
    </main>
  );
}
