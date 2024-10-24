"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants"; // Assuming this contains your skills data
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const AboutMe = () => {
  return (
    <div className="min-h-screen w-screen bg-white text-[#141F3D] pt-[120px]"> {/* Added padding to top */}
      <div className="flex flex-col gap-20 max-w-[80%] mx-auto p-8 text-center"> {/* Centered text with mx-auto */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-[50px] text-[#FCA317]">
            About Me
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              &{" "}
            </span>
            My Journey
          </h1>
          <p className="text-gray-600 text-[20px]">
            Aspiring Data Scientist & Software Engineer passionate about leveraging technology to make a difference.
          </p>
        </div>

        <div className="max-w-[80%] mx-auto text-gray-800">
          <p className="text-lg mb-4">
            Hello! I&apos;m Abhiroop Reddy, a recent graduate with a strong background in computer science and economics.
            I am deeply interested in data analysis and software development, and I love tackling challenging problems with innovative solutions.
            My journey in technology began at Bowdoin College, where I honed my skills in various programming languages and tools.
          </p>
          <p className="text-lg">
            Outside of coding, I enjoy playing squash and working on personal projects that enhance my skills.
            I&apos;m eager to contribute to impactful projects that leverage data for better decision-making.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 mt-10">
          <h2 className="font-semibold text-[#141F3D] text-[30px]">Skills & Technologies</h2>
          <p className="text-gray-600 text-[18px]">
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
