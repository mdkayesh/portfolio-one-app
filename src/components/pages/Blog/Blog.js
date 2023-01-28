import React from "react";
import HeroSectionTitle from "../../HeroSectionTitle";
import { UseBlogContext } from "../../UseBlogContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Blog = () => {
  const {
    blogData,
    filteredBlogData,
    filtered,
    btnName,
    getSingleBlog,
    dateData,
  } = UseBlogContext();

  const Categories = blogData.map((blog) => [...blog.category]);

  // to make case insesitive
  const arr = Categories.flat().map((item) => item.toLowerCase());

  const uniqueCategories = [...new Set(arr)];

  let count = {};

  arr.forEach((i) => {
    count[i] = (count[i] || 0) + 1;
  });

  return (
    <div className="blog">
      <HeroSectionTitle heading={"blog"} />
      <section className="blog-section">
        <div className="container">
          <div className="row gap-1">
            <motion.div className="col-12 col-lg-9">
              <div className="blog-item-container">
                <div className="row gap-1">
                  {filteredBlogData.slice(0, 6).map((blog) => (
                    <motion.div
                      className="col-12 col-md-6"
                      key={blog.id}
                      layout
                      viewport={{ once: true }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{
                        scale: 0,
                        opacity: 0,
                        transition: { duration: 0.5 },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 10,
                      }}
                    >
                      <Link
                        to={`/blogs/${blog.id}`}
                        onClick={() => getSingleBlog(blog.id)}
                      >
                        <div className="blog-item">
                          <span className="time">
                            <span className="month">
                              {dateData[blog.id].monthName}
                            </span>
                            <span className="day">
                              {dateData[blog.id].date}
                            </span>
                            <span className="year">
                              {dateData[blog.id].year}
                            </span>
                          </span>
                          <div className="img">
                            <span></span>
                            <img src={blog.imgUrl} alt="blog" />
                          </div>
                          <h4>
                            <Link title={blog.name}>
                              {blog.name.length > 25
                                ? blog.name.slice(0, 25) + "..."
                                : blog.name}
                            </Link>
                          </h4>
                          <div className="time-category">
                            <div className="category">
                              {blog.category.map((item, index) => (
                                <Link key={index}>{item}</Link>
                              ))}
                            </div>
                            <p>{dateData[blog.id].time}</p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            <div className="col-12 col-lg-3">
              <div className="right-col">
                <motion.div
                  className="category-container"
                  viewport={{ once: true }}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 10 }}
                >
                  <h4>Category</h4>
                  <ul>
                    {uniqueCategories.map((category, index) => (
                      <li key={index}>
                        <Link
                          onClick={() => filtered(category)}
                          className={btnName === category ? "active" : ""}
                        >
                          {category} <span>{`(${count[category]})`}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  className="recent-container"
                  viewport={{ once: true }}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 10 }}
                >
                  <h4>Recent Post</h4>
                  <ul>
                    {blogData.slice(0, 5).map((blog) => (
                      <li key={blog.id}>
                        <Link title={blog.name}>
                          {blog.name.length > 22
                            ? blog.name.slice(0, 22) + "..."
                            : blog.name}
                        </Link>
                        <p className="date">
                          {`${dateData[blog.id].monthName} ${
                            dateData[blog.id].date
                          }, ${dateData[blog.id].year}`}
                          <span className="time">{dateData[blog.id].time}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
