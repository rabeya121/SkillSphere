


"use client";

import { useSession } from "@/lib/auth-client";
import { useEffect,use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import courses from "../../../../lib/courses";
import { FaStar, FaClock, FaChalkboardTeacher, FaUsers, FaTrophy, FaPlayCircle, FaGlobe } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";

export default function CourseDetailsPage({ params }) {
  const { id } = use(params);  
  const { data: session, isPending } = useSession();
  const user = session?.user;
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !user) {
      router.push(`/auth/login?redirect=/main/courses/${id}`);
    }
  }, [user, isPending]);

  if (isPending) {
    return (
      <div className="min-h-screen bg-[#f5f3ff] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

 const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f3ff]">
        <p className="text-5xl mb-4">😕</p>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Course Not Found!</h2>
        <Link href="/main/courses" className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f3ff]">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#4c1d95] via-[#6d28d9] to-[#7c3aed] text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-20 w-24 h-24 rounded-full bg-white"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-white"></div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center relative z-10">
          <div className="flex-1">
            <span className="inline-block bg-orange-400/30 text-orange-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {course.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{course.title}</h1>
            <p className="text-purple-200 mb-6 leading-relaxed">{course.description}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-xl">
                <FaChalkboardTeacher className="text-orange-400" /> {course.instructor}
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-xl">
                <FaStar className="text-yellow-400" /> {course.rating} Rating
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-xl">
                <FaClock className="text-orange-400" /> {course.duration}
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-xl">
                <MdOutlineSchool className="text-orange-400" /> {course.level}
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-xl">
                <FaUsers className="text-orange-400" /> {course.students?.toLocaleString()} Students
              </span>
            </div>
          </div>
          <div className="w-full md:w-96">
            <img
              src={course.image}
              alt={course.title}
              className="rounded-2xl w-full h-60 object-cover shadow-2xl border-4 border-white/20"
            />
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#f5f3ff"/>
          </svg>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Curriculum */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-purple-800 mb-6 flex items-center gap-2">
              <FaTrophy className="text-yellow-500" /> Course Curriculum
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden">
              {course.curriculum.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 px-6 py-4 border-b border-purple-50 last:border-0 hover:bg-purple-50 transition"
                >
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{item}</span>
                  <span className="ml-auto text-purple-400 text-sm flex items-center gap-1">
                    <FaPlayCircle className="text-purple-400" /> Lesson
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 sticky top-24">
              <p className="text-3xl font-bold text-gray-900 mb-1">{course.price}</p>
              <p className="text-sm text-gray-400 mb-5">One-time payment</p>
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 rounded-xl transition mb-3 shadow-md">
                Enroll Now
              </button>
              <button className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold py-3 rounded-xl transition mb-6">
                Add to Wishlist
              </button>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-purple-50">
                  <span className="text-gray-500 flex items-center gap-2">
                    <FaClock className="text-purple-400" /> Duration
                  </span>
                  <span className="font-semibold text-gray-700">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-purple-50">
                  <span className="text-gray-500 flex items-center gap-2">
                    <MdOutlineSchool className="text-purple-400" /> Level
                  </span>
                  <span className="font-semibold text-gray-700">{course.level}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-purple-50">
                  <span className="text-gray-500 flex items-center gap-2">
                    <FaUsers className="text-purple-400" /> Students
                  </span>
                  <span className="font-semibold text-gray-700">{course.students?.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-purple-50">
                  <span className="text-gray-500 flex items-center gap-2">
                    <FaStar className="text-purple-400" /> Rating
                  </span>
                  <span className="font-semibold text-gray-700">{course.rating}/5</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-500 flex items-center gap-2">
                    <FaGlobe className="text-purple-400" /> Language
                  </span>
                  <span className="font-semibold text-gray-700">English</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Back Button */}
      <div className="text-center pb-16">
        <Link
          href="/main/courses"
          className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold px-8 py-3 rounded-xl transition"
        >
          ← Back to Courses
        </Link>
      </div>

    </main>
  );
}   



