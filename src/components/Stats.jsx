import { FaStar, FaClock, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";

const Stats = () => {
  return (
    <section className="bg-gradient-to-r from-[#4c1d95] via-[#6d28d9] to-[#7c3aed] py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { value: "50K+", label: "Students", icon: <FaUsers className="text-3xl text-white" /> },
          { value: "200+", label: "Courses", icon: <MdOutlineSchool className="text-3xl text-white" /> },
          { value: "50+", label: "Instructors", icon: <FaChalkboardTeacher className="text-3xl text-white" /> },
          { value: "4.8", label: "Average Rating", icon: <FaStar className="text-3xl text-white" /> },
        ].map((stat, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-6 text-center hover:bg-white/20 transition">
            <div className="w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center mx-auto mb-3">
              {stat.icon}
            </div>
            <p className="text-3xl font-bold text-white">{stat.value}</p>
            <p className="text-purple-200 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;