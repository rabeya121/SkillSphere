// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import courses from "../../../../lib/courses";
// import { FiSearch } from "react-icons/fi";
// import { FaStar, FaClock, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
// import { MdOutlineSchool } from "react-icons/md";

// export default function CoursesPage() {
//   const [search, setSearch] = useState("");

//   const filteredCourses = courses.filter((course) =>
//     course.title.toLowerCase().includes(search.toLowerCase()),
//   );

//   return (
//     <main className="min-h-screen bg-gray-50">

//       {/* Header */}
//       <section className="bg-[#0B1120] text-white py-16 px-6 text-center">
//         <h1 className="text-4xl font-bold mb-3">All Courses</h1>
//         <p className="text-gray-400 mb-8">
//           Explore our wide range of courses and start learning today
//         </p>
//         <div className="max-w-xl mx-auto relative">
//           <input
//             type="text"
//             placeholder="Search courses by title..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full px-5 py-3 rounded-xl text-gray-800 outline-none pr-12 text-sm"
//           />
//           <FiSearch className="absolute right-4 top-3.5 text-gray-400 text-xl" />
//         </div>
//       </section>

//       {/* Result Count */}
//       <section className="py-16 px-6">
//         <div className="max-w-6xl mx-auto">
//           <p className="text-gray-500 mb-8 text-sm">
//             Showing <span className="font-semibold text-[#0B1120]">{filteredCourses.length}</span> courses
//           </p>

//           {filteredCourses.length === 0 ? (
//             <div className="text-center py-20">
//               <p className="text-5xl mb-4">😕</p>
//               <p className="text-gray-500 text-lg">No courses found for "{search}"</p>
//             </div>
//           ) : (
//             <>
//               {/* নিচের ৪টা style দেখো, পছন্দেরটা বাদে বাকি ৩টা delete করবে */}

//               {/* ===================== */}
//               {/* Style 1 - Minimal Clean */}
//               {/* ===================== */}
//               <div className="mb-32">
//                 <p className="text-center text-orange-500 font-bold mb-6 text-lg">👇 Style 1 — Minimal Clean</p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                   {filteredCourses.map((course) => (
//                     <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
//                       <img src={course.image} alt={course.title} className="w-full h-44 object-cover" />
//                       <div className="p-5 flex flex-col flex-1">
//                         <div className="flex items-center justify-between mb-3">
//                           <span className="text-xs bg-orange-50 text-orange-500 font-semibold px-3 py-1 rounded-full border border-orange-200">{course.category}</span>
//                           <span className="text-xs text-gray-400 flex items-center gap-1"><MdOutlineSchool /> {course.level}</span>
//                         </div>
//                         <h3 className="text-base font-bold text-gray-900 mb-1 line-clamp-2">{course.title}</h3>
//                         <p className="text-sm text-gray-500 flex items-center gap-1 mb-4">
//                           <FaChalkboardTeacher className="text-orange-400" /> {course.instructor}
//                         </p>
//                         <div className="flex items-center gap-4 mt-auto mb-4 text-sm text-gray-500">
//                           <span className="flex items-center gap-1 text-orange-400 font-semibold"><FaStar /> {course.rating}</span>
//                           <span className="flex items-center gap-1"><FaClock /> {course.duration}</span>
//                           <span className="ml-auto font-bold text-green-600">{course.price}</span>
//                         </div>
//                         <Link href={`/main/courses/${course.id}`} className="block text-center bg-[#0B1120] hover:bg-orange-400 text-white py-2.5 rounded-xl text-sm font-medium transition">
//                           View Details →
//                         </Link>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* ===================== */}
//               {/* Style 2 - Dark Theme */}
//               {/* ===================== */}
//               <div className="mb-32">
//                 <p className="text-center text-orange-500 font-bold mb-6 text-lg">👇 Style 2 — Dark Theme</p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                   {filteredCourses.map((course) => (
//                     <div key={course.id} className="bg-[#0B1120] rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 flex flex-col">
//                       <div className="relative">
//                         <img src={course.image} alt={course.title} className="w-full h-44 object-cover opacity-80" />
//                         <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent" />
//                         <span className="absolute bottom-3 left-3 text-xs bg-orange-400 text-white font-semibold px-3 py-1 rounded-full">{course.category}</span>
//                       </div>
//                       <div className="p-5 flex flex-col flex-1">
//                         <h3 className="text-base font-bold text-white mb-1 line-clamp-2">{course.title}</h3>
//                         <p className="text-sm text-gray-400 flex items-center gap-1 mb-4">
//                           <FaChalkboardTeacher className="text-orange-400" /> {course.instructor}
//                         </p>
//                         <div className="flex items-center gap-4 mt-auto mb-4 text-sm">
//                           <span className="flex items-center gap-1 text-orange-400 font-semibold"><FaStar /> {course.rating}</span>
//                           <span className="flex items-center gap-1 text-gray-400"><FaClock /> {course.duration}</span>
//                           <span className="flex items-center gap-1 text-gray-400"><FaUsers /> {course.students?.toLocaleString()}</span>
//                         </div>
//                         <div className="flex items-center justify-between gap-3">
//                           <span className="text-green-400 font-bold">{course.price}</span>
//                           <Link href={`/main/courses/${course.id}`} className="flex-1 text-center bg-orange-400 hover:bg-orange-500 text-white py-2.5 rounded-xl text-sm font-medium transition">
//                             View Details →
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* ===================== */}
//               {/* Style 3 - Horizontal */}
//               {/* ===================== */}
//               <div className="mb-32">
//                 <p className="text-center text-orange-500 font-bold mb-6 text-lg">👇 Style 3 — Horizontal</p>
//                 <div className="flex flex-col gap-5">
//                   {filteredCourses.map((course) => (
//                     <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-row">
//                       <img src={course.image} alt={course.title} className="w-48 h-full object-cover flex-shrink-0" />
//                       <div className="p-5 flex flex-col flex-1">
//                         <div className="flex items-center gap-2 mb-2">
//                           <span className="text-xs bg-orange-50 text-orange-500 font-semibold px-3 py-1 rounded-full border border-orange-200">{course.category}</span>
//                           <span className="text-xs bg-blue-50 text-blue-500 font-semibold px-3 py-1 rounded-full border border-blue-200">{course.level}</span>
//                         </div>
//                         <h3 className="text-lg font-bold text-gray-900 mb-1">{course.title}</h3>
//                         <p className="text-sm text-gray-500 flex items-center gap-1 mb-2">
//                           <FaChalkboardTeacher className="text-orange-400" /> {course.instructor}
//                         </p>
//                         <p className="text-sm text-gray-400 line-clamp-1 mb-3">{course.description}</p>
//                         <div className="flex items-center gap-4 mt-auto">
//                           <span className="flex items-center gap-1 text-orange-400 font-semibold text-sm"><FaStar /> {course.rating}</span>
//                           <span className="flex items-center gap-1 text-gray-400 text-sm"><FaClock /> {course.duration}</span>
//                           <span className="flex items-center gap-1 text-gray-400 text-sm"><FaUsers /> {course.students?.toLocaleString()}</span>
//                           <span className="ml-auto font-bold text-green-600">{course.price}</span>
//                           <Link href={`/main/courses/${course.id}`} className="text-center bg-[#0B1120] hover:bg-orange-400 text-white px-5 py-2 rounded-xl text-sm font-medium transition">
//                             View Details →
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* ========================= */}
//               {/* Style 4 - Glassmorphism */}
//               {/* ========================= */}
//               <div className="bg-gradient-to-br from-[#0B1120] to-[#1a2a4a] rounded-3xl p-8">
//                 <p className="text-center text-orange-400 font-bold mb-6 text-lg">👇 Style 4 — Glassmorphism</p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                   {filteredCourses.map((course) => (
//                     <div key={course.id} className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 flex flex-col">
//                       <img src={course.image} alt={course.title} className="w-full h-44 object-cover" />
//                       <div className="p-5 flex flex-col flex-1">
//                         <div className="flex items-center justify-between mb-3">
//                           <span className="text-xs bg-orange-400/30 text-orange-300 font-semibold px-3 py-1 rounded-full">{course.category}</span>
//                           <span className="text-xs text-gray-300 flex items-center gap-1"><MdOutlineSchool /> {course.level}</span>
//                         </div>
//                         <h3 className="text-base font-bold text-white mb-1 line-clamp-2">{course.title}</h3>
//                         <p className="text-sm text-gray-300 flex items-center gap-1 mb-4">
//                           <FaChalkboardTeacher className="text-orange-400" /> {course.instructor}
//                         </p>
//                         <div className="flex items-center gap-3 mt-auto mb-4 text-sm">
//                           <span className="flex items-center gap-1 text-orange-400 font-semibold"><FaStar /> {course.rating}</span>
//                           <span className="flex items-center gap-1 text-gray-300"><FaClock /> {course.duration}</span>
//                           <span className="ml-auto text-green-400 font-bold">{course.price}</span>
//                         </div>
//                         <Link href={`/main/courses/${course.id}`} className="block text-center bg-orange-400 hover:bg-orange-500 text-white py-2.5 rounded-xl text-sm font-medium transition">
//                           View Details →
//                         </Link>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//             </>
//           )}
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import courses from "../../../lib/courses";
import { FiSearch } from "react-icons/fi";
import { FaStar, FaClock, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";

export default function CoursesPage() {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="min-h-screen bg-[#f5f3ff]">
      {/* Header */}
      {/* <section className="bg-gradient-to-br from-[#4c1d95] via-[#6d28d9] to-[#7c3aed] text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-3">All Courses</h1>
        <p className="text-purple-200 mb-8">
          Explore our wide range of courses and start learning today
        </p>
        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder="Search courses by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 rounded-xl text-gray-800 outline-none pr-12 text-sm shadow-lg"
          />
          <FiSearch className="absolute right-4 top-3.5 text-gray-400 text-xl" />
        </div>
      </section> */}

      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#4c1d95] via-[#6d28d9] to-[#7c3aed] text-white py-20 px-6 text-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
          <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-white"></div>
          <div className="absolute bottom-10 left-1/3 w-24 h-24 rounded-full bg-white"></div>
          <div className="absolute top-5 left-1/2 w-16 h-16 rounded-full bg-white"></div>
          <div className="absolute bottom-5 right-10 w-28 h-28 rounded-full bg-white"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1 rounded-full mb-4">
            🎓 Start Learning Today
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">All Courses</h1>
          <p className="text-purple-200 mb-8 max-w-xl mx-auto">
            Explore our wide range of courses and start learning today
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative mb-10">
            <input
              type="text"
              placeholder="Search courses by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 rounded-xl text-gray-200 outline-none pr-12 text-sm shadow-lg"
            />
            <FiSearch className="absolute right-4 top-3.5 text-gray-400 text-xl" />
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                value: "200+",
                label: "Total Courses",
                icon: <MdOutlineSchool className="text-2xl mx-auto mb-1" />,
              },
              {
                value: "50K+",
                label: "Students",
                icon: <FaUsers className="text-2xl mx-auto mb-1" />,
              },
              {
                value: "50+",
                label: "Instructors",
                icon: <FaChalkboardTeacher className="text-2xl mx-auto mb-1" />,
              },
              {
                value: "4.8",
                label: "Avg Rating",
                icon: <FaStar className="text-2xl mx-auto mb-1" />,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 text-center"
              >
                {stat.icon}
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-purple-200 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wave Shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
              fill="#f5f3ff"
            />
          </svg>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-500 mb-8 text-sm">
            Showing{" "}
            <span className="font-semibold text-purple-700">
              {filteredCourses.length}
            </span>{" "}
            courses
          </p>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">😕</p>
              <p className="text-gray-500 text-lg">
                No courses found for "{search}"
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute top-3 left-3 text-xs bg-purple-600 text-white font-semibold px-3 py-1 rounded-full shadow">
                      {course.category}
                    </span>
                    <span className="absolute top-3 right-3 text-xs bg-white text-purple-600 font-semibold px-3 py-1 rounded-full shadow">
                      {course.level}
                    </span>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    {/* Title */}
                    <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">
                      {course.title}
                    </h3>

                    {/* Instructor */}
                    <p className="text-sm text-gray-500 flex items-center gap-2 mb-2">
                      <FaChalkboardTeacher className="text-purple-500" />
                      {course.instructor}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                      {course.description}
                    </p>

                    {/* Stats */}
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

                    {/* Price + Button */}
                    {/* Price */}
                    <div className="mt-auto mb-3">
                      <span className="text-xl font-bold text-green-600">
                        {course.price}
                      </span>
                    </div>

                    {/* Button */}
                    <Link
                      href={`/main/courses/${course.id}`}
                      className="block text-center bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl text-base font-semibold transition"
                    >
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
