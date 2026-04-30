import HeroSlider from "@/components/Hero";
import Link from "next/link";
import courses from "../../lib/courses";

const popularCourses = [...courses]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3);

export default function HomePage() {
  return (
    <main>

      {/* Hero Slider */}
      <HeroSlider />

      {/* Stats */}
      <section className="bg-[#0B1120] text-white py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10">
          {[
            { value: "50K+", label: "Students" },
            { value: "200+", label: "Courses" },
            { value: "50+", label: "Instructors" },
            { value: "4.8⭐", label: "Average Rating" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-orange-400">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0B1120] mb-2">
            🔥 Popular Courses
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Our top rated courses loved by thousands of students
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <span className="text-xs bg-orange-100 text-orange-500 font-semibold px-2 py-1 rounded-full">
                    {course.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B1120] mt-3 mb-1">{course.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">👨‍🏫 {course.instructor}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-400 font-semibold">⭐ {course.rating}</span>
                    <span className="text-sm text-gray-400">⏱ {course.duration}</span>
                  </div>
                  <Link
                    href={`/main/courses/${course.id}`}
                    className="block text-center mt-4 bg-[#0B1120] hover:bg-[#1a2a4a] text-white py-2 rounded-lg text-sm font-medium transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/main/courses"
              className="border-2 border-[#0B1120] text-[#0B1120] hover:bg-[#0B1120] hover:text-white font-semibold px-8 py-3 rounded-lg transition"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Tips */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0B1120] mb-2">
            📌 Learning Tips
          </h2>
          <p className="text-center text-gray-500 mb-10">Study smarter, not harder</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🎯", title: "Set Clear Goals", desc: "Define what you want to achieve before starting a course. Clear goals keep you focused and motivated." },
              { icon: "⏰", title: "Manage Your Time", desc: "Dedicate specific hours each day to learning. Consistency is more important than long study sessions." },
              { icon: "📝", title: "Take Notes", desc: "Write down key concepts while learning. Notes help you retain information and review later." },
            ].map((tip, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition">
                <p className="text-4xl mb-4">{tip.icon}</p>
                <h3 className="text-lg font-bold text-[#0B1120] mb-2">{tip.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Instructors */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0B1120] mb-2">
            🏆 Top Instructors
          </h2>
          <p className="text-center text-gray-500 mb-10">Learn from the best in the industry</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "John Doe", subject: "Web Development", rating: "4.8", students: "12.5K" },
              { name: "Sarah Johnson", subject: "UI/UX Design", rating: "4.9", students: "8.9K" },
              { name: "Mike Wilson", subject: "Digital Marketing", rating: "4.7", students: "6.7K" },
              { name: "Emily Chen", subject: "Data Science", rating: "4.6", students: "9.8K" },
            ].map((instructor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-blue-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {instructor.name.charAt(0)}
                </div>
                <h3 className="font-bold text-[#0B1120]">{instructor.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{instructor.subject}</p>
                <div className="flex justify-center gap-4 mt-3 text-sm">
                  <span className="text-orange-400">⭐ {instructor.rating}</span>
                  <span className="text-gray-400">👥 {instructor.students}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Courses */}
      <section className="py-16 px-6 bg-[#0B1120] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">🔥 Trending Now</h2>
          <p className="text-center text-gray-400 mb-10">Most popular courses this week</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.slice(0, 3).map((course) => (
              <div key={course.id} className="border border-gray-700 rounded-xl p-5 hover:border-orange-400 transition">
                <span className="text-xs bg-orange-400/20 text-orange-400 font-semibold px-2 py-1 rounded-full">
                  {course.level}
                </span>
                <h3 className="text-lg font-bold mt-3 mb-1">{course.title}</h3>
                <p className="text-sm text-gray-400 mb-3">👨‍🏫 {course.instructor}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-orange-400">⭐ {course.rating}</span>
                  <span className="text-gray-400">👥 {course.students} students</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}