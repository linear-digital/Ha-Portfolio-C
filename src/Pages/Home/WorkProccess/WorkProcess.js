import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  HowIWorkAllProcess,
  HowIWorkHeading,
  HowIWorkSubHeading,
} from "../../../Animations/Animations";
import "./WorkProcess.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';


const WorkProcess = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
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

  return (
    <section id="team" ref={ref} className="container px-6 mx-auto py-20">
      <div className="text-center mb-28">
        <motion.h3
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={HowIWorkHeading}
          className="my-6 text-5xl text-center tracking-tight font-extrabold text-dark dark:text-white sm:leading-none"
        >
          Our
          <span className="text-indigo-600 dark:text-indigo-500 ml-2">Team</span>
        </motion.h3>

      </div>
      <motion.div

        initial="hidden"
        animate={viewDiv && "visible"}
        variants={HowIWorkAllProcess}
        className="flex flex-col md:flex-row lg:flex-row justify-between items-center md:items-stretch lg:items-stretch gap-x-8"
      >
        <Swiper
          spaceBetween={30}
          breakpoints={
            {
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 4,
              },
              1920: {
                slidesPerView: 4
              }

            }
          }
          className="w-full "
          autoplay={{
            delay: 10500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >

          {
            teamMember.map((t) => <SwiperSlide>
              <TeamCard data={t} key={t.name} />
            </SwiperSlide>)
          }
        </Swiper>
      </motion.div>
    </section>
  );
};

export default WorkProcess;

const teamMember = [
  {
    name: "hazrat Ali",
    image: "/images/friend-pic/new/hazrat.jpeg",
    role: "Software Engineer",
    about: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    social: {
      github: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    name: "Parvez Islam",
    image: "/images/friend-pic/new/parvez.png",
    role: "Cyber Security & Ethical Hacker",
    about: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    social: {
      github: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    name: "Mohamad Raju",
    image: "/images/friend-pic/new/raju.jpeg",
    role: "Frontend Developer",
    about: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    social: {
      github: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    name: "Mainul Hasan",
    image: "/images/friend-pic/new/mainul.jpeg",
    role: "Python  Developer",
    about: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    social: {
      github: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    name: "Abdul Hasib ",
    image: "/images/friend-pic/new/hasib.jpeg",
    role: "Django Developer",
    about: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    social: {
      github: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    name: "Sakib",
    image: "/images/friend-pic/new/sakib.jpeg",
    role: "Backend Developer",
    about: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    social: {
      github: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    name: "Morsedul",
    image: "/images/friend-pic/new/morsedul.jpg",
    role: "Wordpress Developer",
    about: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    social: {
      github: "#",
      twitter: "#",
      instagram: "#"
    }
  }
]

const TeamCard = ({ data }) => {
  return (
    <div role="listitem" className="w-full  relative mt-16  shadow-xl">
      <div className="rounded overflow-hidden   bg-slate-700">
        <div className="absolute  -mt-16 w-full flex justify-center">
          <div className="h-32 w-32">
            <img src={data.image} alt="Display Picture of Andres Berlin" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
          </div>
        </div>
        <div className="px-6 mt-20">
          <h1 className="font-bold text-white text-3xl text-center mb-1">{data.name}</h1>
          <p className="text-gray-100 text-sm text-center">
            {data.role}
          </p>
          <p className="text-center text-gray-100 text-base pt-3 font-normal"> {data.about}</p>
          <div className="w-full flex justify-center pt-5 pb-5">
            <a href={data.social.github} rel="noreferrer" target="_blank" className="mx-5">
              <div aria-label="Github" role="img">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
            </a>
            <a href={data.social.twitter} rel="noreferrer" target="_blank" className="mx-5">
              <div aria-label="Twitter" role="img">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </div>
            </a>
            <a href={data.social.instagram} rel="noreferrer" target="_blank" className="mx-5">
              <div aria-label="Instagram" role="img">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                  <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}