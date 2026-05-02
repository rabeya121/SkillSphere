
"use client";

import { useState } from "react";
import Link from "next/link";
import courses from "../../../lib/courses";
import { FiSearch } from "react-icons/fi";
import { FaStar, FaClock, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    setLoading(true);
    setSearch(e.target.value);
    setTimeout(() => setLoading(false), 300);
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="min-h-screen bg-[#f5f3ff]">

      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#4c1d95] via-[#6d28d9] to-[#7c3aed] text-white py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
          <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-white"></div>
          <div className="absolute bottom-10 left-1/3 w-24 h-24 rounded-full bg-white"></div>
        </div>
        <div className="relative z-10">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1 rounded-full mb-4">
            🎓 Start Learning Today
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">All Courses</h1>
          <p className="text-purple-200 mb-8 max-w-xl mx-auto">
            Explore our wide range of courses and start learning today
          </p>
          <div className="max-w-xl mx-auto relative mb-10">
            <input
              type="text"
              placeholder="Search courses by title..."
              value={search}
              onChange={handleSearch}
              className="w-full px-5 py-3 rounded-xl text-gray-800 outline-none pr-12 text-sm shadow-lg"
            />
            <FiSearch className="absolute right-4 top-3.5 text-gray-400 text-xl" />
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { value: "200+", label: "Total Courses", icon: <MdOutlineSchool className="text-2xl mx-auto mb-1" /> },
              { value: "50K+", label: "Students", icon: <FaUsers className="text-2xl mx-auto mb-1" /> },
              { value: "50+", label: "Instructors", icon: <FaChalkboardTeacher className="text-2xl mx-auto mb-1" /> },
              { value: "4.8", label: "Avg Rating", icon: <FaStar className="text-2xl mx-auto mb-1" /> },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 text-center">
                {stat.icon}
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-purple-200 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f5f3ff"/>
          </svg>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-500 mb-8 text-sm">
            Showing <span className="font-semibold text-purple-700">{filteredCourses.length}</span> courses
          </p>

          {/* add Loader */}
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : filteredCourses.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">😕</p>
              <p className="text-gray-500 text-lg">No courses found for "{search}"</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="relative">
                    <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                    <span className="absolute top-3 left-3 text-xs bg-purple-600 text-white font-semibold px-3 py-1 rounded-full shadow">
                      {course.category}
                    </span>
                    <span className="absolute top-3 right-3 text-xs bg-white text-purple-600 font-semibold px-3 py-1 rounded-full shadow">
                      {course.level}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-2 mb-2">
                      <FaChalkboardTeacher className="text-purple-500" /> {course.instructor}
                    </p>
                    <p className="text-sm text-gray-400 line-clamp-2 mb-4">{course.description}</p>
                    <div className="flex items-center justify-between mt-auto mb-4 bg-purple-50 rounded-xl px-4 py-2">
                      <span className="flex items-center gap-1 text-purple-600 font-semibold text-sm">
                        <FaStar /> {course.rating}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400 text-sm">
                        <FaClock /> {course.duration}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400 text-sm">
                        <FaUsers /> {course.students?.toLocaleString()}
                      </span>
                    </div>
                    <div className="mt-auto mb-3">
                      <span className="text-xl font-bold text-green-600">{course.price}</span>
                    </div>
                    <Link href={`/main/courses/${course.id}`} className="block text-center bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl text-base font-semibold transition">
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
