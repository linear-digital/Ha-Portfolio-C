import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Blog.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ContactTextAnimation } from "../../Animations/Animations";
import { fetchHashnodeBlogs } from "../../lib/hasnode";

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
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    (
      async () => {
        const response = await fetchHashnodeBlogs();
        setBlogs(response);
      }
    )()
  }, []);
  if (!blogs) {
    return (
      <div className="text-center">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      {/* Blog Start From Here */}
      <section id="blog" className="container px-6 mx-auto pb-20">
        <motion.h2
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={ContactTextAnimation}
          className="my-12 text-5xl text-center tracking-tight font-extrabold  text-dark dark:text-white sm:leading-none">
          Recent
          <span className="text-indigo-600 dark:text-indigo-500"> Blogs</span>
        </motion.h2>
        <div className="" ref={ref}>
          <Slider {...settings}>
            {
              blogs?.map((blog) => {
                return <motion.div
                  key={blog.id}
                  initial="hidden"
                  animate={viewDiv && "visible"}
                  variants={blogAnimation}
                >
                  <div className="mx-4 rounded-lg shadow single-blog cursor-pointer relative">
                    <a
                      href={blog.url}
                      target="_blank"
                      className="blog-text bg-indigo-900 bg-opacity-80 rounded-lg"
                      rel="noreferrer"
                    >
                      <div className="flex items-center justify-center w-full h-full">
                        <h1 className="text-white text-2xl font-semibold text-center">
                          {blog.title}
                        </h1>
                      </div>
                    </a>
                    <img
                      src={blog.coverImage?.url || "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"}
                      alt="blog"
                      className="blog-image w-full h-72 hidden rounded-lg object-cover"
                    />
                  </div>
                </motion.div>
              })
            }
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Blog;
