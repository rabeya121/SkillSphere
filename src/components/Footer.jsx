import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-gray-300 pt-16 pb-8 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-6">

          {/* Brand */}
          <div className="max-w-full sm:max-w-[300px]">
            <h2 className="text-3xl font-bold text-white mb-4">
              Skill<span className="text-orange-400">Sphere</span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Your ultimate platform for learning new skills from industry experts.
              Upgrade yourself and grow your career with SkillSphere.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Courses</h4>
            <ul className="space-y-1.5 text-sm">
              <li className="hover:text-white cursor-pointer">Web Development</li>
              <li className="hover:text-white cursor-pointer">UI/UX Design</li>
              <li className="hover:text-white cursor-pointer">Data Science</li>
              <li className="hover:text-white cursor-pointer">Digital Marketing</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-1.5 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li>
                <Link href="/main/courses" className="hover:text-white">All Courses</Link>
              </li>
              <li>
                <Link href="/main/profile" className="hover:text-white">My Profile</Link>
              </li>
              <li>
                <Link href="/auth/login" className="hover:text-white">Login</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Social Links</h4>
            <div className="flex space-x-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black hover:bg-orange-400 cursor-pointer transition">
                <FaYoutube />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black hover:bg-orange-400 cursor-pointer transition">
                <FaFacebookF />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black hover:bg-orange-400 cursor-pointer transition">
                <FaTwitter />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black hover:bg-orange-400 cursor-pointer transition">
                <FaInstagram />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 SkillSphere. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;