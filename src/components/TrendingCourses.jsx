import Link from "next/link";
import courses from "../lib/courses";
import { FaStar, FaChalkboardTeacher, FaUsers, FaFire } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";

const TrendingCourses = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-[#4c1d95] via-[#6d28d9] to-[#7c3aed] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 rounded-full bg-white"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-white"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-2 flex items-center justify-center gap-2">
          <FaFire className="text-orange-400" /> Trending Now
        </h2>
        <p className="text-center text-purple-200 mb-10">Most popular courses this week</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 3).map((course) => (
            <div key={course.id} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs bg-orange-400/30 text-white font-semibold px-3 py-1 rounded-full">
                  {course.level}
                </span>
                <span className="text-xs text-purple-200 flex items-center gap-1">
                  <MdOutlineSchool /> {course.category}
                </span>
              </div>
              <h3 className="text-base font-bold mb-2 line-clamp-2">{course.title}</h3>
              <p className="text-sm text-purple-200 mb-4 flex items-center gap-1">
                <FaChalkboardTeacher className="text-orange-400" /> {course.instructor}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-orange-400 flex items-center gap-1">
                  <FaStar /> {course.rating}
                </span>
                <span className="text-purple-200 flex items-center gap-1">
                  <FaUsers /> {course.students?.toLocaleString()}
                </span>
              </div>
              <Link href={`/main/courses/${course.id}`} className="block text-center mt-4 bg-white/20 hover:bg-orange-400 text-white py-2 rounded-xl text-sm font-medium transition">
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 rotate-180">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#f5f3ff"/>
        </svg>
      </div>
    </section>
  );
};

export default TrendingCourses;