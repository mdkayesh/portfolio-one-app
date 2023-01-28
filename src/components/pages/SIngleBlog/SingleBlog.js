import React from "react";
import BgLines from "../../BgLines";
import HeroSectionTitle from "../../HeroSectionTitle";
import { UseBlogContext } from "../../UseBlogContext";

const SingleBlog = () => {
  const { singleBlog, dateData } = UseBlogContext();

  return singleBlog.map((blog) => (
    <div className="single-blog">
      <HeroSectionTitle heading={blog.name} />
      <section className="single-blog-section">
        <BgLines />
        <div className="container">
          <div className="img">
            <img src={blog.imgUrl} alt="blog" />
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <strong>Category:</strong>
              {blog.category.map((category) => (
                <span className="category">{category}</span>
              ))}
            </div>
            <div className="publish col-12 col-lg-6">
              <strong>Published on:</strong>
              <span>{`${dateData[blog.id].monthName} ${
                dateData[blog.id].date
              }, ${dateData[blog.id].year}`}</span>
            </div>
          </div>
          <p>
            Blanditiis corporis <a href="www.themeforest.net">Link Text</a>{" "}
            accusamus accusamus. <b>Bold Text</b> sed quasi neque rerum deserunt
            eum sint ad. Et excepturi quia ut qui. Dolorem et et distinctio
            rerum. Eveniet suscipit eveniet recusandae. Vero qui{" "}
            <em>Italic Text</em> quas aliquam. Expedita saepe non et velit
            voluptas <code>npm run install</code> quidem ut dignissimos. Et
            architecto ex et iste. Qui dolor sunt magnam eos mollitia. Delectus
            voluptas sed ut et blanditiis. Quos perferendis distinctio dolor
            eligendi. Sequi dolores velit et at inventore vero culpa similique.
          </p>
          <h5>Dolorem et et distinctio rerum.</h5>
          <p>
            Eveniet suscipit eveniet recusandae. Vero qui quas aliquam. Expedita
            saepe non et velit voluptas quidem ut dignissimos. Labore odio
            deserunt deserunt ipsam omnis ut. Consequatur aut eos voluptas harum
            cumque explicabo dicta.
          </p>
          <blockquote>
            Eaque minus aut voluptatum. Aut beatae numquam similique quasi. Est
            perferendis voluptatem qui sint ut veritatis inventore. Quaerat
            repudiandae deleniti asperiores mollitia rerum voluptate.
          </blockquote>
          <p>
            Ad reprehenderit accusamus. Incidunt architecto rerum rerum maxime
            est. Exercitationem harum autem quam id sed consequatur possimus.
            Distinctio asperiores nostrum consectetur minima velit est amet quas
            modi. Labore odio deserunt deserunt ipsam omnis ut. Consequatur aut
            eos voluptas harum cumque explicabo dicta.
          </p>
          <pre>
            {`  const getSinglePostData = (slug) => {
    const article = fs.readFileSync(
        path.join(process.cwd(), "src/articles", slug + ".md"),
        "utf-8"
    );
    const { data: frontmatter, content } = matter(article);
    return {
        frontmatter,
        content,
    };
};`}
          </pre>
          <p>
            Ad reprehenderit accusamus. Incidunt architecto rerum rerum maxime
            est. Exercitationem harum autem quam id sed consequatur possimus.
            Distinctio asperiores nostrum consectetur minima velit est amet quas
            modi. Labore odio deserunt deserunt ipsam omnis ut. Consequatur aut
            eos voluptas harum cumque explicabo dicta.
          </p>
          <h5>nested order list</h5>
          <ol>
            <li>first item</li>
            <li>
              Second item
              <ol>
                <li>Nested first item</li>
                <li>Nested second item</li>
              </ol>
            </li>
            <li>third item</li>
          </ol>
          <h5>Nested Unorder list</h5>
          <ul>
            <li>first item</li>
            <li>
              Second item
              <ul>
                <li>Nested first item</li>
                <li>Nested second item</li>
              </ul>
            </li>
            <li>third item</li>
          </ul>
          <p>
            Et excepturi quia ut qui. Dolorem et et distinctio rerum. Eveniet
            suscipit eveniet recusandae. Vero qui quas aliquam. Expedita saepe
            non et velit voluptas quidem ut dignissimos. Et architecto ex et
            iste. Qui dolor sunt magnam eos mollitia. Delectus voluptas sed ut
            et blanditiis.
          </p>
        </div>
      </section>
    </div>
  ));
};

export default SingleBlog;
