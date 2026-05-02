
"use client";

import { useState } from "react";
import { useSession, updateUser } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaUser, FaImage, FaArrowLeft } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

export default function UpdateProfilePage() {
  const { data: session, isPending } = useSession();
  const user = session?.user;
  const router = useRouter();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [previewError, setPreviewError] = useState(false);

  const getAvatar = () => {
    const imgUrl = image || user?.image;
    if (imgUrl && imgUrl.startsWith("http")) return imgUrl;
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name || user?.name || "U")}&background=7c3aed&color=fff&size=128`;
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateUser({
        name: name || user?.name,
        image: image || user?.image,
      });
      toast.success("Profile updated successfully!");
      setTimeout(() => {
        router.push("/main/profile");
        router.refresh();
      }, 1000);
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen bg-[#f5f3ff] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    router.push("/auth/login");
    return null;
  }

  return (
    <main className="min-h-screen bg-[#f5f3ff] py-16 px-6">
      <Toaster position="top-center" />

      <div className="max-w-md mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <MdOutlineSchool className="text-purple-600 text-3xl" />
            <span className="text-2xl font-bold text-purple-700">
              Skill<span className="text-orange-500">Sphere</span>
            </span>
          </Link>
          <h2 className="text-2xl font-bold text-gray-800">Update Profile</h2>
          <p className="text-gray-500 text-sm mt-1">Update your name and photo</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-8">

          {/*Avatar*/}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img
                src={getAvatar()}
                alt="preview"
                className="w-24 h-24 rounded-full border-4 border-purple-200 object-cover shadow-md"
                onError={() => setPreviewError(true)}
              />
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center border-2 border-white">
                <FaImage className="text-white text-xs" />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-5">

            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Full Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-4 top-3.5 text-purple-400" />
                <input
                  type="text"
                  placeholder={user?.name || "Enter your name"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="off"
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition text-sm"
                />
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Photo URL
              </label>
              <div className="relative">
                <FaImage className="absolute left-4 top-3.5 text-purple-400" />
                <input
                  type="url"
                  placeholder={user?.image || "https://example.com/photo.jpg"}
                  value={image}
                  onChange={(e) => {
                    setImage(e.target.value);
                    setPreviewError(false);
                  }}
                  autoComplete="off"
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition text-sm"
                />
              </div>
            </div>

            {/* Update Button */}
            <button
              onClick={handleUpdate}
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 text-white font-semibold py-3 rounded-xl transition"
            >
              {loading ? "Updating..." : "Update Information"}
            </button>

            {/* Back Button */}
            <Link
              href="/main/profile"
              className="w-full flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-500 hover:border-purple-400 hover:text-purple-600 font-semibold py-3 rounded-xl transition"
            >
              <FaArrowLeft /> Back to Profile
            </Link>

          </div>
        </div>
      </div>
    </main>
  );
}