"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

const slides = [
  {
    title: "Upgrade Your Skills Today 🚀",
    subtitle: "Learn from Industry Experts and take your career to the next level.",
    bg: "from-[#0B1120] via-[#1a2a4a] to-[#0B1120]",
    btn: "Explore Courses",
    link: "/main/courses",
  },
  {
    title: "Learn at Your Own Pace ⏰",
    subtitle: "Access 200+ courses anytime, anywhere. Start learning today for free.",
    bg: "from-[#1a0533] via-[#3b0764] to-[#1a0533]",
    btn: "Get Started Free",
    link: "/auth/register",
  },
  {
    title: "Build Real World Projects 💻",
    subtitle: "Gain hands-on experience with projects that matter to employers.",
    bg: "from-[#0f2027] via-[#203a43] to-[#2c5364]",
    btn: "Browse Courses",
    link: "/main/courses",
  },
];

const HeroSlider = () => {
  return (
    <section>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`bg-gradient-to-br ${slide.bg} text-white py-32 px-6 text-center min-h-[500px] flex items-center justify-center`}>
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.link}
                  className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg transition inline-block"
                >
                  {slide.btn}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;