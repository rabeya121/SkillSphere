"use client";

import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import { FaUser, FaEnvelope, FaEdit, FaSignOutAlt } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const user = session?.user;
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !user) {
      router.push("/auth/login");
    }
  }, [user, isPending]);

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

  return (
    <main className="min-h-screen bg-[#f5f3ff] py-16 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-purple-800 flex items-center justify-center gap-2">
            <MdOutlineSchool className="text-purple-600" /> My Profile
          </h1>
          <p className="text-gray-500 mt-2">Manage your account information</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden">

          {/* Cover */}
          <div className="bg-gradient-to-br from-[#4c1d95] via-[#6d28d9] to-[#7c3aed] h-32 relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-10 w-16 h-16 rounded-full bg-white"></div>
              <div className="absolute bottom-4 right-10 w-12 h-12 rounded-full bg-white"></div>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex justify-center -mt-12 mb-4">
            <div className="relative">
              <img
                src={getAvatar(user)}
                alt={user.name}
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
          </div>

          {/* Info */}
          <div className="px-8 pb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{user.name}</h2>
            <span className="inline-block bg-purple-100 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full mb-6">
              Student
            </span>

            {/* Details */}
            <div className="flex flex-col gap-4 text-left mb-8">
              <div className="flex items-center gap-4 bg-purple-50 rounded-xl px-5 py-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <FaUser className="text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Full Name</p>
                  <p className="font-semibold text-gray-800">{user.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-purple-50 rounded-xl px-5 py-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <FaEnvelope className="text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="font-semibold text-gray-800">{user.email}</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/main/update-profile"
                className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition"
              >
                <FaEdit /> Update Profile
              </Link>
              <button
                onClick={handleLogout}
                className="flex-1 flex items-center justify-center gap-2 border-2 border-red-400 text-red-500 hover:bg-red-500 hover:text-white font-semibold py-3 rounded-xl transition"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}