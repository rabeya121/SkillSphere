"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // পরে এখানে auth থেকে user আসবে
  const user = null;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">
              Skill<span className="text-orange-500">Sphere</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Home
            </Link>
            <Link href="/main/courses" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Courses
            </Link>
            {user && (
              <Link href="/main/profile" className="text-gray-700 hover:text-blue-600 font-medium transition">
                My Profile
              </Link>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <img
                  src={user.image || "/images/avatar.png"}
                  alt="avatar"
                  className="w-9 h-9 rounded-full border-2 border-blue-500"
                />
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition text-sm font-medium">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/auth/login"
                  className="text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium py-2">
              Home
            </Link>
            <Link href="/main/courses" className="text-gray-700 hover:text-blue-600 font-medium py-2">
              Courses
            </Link>
            {user && (
              <Link href="/main/profile" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                My Profile
              </Link>
            )}
            <div className="flex flex-col gap-2 mt-2">
              {user ? (
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Logout
                </button>
              ) : (
                <>
                  <Link href="/auth/login" className="text-center text-blue-600 border border-blue-600 px-4 py-2 rounded-lg text-sm font-medium">
                    Login
                  </Link>
                  <Link href="/auth/register" className="text-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}