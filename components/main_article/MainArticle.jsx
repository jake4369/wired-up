// NextJS
import Image from "next/image";

const MainArticle = () => {
  return (
    <article className="main-article">
      <Image
        src="/assets/images/image-web-3-desktop.jpg"
        alt="Colored blocks"
        width={1460}
        height={1168}
        priority={true}
      />

      <div className="main-article__text">
        <h1>The Bright Future of Web 3.0?</h1>

        <div>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>

          <button className="btn__read-more">Read More</button>
        </div>
      </div>
    </article>
  );
};

export default MainArticle;
