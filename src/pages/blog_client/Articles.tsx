import React, { ReactElement, useEffect, useState } from "react";
import { Article } from "~/interfaces/Article.interface";
import { ALL, PAP, CITHOLOGY, HISTOPATHOLOGY } from "~/constants/Blog/blog.constants";
import { getArticles } from "~/service/articles.service";
import ArticleList from "~/pages/blog_client/Home/components/articles/ArticleList";
import Search from "~/pages/blog_client/Home/components/articles/Search";
import Filter from "~/pages/blog_client/Home/components/articles/Filter";

function Articles(): ReactElement {
  const [changeFilter, setChangeFilter] = useState<string>(ALL);
  const [changeSearch, setChangeSearch] = useState<string>("");
  const [articles, setArticles] = useState<Article[]>([] as Article[]);
  const [articlesFiltered, setArticlesFiltered] = useState<Article[]>(articles);
  const example = [
    {
      id: 1,
      title: "Papanicolau",
      author: "Dr. Juan Perez",
      date: "18/11/2023",
      content:
        "Un Papanicolau normal significa que no hay células anormales presentes en el cuello uterino. Un Papanicolau anormal significa que se encontraron células anormales en el cuello uterino. Estas células anormales se denominan células precancerosas. Las células precancerosas no son cáncer, pero pueden convertirse en cáncer si no se tratan.",
      images: [
        {
          id: 1,
          url: "https://picsum.photos/200/1200",
        },
        {
          id: 2,
          url: "https://picsum.photos/200/800",
        },
        {
          id: 3,
          url: "https://picsum.photos/900/800",
        },
      ],
      type: "PAP",
    },
    {
      id: 2,
      title: "Blood Pressure",
      author: "Dr. Maria Rodriguez",
      date: "22/11/2023",
      content:
        "Maintaining a healthy blood pressure is crucial for cardiovascular health. High blood pressure can lead to serious health issues, including heart disease and stroke.",
      images: [
        {
          id: 4,
          url: "https://picsum.photos/200/1000",
        },
        {
          id: 5,
          url: "https://picsum.photos/200/900",
        },
      ],
      type: "histopathology",
    },
    {
      id: 3,
      title: "Cholesterol Levels",
      author: "Dr. Laura Martinez",
      date: "25/11/2023",
      content:
        "Monitoring cholesterol levels is essential for heart health. High levels of LDL cholesterol (bad cholesterol) can increase the risk of heart disease.",
      images: [
        {
          id: 6,
          url: "https://picsum.photos/200/1100",
        },
        {
          id: 7,
          url: "https://picsum.photos/200/1000",
        },
      ],
      type: "cithology",
    },
  ];

  const allArticles = async () => {
    const articles = await getArticles();
    setArticles(articles);
  };

  useEffect(() => {
    allArticles();
  }, []);

  useEffect(() => {
    if (
      changeSearch !== "" &&
      changeSearch !== undefined &&
      changeSearch !== null &&
      changeSearch !== " " &&
      changeSearch !== ALL &&
      changeSearch !== PAP &&
      changeSearch !== CITHOLOGY &&
      changeSearch !== HISTOPATHOLOGY
    ) {
      setArticlesFiltered(
        articles.filter((article) =>
          article.title.toUpperCase().includes(changeSearch.toUpperCase()),
        ),
      );
    } else {
      setArticlesFiltered(articles);
    }
  }, [articles, changeSearch]);

  useEffect(() => {
    changeFilter !== ALL
      ? setArticlesFiltered(
          articles.filter((article) => article.type.toUpperCase() === changeFilter),
        )
      : setArticlesFiltered(articles);
  }, [articles, changeFilter]);

  return (
    <div className="flex w-full flex-col">
      <div className="container mx-auto flex flex-col">
        <div className="flex w-full flex-col items-center justify-center md:flex-row">
          <Filter selected={changeFilter} setSelected={setChangeFilter} />
          <Search search={changeSearch} setSearch={setChangeSearch} />
        </div>
      </div>
      <ArticleList articles={[]} />
    </div>
  );
}

export default Articles;
