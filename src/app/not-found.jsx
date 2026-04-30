import Link from "next/link";
import { FaHome, FaSearch } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f5f3ff] flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">

        {/* 404 Text */}
        <div className="relative mb-8">
          <h1 className="text-[150px] font-bold text-purple-100 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl">
              <FaSearch className="text-white text-4xl" />
            </div>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl font-bold text-purple-800 mb-3">
          Page Not Found!
        </h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Oops! The page you are looking for does not exist. 
          It might have been moved or deleted.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-xl transition"
          >
            <FaHome /> Go Home
          </Link>
          <Link
            href="/main/courses"
            className="flex items-center justify-center gap-2 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold px-8 py-3 rounded-xl transition"
          >
            <MdOutlineSchool /> Browse Courses
          </Link>
        </div>

      </div>
    </main>
  );
}