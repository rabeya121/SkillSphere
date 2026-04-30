
"use client";

import { useState } from "react";
import Link from "next/link";
import courses from "../../../../lib/courses";

export default function CoursesPage() {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-[#0B1120] text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-3">All Courses</h1>
        <p className="text-gray-400 mb-8">
          Explore our wide range of courses and start learning today
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder="Search courses by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 rounded-xl text-gray-800 outline-none pr-12 text-sm"
          />
          <span className="absolute right-4 top-3 text-gray-400 text-lg">🔍</span>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Result Count */}
          <p className="text-gray-500 mb-8 text-sm">
            Showing <span className="font-semibold text-[#0B1120]">{filteredCourses.length}</span> courses
          </p>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">😕</p>
              <p className="text-gray-500 text-lg">No courses found for "{search}"</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs bg-orange-100 text-orange-500 font-semibold px-2 py-1 rounded-full">
                        {course.category}
                      </span>
                      <span className="text-xs bg-blue-100 text-blue-500 font-semibold px-2 py-1 rounded-full">
                        {course.level}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0B1120] mb-1">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-1">
                      👨‍🏫 {course.instructor}
                    </p>
                    <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-orange-400 font-semibold">
                        ⭐ {course.rating}
                      </span>
                      <span className="text-sm text-gray-400">
                        ⏱ {course.duration}
                      </span>
                      <span className="text-sm font-bold text-green-600">
                        {course.price}
                      </span>
                    </div>
                    <Link
                      href={`/main/courses/${course.id}`}
                      className="block text-center bg-[#0B1120] hover:bg-[#1a2a4a] text-white py-2 rounded-lg text-sm font-medium transition"
                    >
                      View Details
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