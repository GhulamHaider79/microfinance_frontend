import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


export default function FooterSection() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 py-12 mt-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold">
           
              Saylani <span className="text-amber-700">Microfinance</span>
          </h2>
          <p className="mt-4 text-gray-400 leading-7">
            Building visually appealing, high-performing, and modern web
            experiences with React, Tailwind, and Framer Motion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 ">
            <li>
              <a
                href="/"
                className="hover:text-accent transition"
              >
                Home
              </a>
            </li>

             <li>
              <a
                href="login"
                className="hover:text-accent transition"
              >
                Login
              </a>
            </li>

            <li>
              <a
                href="Signup"
                className="hover:text-accent transition"
              >
               SignUp
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-accent transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-accent transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
          <div className="flex space-x-5 text-2xl">

            <a 
             target="_blank"
  rel="noopener noreferrer"
            href="https://www.facebook.com/share/1Ajmv2Fyy5/" className="hover:text-accent transition">
              <FaFacebook />
            </a>

            <a 
             target="_blank"
  rel="noopener noreferrer"
            href="https://github.com/GhulamHaider79" 
            className="hover:text-accent transition">
              <FaGithub />
            </a>

            <a 
             target="_blank"
  rel="noopener noreferrer"
            href="www.linkedin.com/in/ghulam-haider-cpl11201" 
            className="hover:text-accent transition">
              <FaLinkedin />
            </a>

            <a 
             target="_blank"
  rel="noopener noreferrer"
            href="https://www.instagram.com/haider11201?igsh=MWd4eHZhbDlwcmlraQ==" 
            className="hover:text-accent transition">
              <FaInstagram />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} <span className="text-accent">Saylani</span> — All Rights Reserved.
      </div>
    </footer>
  );
}
