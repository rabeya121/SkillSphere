// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { signUp, signIn } from "@/lib/auth-client";
// import { FaEnvelope, FaLock, FaUser, FaImage } from "react-icons/fa";
// import { MdOutlineSchool } from "react-icons/md";
// import toast, { Toaster } from "react-hot-toast";

// export default function RegisterPage() {
//   const router = useRouter();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [photoURL, setPhotoURL] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const result = await signUp.email({
//         name,
//         email,
//         password,
//         image: photoURL || "",
//       });

//       if (result?.error) {
//         toast.error(result.error.message || "Registration failed!");
//       } else {
//         toast.success("Registration successful! Please login.");
//         router.push("/auth/login");
//       }
//     } catch (error) {
//       toast.error("Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       await signIn.social({
//         provider: "google",
//         callbackURL: "/",
//       });
//     } catch (error) {
//       toast.error("Google login failed!");
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f5f3ff] flex items-center justify-center px-4 py-16">
//       <Toaster position="top-center" />

//       <div className="w-full max-w-md">
//         {/* Logo */}
//         <div className="text-center mb-8">
//           <Link href="/" className="inline-flex items-center gap-2">
//             <MdOutlineSchool className="text-purple-600 text-4xl" />
//             <span className="text-3xl font-bold text-purple-700">
//               Skill<span className="text-orange-500">Sphere</span>
//             </span>
//           </Link>
//           <h2 className="text-2xl font-bold text-gray-800 mt-4">
//             Create Account
//           </h2>
//           <p className="text-gray-500 text-sm mt-1">
//             Join SkillSphere and start learning today
//           </p>
//         </div>

//         {/* Card */}
//         <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-8">
//           {/* Google Button */}
//           <button
//             onClick={handleGoogleLogin}
//             className="w-full flex items-center justify-center gap-3 border-2 border-gray-200 hover:border-purple-400 text-gray-700 font-semibold py-3 rounded-xl transition mb-6"
//           >
//             <svg className="w-5 h-5" viewBox="0 0 24 24">
//               <path
//                 fill="#4285F4"
//                 d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//               />
//               <path
//                 fill="#34A853"
//                 d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//               />
//               <path
//                 fill="#FBBC05"
//                 d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
//               />
//               <path
//                 fill="#EA4335"
//                 d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//               />
//             </svg>
//             Continue with Google
//           </button>

//           {/* Divider */}
//           <div className="flex items-center gap-3 mb-6">
//             <div className="flex-1 h-px bg-gray-200"></div>
//             <span className="text-gray-400 text-sm">
//               or register with email
//             </span>
//             <div className="flex-1 h-px bg-gray-200"></div>
//           </div>

//           {/* Form */}
//           <div className="flex flex-col gap-4">
//             {/* Name */}
//             <div>
//               <label className="text-sm font-medium text-gray-700 mb-1 block">
//                 Full Name
//               </label>
//               <div className="relative">
//                 <FaUser className="absolute left-4 top-3.5 text-purple-400" />
//                 <input
//                   type="text"
//                   placeholder="Enter your full name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   autoComplete="off"
//                   className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition text-sm"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <label className="text-sm font-medium text-gray-700 mb-1 block">
//                 Email
//               </label>
//               <div className="relative">
//                 <FaEnvelope className="absolute left-4 top-3.5 text-purple-400" />
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   autoComplete="off"
//                   className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition text-sm"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Photo URL */}
//             <div>
//               <label className="text-sm font-medium text-gray-700 mb-1 block">
//                 Photo URL
//               </label>
//               <div className="relative">
//                 <FaImage className="absolute left-4 top-3.5 text-purple-400" />
//                 <input
//                   type="url"
//                   placeholder="https://example.com/photo.jpg"
//                   value={photoURL}
//                   onChange={(e) => setPhotoURL(e.target.value)}
//                   autoComplete="off"
//                   className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition text-sm"
//                 />
//               </div>
//               <p className="text-xs text-gray-400 mt-1 ml-1">
//                 💡 Paste any image link from the web
//               </p>
//             </div>

//             {/* Password */}
//             <div>
//               <label className="text-sm font-medium text-gray-700 mb-1 block">
//                 Password
//               </label>
//               <div className="relative">
//                 <FaLock className="absolute left-4 top-3.5 text-purple-400" />
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   autoComplete="new-password"
//                   className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition text-sm"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Register Button */}
//             <button
//               onClick={handleRegister}
//               disabled={loading}
//               className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 text-white font-semibold py-3 rounded-xl transition mt-2"
//             >
//               {loading ? "Creating account..." : "Register"}
//             </button>
//           </div>

//           {/* Login Link */}
//           <p className="text-center text-sm text-gray-500 mt-6">
//             Already have an account?{" "}
//             <Link
//               href="/auth/login"
//               className="text-purple-600 font-semibold hover:underline"
//             >
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUp, signIn } from "@/lib/auth-client";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaImage,
  FaEye,
  FaLightbulb,
  FaEyeSlash,
} from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [previewError, setPreviewError] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signUp.email({
        name,
        email,
        password,
        image: photoURL || "",
      });

      if (result?.error) {
        toast.error(result.error.message || "Registration failed!");
      } else {
        toast.success("Registration successful! Please login.");
        router.push("/auth/login");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      toast.error("Google login failed!");
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f3ff] flex items-center justify-center px-4 py-16">
      <Toaster position="top-center" />

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <MdOutlineSchool className="text-purple-600 text-4xl" />
            <span className="text-3xl font-bold text-purple-700">
              Skill<span className="text-orange-500">Sphere</span>
            </span>
          </Link>
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            Create Account
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Join SkillSphere and start learning today
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-8">
          {/* Google Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 border-2 border-gray-200 hover:border-purple-400 text-gray-700 font-semibold py-3 rounded-xl transition mb-6"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-gray-400 text-sm">
              or register with email
            </span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">
            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Full Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-4 top-3.5 text-purple-400" />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="off"
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition text-sm"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-3.5 text-purple-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition text-sm"
                  required
                />
              </div>
            </div>

            {/* Photo URL with Preview */}
            {/* Photo URL */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Photo URL
              </label>
              <div className="relative">
                <FaImage className="absolute left-4 top-3.5 text-purple-400" />
                <input
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  autoComplete="off"
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition text-sm"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1 ml-1 flex items-center gap-1">
                <FaLightbulb className="text-yellow-400" /> Paste any image link
                from the web
              </p>
            </div>

            {/* Password with Show/Hide */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-4 top-3.5 text-purple-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  className="w-full pl-11 pr-11 py-3 border border-gray-200 rounded-xl outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-gray-400 hover:text-purple-500 transition"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Register Button */}
            <button
              onClick={handleRegister}
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 text-white font-semibold py-3 rounded-xl transition mt-2"
            >
              {loading ? "Creating account..." : "Register"}
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-purple-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
