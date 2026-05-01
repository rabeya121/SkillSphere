"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };

  const getAvatar = (user) => {
    if (user?.image && user.image.startsWith("http")) {
      return user.image;
    }
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || "U")}&background=7c3aed&color=fff&size=128`;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-purple-700">
              Skill<span className="text-orange-500">Sphere</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 font-medium transition">
              Home
            </Link>
            <Link href="/main/courses" className="text-gray-700 hover:text-purple-600 font-medium transition">
              Courses
            </Link>
            {user && (
              <Link href="/main/profile" className="text-gray-700 hover:text-purple-600 font-medium transition">
                My Profile
              </Link>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <img
                  src={getAvatar(user)}
                  alt="avatar"
                  className="w-9 h-9 rounded-full border-2 border-purple-500 object-cover"
                />
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/auth/login"
                  className="text-purple-600 border border-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition text-sm font-medium"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-purple-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3 border-t border-purple-100 pt-3">
            <Link href="/" className="text-gray-700 hover:text-purple-600 font-medium py-2">Home</Link>
            <Link href="/main/courses" className="text-gray-700 hover:text-purple-600 font-medium py-2">Courses</Link>
            {user && (
              <Link href="/main/profile" className="text-gray-700 hover:text-purple-600 font-medium py-2">My Profile</Link>
            )}
            <div className="flex flex-col gap-2 mt-2">
              {user ? (
                <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Logout
                </button>
              ) : (
                <>
                  <Link href="/auth/login" className="text-center text-purple-600 border border-purple-600 px-4 py-2 rounded-lg text-sm font-medium">Login</Link>
                  <Link href="/auth/register" className="text-center bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Register</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}