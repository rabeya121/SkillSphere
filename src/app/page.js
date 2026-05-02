
"use client";
import HeroSlider from "@/components/Hero";
import Stats from "@/components/Stats";
import PopularCourses from "@/components/PopularCourses";
import LearningTips from "@/components/LearningTips";
import TopInstructors from "@/components/TopInstructors";
import TrendingCourses from "@/components/TrendingCourses";

import { useState, useEffect } from "react";


export default function HomePage() {

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 600);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5f3ff] flex flex-col items-center justify-center">
        <div className="text-center">
          {/* Spinner */}
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          {/* Logo */}
          <h2 className="text-2xl font-bold text-purple-700">
            Skill<span className="text-orange-500">Sphere</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">Loading your courses...</p>
        </div>
      </div>
    );
  }

  return (
    <main>
      <HeroSlider />
      <Stats />
      <PopularCourses />
      <LearningTips />
      <TopInstructors />
      <TrendingCourses />
    </main>
  );
}