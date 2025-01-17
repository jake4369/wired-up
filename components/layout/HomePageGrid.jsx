// Components
import MainArticle from "../main_article/MainArticle";
import NewArticles from "../new_articles/NewArticles";

const HomePageGrid = () => {
  return (
    <div className="homepage-grid">
      <MainArticle />
      <NewArticles />
    </div>
  );
};

export default HomePageGrid;
