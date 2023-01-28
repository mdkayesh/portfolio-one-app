import React from "react";
import SectionTitle from "../../SectionTitle";
import { BsFillStarFill } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

const Reviews = () => {
  return (
    <section className="reviews">
      <SectionTitle headingText={"Client Reviews"} shadowText={"Reviews"} />
      <div className="client-reviews-slider">
        <div className="container">
          <Swiper
            // slidesPerView={3}
            spaceBetween={20}
            // slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            // pagination={{
            //   clickable: true,
            // }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{ delay: 2500 }}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="client-cart">
                <div className="inner-cart">
                  <div className="client-img">
                    <img
                      src="https://tf-react-bieber.vercel.app/images/user-avatar-4.png"
                      alt="client"
                    />
                  </div>
                  <div className="content">
                    <h5>Wmma Watson</h5>
                    <p className="info-address">client - envato.com</p>
                    <div className="review-stars">
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                    </div>
                    <p>
                      working with Akash Khan is very good experience for me. He
                      is a good person. If i need developer in future. I'll
                      defenately hire him.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="client-cart">
                <div className="inner-cart">
                  <div className="client-img">
                    <img
                      src="https://tf-react-bieber.vercel.app/images/user-avatar-4.png"
                      alt="client"
                    />
                  </div>
                  <div className="content">
                    <h5>Wmma Watson</h5>
                    <p className="info-address">client - envato.com</p>
                    <div className="review-stars">
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                    </div>
                    <p>
                      working with Akash Khan is very good experience for me. He
                      is a good person. If i need developer in future. I'll
                      defenately hire him.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="client-cart">
                <div className="inner-cart">
                  <div className="client-img">
                    <img
                      src="https://tf-react-bieber.vercel.app/images/user-avatar-4.png"
                      alt="client"
                    />
                  </div>
                  <div className="content">
                    <h5>Wmma Watson</h5>
                    <p className="info-address">client - envato.com</p>
                    <div className="review-stars">
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                    </div>
                    <p>
                      working with Akash Khan is very good experience for me. He
                      is a good person. If i need developer in future. I'll
                      defenately hire him.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="client-cart">
                <div className="inner-cart">
                  <div className="client-img">
                    <img
                      src="https://tf-react-bieber.vercel.app/images/user-avatar-4.png"
                      alt="client"
                    />
                  </div>
                  <div className="content">
                    <h5>Wmma Watson</h5>
                    <p className="info-address">client - envato.com</p>
                    <div className="review-stars">
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                    </div>
                    <p>
                      working with Akash Khan is very good experience for me. He
                      is a good person. If i need developer in future. I'll
                      defenately hire him.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="client-cart">
                <div className="inner-cart">
                  <div className="client-img">
                    <img
                      src="https://tf-react-bieber.vercel.app/images/user-avatar-4.png"
                      alt="client"
                    />
                  </div>
                  <div className="content">
                    <h5>Wmma Watson</h5>
                    <p className="info-address">client - envato.com</p>
                    <div className="review-stars">
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                    </div>
                    <p>
                      working with Akash Khan is very good experience for me. He
                      is a good person. If i need developer in future. I'll
                      defenately hire him.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="client-cart">
                <div className="inner-cart">
                  <div className="client-img">
                    <img
                      src="https://tf-react-bieber.vercel.app/images/user-avatar-4.png"
                      alt="client"
                    />
                  </div>
                  <div className="content">
                    <h5>Wmma Watson</h5>
                    <p className="info-address">client - envato.com</p>
                    <div className="review-stars">
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                    </div>
                    <p>
                      working with Akash Khan is very good experience for me. He
                      is a good person. If i need developer in future. I'll
                      defenately hire him.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="client-cart">
                <div className="inner-cart">
                  <div className="client-img">
                    <img
                      src="https://tf-react-bieber.vercel.app/images/user-avatar-4.png"
                      alt="client"
                    />
                  </div>
                  <div className="content">
                    <h5>Wmma Watson</h5>
                    <p className="info-address">client - envato.com</p>
                    <div className="review-stars">
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                      <span>
                        <BsFillStarFill />
                      </span>
                    </div>
                    <p>
                      working with Akash Khan is very good experience for me. He
                      is a good person. If i need developer in future. I'll
                      defenately hire him.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
