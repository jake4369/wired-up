// NextJS
import Link from "next/link";

// Utility to create article list
const renderArticleLinks = (articles) => {
  return articles.map((article) => (
    <li key={article.heading}>
      <Link href={`new/${article.slug}`} className="new-article__link">
        <h2>{article.heading}</h2>
        <p>{article.text}</p>
      </Link>
    </li>
  ));
};

// Data
const newArticles = [
  {
    heading: "Hydrogen VS Electric Cars",
    text: "Will hydrogen-fueled cars ever catch up to EVs?",
    slug: "hydrogen-vs-electric-cars",
  },
  {
    heading: "The Downsides of AI Artistry",
    text: "What are the possible adverse effects of on-demand AI image generation?",
    slug: "the-downsides-of-ai-artistry",
  },
  {
    heading: "Is VC Funding Drying Up?",
    text: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    slug: "is-vc-funding-drying-up",
  },
];

const NewArticles = () => {
  return (
    <aside className="aside__new-articles">
      <span>New</span>

      <ul className="new-articles">{renderArticleLinks(newArticles)}</ul>
    </aside>
  );
};

export default NewArticles;
