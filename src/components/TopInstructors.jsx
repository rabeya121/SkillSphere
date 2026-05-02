import { FaStar, FaUsers, FaTrophy } from "react-icons/fa";

const TopInstructors = () => {
  return (
    <section className="py-16 px-6 bg-[#f5f3ff]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-2 flex items-center justify-center gap-2">
          <FaTrophy className="text-yellow-500" /> Top Instructors
        </h2>
        <p className="text-center text-gray-500 mb-10">Learn from the best in the industry</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Ayesha Marzan", subject: "Web Development", rating: "4.8", students: "12.5K", img: "/images/in-1.jpg" },
            { name: "Bicrom Haq", subject: "UI/UX Design", rating: "4.9", students: "8.9K", img: "/images/in-2.jpg" },
            { name: "Rabbi Khan", subject: "Digital Marketing", rating: "4.7", students: "6.7K", img: "/images/in-3.jpg" },
            { name: "Karim Ahmed", subject: "Data Science", rating: "4.6", students: "9.8K", img: "/images/in-4.jpg" },
          ].map((instructor, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-purple-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <img src={instructor.img} alt={instructor.name} className="w-20 h-20 rounded-full object-cover border-4 border-purple-200 group-hover:border-purple-500 transition-all duration-300" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <h3 className="font-bold text-gray-900 text-base">{instructor.name}</h3>
              <span className="inline-block mt-1 mb-3 text-xs bg-purple-100 text-purple-600 font-semibold px-3 py-1 rounded-full">
                {instructor.subject}
              </span>
              <div className="border-t border-purple-100 pt-3">
                <div className="flex justify-center gap-4 text-sm">
                  <div className="text-center">
                    <p className="font-bold text-purple-600 flex items-center gap-1">
                      <FaStar className="text-yellow-400" /> {instructor.rating}
                    </p>
                    <p className="text-xs text-gray-400">Rating</p>
                  </div>
                  <div className="w-px bg-purple-100"></div>
                  <div className="text-center">
                    <p className="font-bold text-gray-700 flex items-center gap-1">
                      <FaUsers className="text-purple-400" /> {instructor.students}
                    </p>
                    <p className="text-xs text-gray-400">Students</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;