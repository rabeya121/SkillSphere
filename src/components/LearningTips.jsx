import { FaBullseye, FaClock, FaPencilAlt, FaThumbtack } from "react-icons/fa";

const LearningTips = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-2 flex items-center justify-center gap-2">
          <FaThumbtack className="text-purple-500" /> Learning Tips
        </h2>
        <p className="text-center text-gray-500 mb-10">Study smarter, not harder</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <FaBullseye className="text-white text-2xl" />, bg: "from-purple-500 to-purple-700", title: "Set Clear Goals", desc: "Define what you want to achieve before starting a course. Clear goals keep you focused and motivated." },
            { icon: <FaClock className="text-white text-2xl" />, bg: "from-orange-400 to-orange-600", title: "Manage Your Time", desc: "Dedicate specific hours each day to learning. Consistency is more important than long study sessions." },
            { icon: <FaPencilAlt className="text-white text-2xl" />, bg: "from-pink-500 to-pink-700", title: "Take Notes", desc: "Write down key concepts while learning. Notes help you retain information and review later." },
          ].map((tip, index) => (
            <div key={index} className="bg-white border border-purple-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tip.bg} flex items-center justify-center mb-5 shadow-md`}>
                {tip.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningTips;