import React, { useEffect, useState } from "react";
import { Article } from "~/interfaces/Article.interface";
import ArticleCardSys from "~/pages/articles/components/ArticleCardSys";

interface ArticlesListProps {
  articles: Article[];
  showCreateModal: (state: boolean) => void;
  showEditModal: (state: boolean) => void;
  showDeleteModal: (state: boolean) => void;
}

function ArticlesList({
  articles,
  showDeleteModal,
  showEditModal,
  showCreateModal,
}: ArticlesListProps) {
  const [articlesLength, setArticlesLength] = useState<number>(0);
  // useEffect(() => {
  //   if (articles.length > 0) setArticlesLength(articles.length);
  // }, []);

  return (
    <div className="flex flex-col sm:flex-row">
      <ArticleCardSys />
    </div>
  );
}

export default ArticlesList;
