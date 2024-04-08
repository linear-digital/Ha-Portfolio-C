import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Blog.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Blog = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [viewDiv, setViewDiv] = useState(false);

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    }
    if (!inView) {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const blogAnimation = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, delay: 1.3, type: "spring" },
    },
  };

  return (
    <>
      {/* Blog Start From Here */}
      <section id="blog" className="container px-6 mx-auto pb-20">
        <h2 className="my-12 text-5xl text-center tracking-tight font-extrabold  text-dark dark:text-white sm:leading-none">
          Recent
          <span className="text-indigo-600 dark:text-indigo-500"> Blogs</span>
        </h2>
        <div className="" ref={ref}>
          <Slider {...settings}>
            <motion.div
              initial="hidden"
              animate={viewDiv && "visible"}
              variants={blogAnimation}
            >
              <div className="mx-4 rounded-lg shadow single-blog cursor-pointer relative">
                <a
                  href="https://www.designveloper.com/blog/igaming-website-design/"
                  target="_blank"
                  className="blog-text bg-indigo-900 bg-opacity-80 rounded-lg"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <h1 className="text-white text-2xl font-semibold text-center">
                      iGaming Website Design: Anti-Money Laundering Guidance
                    </h1>
                  </div>
                </a>
                <img
                  src="https://www.designveloper.com/wp-content/uploads/2023/12/igaming-website-design-anti-money-laundering-guidance.png"
                  alt="blog"
                  className="blog-image w-full h-72 hidden rounded-lg"
                />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={viewDiv && "visible"}
              variants={blogAnimation}
            >
              <div className="mx-4 rounded-lg shadow single-blog cursor-pointer relative">
                <a
                  href="https://www.designveloper.com/blog/responsive-web-design/"
                  target="_blank"
                  className="blog-text bg-indigo-900 bg-opacity-80 rounded-lg"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <h1 className="text-white text-2xl font-semibold text-center">
                      Responsive Web Design: Definition, Best Practice, Pros &
                      Cons
                    </h1>
                  </div>
                </a>
                <img
                  src="https://www.designveloper.com/wp-content/uploads/2021/07/responsive-web-design.jpg"
                  alt="blog"
                  className="blog-image w-full  h-72 hidden rounded-lg"
                />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={viewDiv && "visible"}
              variants={blogAnimation}
            >
              <div className="mx-4 rounded-lg shadow single-blog cursor-pointer relative">
                <a
                  href="https://www.designveloper.com/blog/modern-website-design/"
                  target="_blank"
                  className="blog-text bg-indigo-900 bg-opacity-80 rounded-lg"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <h1 className="text-white text-2xl font-semibold text-center">
                      10 Modern Website Design Examples: A Complete Guide
                    </h1>
                  </div>
                </a>
                <img
                  src="https://www.designveloper.com/wp-content/uploads/2023/03/Designveloper-Modern-Website-Design-Concepts.png"
                  alt="blog"
                  className="blog-image w-full h-72 hidden rounded-lg"
                />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={viewDiv && "visible"}
              variants={blogAnimation}
            >
              <div className="mx-4 rounded-lg shadow single-blog cursor-pointer relative">
                <a
                  href="https://www.designveloper.com/blog/what-is-a-web-based-application/"
                  target="_blank"
                  className="blog-text bg-indigo-900 bg-opacity-80 rounded-lg"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <h1 className="text-white text-2xl font-semibold text-center">
                      What Is a Web-based Application? Examples and Benefits
                    </h1>
                  </div>
                </a>
                <img
                  src="https://www.designveloper.com/wp-content/uploads/2022/03/what-is-a-web-based-application.jpg"
                  alt="blog"
                  className="blog-image w-full h-72 hidden rounded-lg"
                />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={viewDiv && "visible"}
              variants={blogAnimation}
            >
              <div className="mx-4 rounded-lg shadow single-blog cursor-pointer relative">
                <a
                  href="https://www.designveloper.com/blog/web-application-examples/"
                  target="_blank"
                  className="blog-text bg-indigo-900 bg-opacity-80 rounded-lg"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <h1 className="text-white text-2xl font-semibold text-center">
                      10 Web Application Examples and Definition for Beginners
                    </h1>
                  </div>
                </a>
                <img
                  src="https://www.designveloper.com/wp-content/uploads/2021/02/web-application-examples.png"
                  alt="blog"
                  className="blog-image w-full h-72 hidden rounded-lg"
                />
              </div>
            </motion.div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Blog;
