"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants"; // Assuming this contains your skills data
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const AboutMe = () => {
  return (
    <div className="min-h-screen w-screen bg-white text-[#141F3D] pt-[120px] dark:bg-[#121212] transition duration-150"> 
      <div className="flex flex-col gap-20 max-w-[80%] mx-auto p-8 text-center"> 
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-[50px] text-[#FCA317] dark:text-white">
            About Me
          </h1>
          <p className="text-gray-600 text-[20px] dark:text-white">
            An Aspiring Data Scientist & Software Engineer passionate about leveraging technology to make a difference
          </p>
        </div>

        <div className="max-w-[80%] mx-auto text-gray-800 dark:text-white">
          <p className="text-lg mb-6">
          I started my journey in Computer Science when I first used OpenAI&apos;s ChatGPT. I was impressed by how the program could understand and respond like a person. This experience sparked my interest in this exciting and fast-moving field.

Since that moment, I have focused on learning more about Artificial Intelligence and Data Science. I worked hard in my classes, on projects, and in research to understand how machine learning, natural language processing, and data analysis work. This dedication has shaped my education and my passion for creating technology that makes a difference.
          </p>

          <p className="text-lg">
          Outside of my academics and career, I am an avid squash player who currently competes for the Bowdoin Polar Bears. After graduation, I aim to continue my squash career through continued training and by participating in tournaments across the globe! I also love music and I DJ as a hobby. The creativity and personality I can express via my music is something I have always wanted to foster, and, after seeing a teammate use a CDJ for the first time, I was hooked!
          </p>

          <div className="pd-200">
            <a 
              href="my-projects" 
              className="inline-block px-8 py-4 text-sm font-medium text-white bg-[#FCA317] dark:bg-[#5A189A] rounded-lg hover:bg-[#F89A12] transition duration-150 ease-in-out mt-4" // Added mt-4 for top margin
            >
              My Projects
            </a>
          </div>
        </div>


        

        <div className="flex flex-col items-center gap-4 mt-10">
          <h2 className="font-semibold text-[#141F3D] text-[30px] dark:text-white">Skills & Technologies</h2>
          <p className="text-gray-600 text-[18px] dark:text-white">
            Proficient in:
          </p>
          <Swiper
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={5000}
            modules={[Autoplay]}
            className="max-w-[80%]"
          >
            {SkillData.map((skill, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                  className="rounded-lg" // Removed shadow
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            speed={5000}
            modules={[Autoplay]}
            className="max-w-[80%]"
          >
            {SkillData.map((skill, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                  className="rounded-lg" // Removed shadow
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
