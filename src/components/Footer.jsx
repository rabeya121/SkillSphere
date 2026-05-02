import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdOutlineSchool, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-gray-300 pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <MdOutlineSchool className="text-purple-400 text-3xl" />
              <h2 className="text-2xl font-bold text-white">
                Skill<span className="text-orange-400">Sphere</span>
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm mb-4">
              Your ultimate platform for learning new skills from industry experts.
              Upgrade yourself and grow your career.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500 transition text-white text-sm">
                <FaYoutube />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 transition text-white text-sm">
                <FaFacebookF />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-sky-500 transition text-white text-sm">
                <FaTwitter />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-pink-500 transition text-white text-sm">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quik links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/" className="hover:text-orange-400 transition flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-400 rounded-full"></span>Home
                </Link>
              </li>
              <li>
                <Link href="/main/courses" className="hover:text-orange-400 transition flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-400 rounded-full"></span>All Courses
                </Link>
              </li>
              <li>
                <Link href="/main/profile" className="hover:text-orange-400 transition flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-400 rounded-full"></span>My Profile
                </Link>
              </li>
              <li>
                <Link href="/auth/login" className="hover:text-orange-400 transition flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-400 rounded-full"></span>Login
                </Link>
              </li>
              <li>
                <Link href="/auth/register" className="hover:text-orange-400 transition flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-400 rounded-full"></span>Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories section */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Categories
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="hover:text-orange-400 transition cursor-pointer flex items-center gap-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>Web Development
              </li>
              <li className="hover:text-orange-400 transition cursor-pointer flex items-center gap-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>UI/UX Design
              </li>
              <li className="hover:text-orange-400 transition cursor-pointer flex items-center gap-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>Data Science
              </li>
              <li className="hover:text-orange-400 transition cursor-pointer flex items-center gap-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>Digital Marketing
              </li>
              <li className="hover:text-orange-400 transition cursor-pointer flex items-center gap-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>Photography
              </li>
              <li className="hover:text-orange-400 transition cursor-pointer flex items-center gap-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>Business English
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MdEmail className="text-purple-400" />
                </div>
                <span>support@skillsphere.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MdPhone className="text-purple-400" />
                </div>
                <span>+88 01711223344</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MdLocationOn className="text-purple-400" />
                </div>
                <span>497/6 Ibrahimpur, Kafrul, Dhaka-1207</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© 2026 SkillSphere. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
              <span className="hover:text-white cursor-pointer transition">Cookies</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;