// import HeroSlider from "@/components/Hero";
// import Link from "next/link";
// import courses from "../lib/courses";
// import {
//   FaStar,
//   FaClock,
//   FaChalkboardTeacher,
//   FaUsers,
//   FaBullseye,
//   FaFire,
//   FaPencilAlt,
//   FaThumbtack,
//   FaTrophy,
// } from "react-icons/fa";
// import { MdOutlineSchool } from "react-icons/md";

// const popularCourses = [...courses]
//   .sort((a, b) => b.rating - a.rating)
//   .slice(0, 3);

// export default function HomePage() {
//   return (
//     <main>
      
//       <HeroSlider />

//       {/* Stats section */}
//       <section className="bg-gradient-to-r from-[#4c1d95] via-[#6d28d9] to-[#7c3aed] py-12 px-6">
//         <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
//           {[
//             {
//               value: "50K+",
//               label: "Students",
//               icon: <FaUsers className="text-3xl text-white" />,
//             },
//             {
//               value: "200+",
//               label: "Courses",
//               icon: <MdOutlineSchool className="text-3xl text-white" />,
//             },
//             {
//               value: "50+",
//               label: "Instructors",
//               icon: <FaChalkboardTeacher className="text-3xl text-white" />,
//             },
//             {
//               value: "4.8",
//               label: "Average Rating",
//               icon: <FaStar className="text-3xl text-white" />,
//             },
//           ].map((stat, i) => (
//             <div
//               key={i}
//               className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-6 text-center hover:bg-white/20 transition"
//             >
//               <div className="w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center mx-auto mb-3">
//                 {stat.icon}
//               </div>
//               <p className="text-3xl font-bold text-white">{stat.value}</p>
//               <p className="text-purple-200 text-sm mt-1">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Popular Courses section */}
//       <section className="py-16 px-6 bg-[#f5f3ff]">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center text-purple-800 mb-2 flex items-center justify-center gap-2">
//             <FaFire className="text-orange-400" /> Popular Courses
//           </h2>
//           <p className="text-center text-gray-500 mb-10">
//             Our top rated courses loved by thousands of students
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {popularCourses.map((course) => (
//               <div
//                 key={course.id}
//                 className="bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
//               >
//                 <div className="relative">
//                   <img
//                     src={course.image}
//                     alt={course.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <span className="absolute top-3 left-3 text-xs bg-purple-600 text-white font-semibold px-3 py-1 rounded-full shadow">
//                     {course.category}
//                   </span>
//                   <span className="absolute top-3 right-3 text-xs bg-white text-purple-600 font-semibold px-3 py-1 rounded-full shadow">
//                     {course.level}
//                   </span>
//                 </div>
//                 <div className="p-5 flex flex-col flex-1">
//                   <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">
//                     {course.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 flex items-center gap-2 mb-2">
//                     <FaChalkboardTeacher className="text-purple-500" />{" "}
//                     {course.instructor}
//                   </p>
//                   <p className="text-sm text-gray-400 line-clamp-2 mb-4">
//                     {course.description}
//                   </p>
//                   <div className="flex items-center justify-between mt-auto mb-4 bg-purple-50 rounded-xl px-4 py-2">
//                     <span className="flex items-center gap-1 text-purple-600 font-semibold text-sm">
//                       <FaStar /> {course.rating}
//                     </span>
//                     <span className="flex items-center gap-1 text-gray-400 text-sm">
//                       <FaClock /> {course.duration}
//                     </span>
//                     <span className="flex items-center gap-1 text-gray-400 text-sm">
//                       <FaUsers /> {course.students?.toLocaleString()}
//                     </span>
//                   </div>
//                   <div className="mt-auto mb-3">
//                     <span className="text-xl font-bold text-green-600">
//                       {course.price}
//                     </span>
//                   </div>
//                   <Link
//                     href={`/main/courses/${course.id}`}
//                     className="block text-center bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl text-base font-semibold transition"
//                   >
//                     View Details →
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-10">
//             <Link
//               href="/main/courses"
//               className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition"
//             >
//               View All Courses
//             </Link>
//           {/* </div> */}
//         </div>
//       </section>

//       {/* Learning Tips section */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center text-purple-800 mb-2 flex items-center justify-center gap-2">
//             <FaThumbtack className="text-purple-500" /> Learning Tips
//           </h2>
//           <p className="text-center text-gray-500 mb-10">
//             Study smarter, not harder
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               {
//                 icon: <FaBullseye className="text-white text-2xl" />,
//                 bg: "from-purple-500 to-purple-700",
//                 title: "Set Clear Goals",
//                 desc: "Define what you want to achieve before starting a course. Clear goals keep you focused and motivated.",
//               },
//               {
//                 icon: <FaClock className="text-white text-2xl" />,
//                 bg: "from-orange-400 to-orange-600",
//                 title: "Manage Your Time",
//                 desc: "Dedicate specific hours each day to learning. Consistency is more important than long study sessions.",
//               },
//               {
//                 icon: <FaPencilAlt className="text-white text-2xl" />,
//                 bg: "from-pink-500 to-pink-700",
//                 title: "Take Notes",
//                 desc: "Write down key concepts while learning. Notes help you retain information and review later.",
//               },
//             ].map((tip, index) => (
//               <div
//                 key={index}
//                 className="bg-white border border-purple-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//               >
//                 <div
//                   className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tip.bg} flex items-center justify-center mb-5 shadow-md`}
//                 >
//                   {tip.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">
//                   {tip.title}
//                 </h3>
//                 <p className="text-gray-500 text-sm leading-relaxed">
//                   {tip.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Top Instructors */}
//       <section className="py-16 px-6 bg-[#f5f3ff]">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center text-purple-800 mb-2 flex items-center justify-center gap-2">
//             <FaTrophy className="text-yellow-500" /> Top Instructors
//           </h2>
//           <p className="text-center text-gray-500 mb-10">
//             Learn from the best in the industry
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               {
//                 name: "Ayesha Marzan",
//                 subject: "Web Development",
//                 rating: "4.8",
//                 students: "12.5K",
//                 img: "/images/in-1.jpg",
//               },
//               {
//                 name: "Bicrom Haq",
//                 subject: "UI/UX Design",
//                 rating: "4.9",
//                 students: "8.9K",
//                 img: "/images/in-2.jpg",
//               },
//               {
//                 name: "Rabbi Khan",
//                 subject: "Digital Marketing",
//                 rating: "4.7",
//                 students: "6.7K",
//                 img: "/images/in-3.jpg",
//               },
//               {
//                 name: "Karim Ahmed",
//                 subject: "Data Science",
//                 rating: "4.6",
//                 students: "9.8K",
//                 img: "/images/in-4.jpg",
//               },
//             ].map((instructor, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl p-6 text-center shadow-sm border border-purple-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
//               >
//                 {/* Image section */}
//                 <div className="relative w-20 h-20 mx-auto mb-4">
//                   <img
//                     src={instructor.img}
//                     alt={instructor.name}
//                     className="w-20 h-20 rounded-full object-cover border-4 border-purple-200 group-hover:border-purple-500 transition-all duration-300"
//                   />
//                   <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
//                 </div>

//                 {/* Info */}
//                 <h3 className="font-bold text-gray-900 text-base">
//                   {instructor.name}
//                 </h3>
//                 <span className="inline-block mt-1 mb-3 text-xs bg-purple-100 text-purple-600 font-semibold px-3 py-1 rounded-full">
//                   {instructor.subject}
//                 </span>

//                 {/* Divider */}
//                 <div className="border-t border-purple-100 pt-3">
//                   <div className="flex justify-center gap-4 text-sm">
//                     <div className="text-center">
//                       <p className="font-bold text-purple-600 flex items-center gap-1">
//                         <FaStar className="text-yellow-400" />{" "}
//                         {instructor.rating}
//                       </p>
//                       <p className="text-xs text-gray-400">Rating</p>
//                     </div>
//                     <div className="w-px bg-purple-100"></div>
//                     <div className="text-center">
//                       <p className="font-bold text-gray-700 flex items-center gap-1">
//                         <FaUsers className="text-purple-400" />{" "}
//                         {instructor.students}
//                       </p>
//                       <p className="text-xs text-gray-400">Students</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Trending Courses */}
//       <section className="py-16 px-6 bg-gradient-to-br from-[#4c1d95] via-[#6d28d9] to-[#7c3aed] text-white relative overflow-hidden">
      
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
//           <div className="absolute bottom-10 right-20 w-24 h-24 rounded-full bg-white"></div>
//           <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-white"></div>
//         </div>

//         <div className="max-w-6xl mx-auto relative z-10">
//           <h2 className="text-3xl font-bold text-center text-white mb-2 flex items-center justify-center gap-2">
//             <FaFire className="text-orange-400" /> Trending Now
//           </h2>
//           <p className="text-center text-purple-200 mb-10">
//             Most popular courses this week
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {courses.slice(0, 3).map((course) => (
//               <div
//                 key={course.id}
//                 className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition-all duration-300"
//               >
//                 <div className="flex items-center justify-between mb-3">
//                   <span className="text-xs bg-orange-400/30 text-white font-semibold px-3 py-1 rounded-full">
//                     {course.level}
//                   </span>
//                   <span className="text-xs text-purple-200 flex items-center gap-1">
//                     <MdOutlineSchool /> {course.category}
//                   </span>
//                 </div>
//                 <h3 className="text-base font-bold mb-2 line-clamp-2">
//                   {course.title}
//                 </h3>
//                 <p className="text-sm text-purple-200 mb-4 flex items-center gap-1">
//                   <FaChalkboardTeacher className="text-orange-400" />{" "}
//                   {course.instructor}
//                 </p>
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-orange-400 flex items-center gap-1">
//                     <FaStar /> {course.rating}
//                   </span>
//                   <span className="text-purple-200 flex items-center gap-1">
//                     <FaUsers /> {course.students?.toLocaleString()}
//                   </span>
//                 </div>
//                 <Link
//                   href={`/main/courses/${course.id}`}
//                   className="block text-center mt-4 bg-white/20 hover:bg-orange-400 text-white py-2 rounded-xl text-sm font-medium transition"
//                 >
//                   View Details →
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Wave top */}
//         <div className="absolute top-0 left-0 right-0 rotate-180">
//           <svg
//             viewBox="0 0 1440 40"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z"
//               fill="#f5f3ff"
//             />
//           </svg>
//         </div>
//       </section>
//     </main>
//   );
// }





import HeroSlider from "@/components/Hero";
import Stats from "@/components/Stats";
import PopularCourses from "@/components/PopularCourses";
import LearningTips from "@/components/LearningTips";
import TopInstructors from "@/components/TopInstructors";
import TrendingCourses from "@/components/TrendingCourses";

export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <Stats />
      <PopularCourses />
      <LearningTips />
      <TopInstructors />
      <TrendingCourses />
    </main>
  );
}