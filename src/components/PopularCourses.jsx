import Link from "next/link";
import courses from "../lib/courses";
import { FaStar, FaClock, FaChalkboardTeacher, FaUsers, FaFire } from "react-icons/fa";

const popularCourses = [...courses]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3);

const PopularCourses = () => {
  return (
    <section className="py-16 px-6 bg-[#f5f3ff]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-2 flex items-center justify-center gap-2">
          <FaFire className="text-orange-400" /> Popular Courses
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Our top rated courses loved by thousands of students
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCourses.map((course) => (
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
        <div className="text-center mt-10">
          <Link href="/main/courses" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;