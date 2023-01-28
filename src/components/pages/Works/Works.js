import React, { useState, useEffect } from "react";
import BgLines from "../../BgLines";
import SectionTitle from "../../SectionTitle";
import { colRef } from "../../Firebase";
import { onSnapshot } from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";
import { IoImageOutline } from "react-icons/io5";
import { RiExternalLinkLine } from "react-icons/ri";

const buttons = [
  {
    title: "all",
  },
  {
    title: "ui/ux design",
  },
  {
    title: "html & css",
  },
  {
    title: "react js",
  },
  {
    title: "node js",
  },
];

const Works = () => {
  const [portData, setPortData] = useState([]);
  const [btnName, setBtnName] = useState("all");
  const [filterData, setfilterData] = useState([]);
  const [sliceIndex, setsliceIndex] = useState(9);

  // get the data from the firebase

  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      setPortData(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  //when the document load make a copy from portData

  useEffect(() => {
    setfilterData([...portData]);

    return () => {
      return null;
    };
  }, [portData]);

  // filtering the data base from category

  useEffect(() => {
    if (btnName === "all") {
      setfilterData([...portData]);
      return;
    }

    const filtered = portData.filter((item) => item.category.includes(btnName));

    setsliceIndex(9);
    setfilterData(filtered);
  }, [btnName]);

  //   console.log(filterData);
  return (
    <section className="works">
      <BgLines />
      <SectionTitle headingText={"My works"} shadowText={"works"} />
      <div className="portfolio-section">
        <div className="container">
          <div className="portfolio-filter">
            {buttons.map((button, index) => (
              <button
                className={
                  button.title === btnName ? "active btn-small" : "btn-small"
                }
                key={index}
                onClick={() => {
                  setBtnName(button.title);
                }}
              >
                <span>{button.title}</span>
              </button>
            ))}
          </div>

          <div className="portfolio-item-container">
            <div className="container">
              <div className="row gap-1">
                <AnimatePresence>
                  {filterData.slice(0, sliceIndex).map((portfolio) => (
                    <motion.div
                      layout
                      className="col-12 col-lg-4 col-md-6"
                      key={portfolio.id}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="portfolio-item">
                        <div className="img">
                          <span></span>
                          <img src={portfolio.imgUrl} alt="portfolio img" />
                          <div className="overlay">
                            <button type="button">
                              <IoImageOutline />
                            </button>
                            <button type="button">
                              <RiExternalLinkLine />
                            </button>
                          </div>
                        </div>
                        <h4>{portfolio.name}</h4>
                        <p>{portfolio.info}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              <div className="load-more-btn">
                <button
                  className="btn-small"
                  onClick={() => setsliceIndex(sliceIndex + 3)}
                >
                  <span>
                    {filterData.length ===
                    filterData.slice(0, sliceIndex).length
                      ? "No more"
                      : "Load More"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
