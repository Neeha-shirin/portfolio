import { useState, useEffect, useRef } from "react";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaLaptopCode,
  FaEnvelope,
  FaLinkedin,
  FaArrowDown,
  FaComment,
  FaExternalLinkAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiDjango,
  SiFastapi,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiPostgresql,
  SiGodotengine,
} from "react-icons/si";
import { MdApi, MdDevices } from "react-icons/md";
import { DiGo } from "react-icons/di";

// Asset imports (replace these with your actual image paths)
import profileImg from "./assets/profile.jpg";
import skinStudioImg from "./assets/skinstudio.jpg";
import employeeImg from "./assets/employee.jpg";
import studentImg from "./assets/student.jpg";
import foodImg from "./assets/food.jpg";
import learningImg from "./assets/learning.jpg";
import estateImg from "./assets/estate.jpg";
import tutorImg from "./assets/tutor.jpg";
import hmediaImg from "./assets/hmedia.jpg";
import prayanzImg from "./assets/prayanz.jpg";

// Skills Component with original colors
function Skills() {
  const skills = [
    { name: "React", icon: <FaReact size={40} className="text-[#61DAFB]" />, color: "#61DAFB" },
    { name: "Python", icon: <FaPython size={40} className="text-[#3776AB]" />, color: "#3776AB" },
    { name: "Django", icon: <SiDjango size={40} className="text-[#092E20]" />, color: "#092E20" },
    { name: "Django REST", icon: <MdApi size={40} className="text-[#ff1709]" />, color: "#ff1709" },
    { name: "FastAPI", icon: <SiFastapi size={40} className="text-[#009688]" />, color: "#009688" },
    { name: "JavaScript", icon: <FaJs size={40} className="text-[#F7DF1E]" />, color: "#F7DF1E" },
    { name: "HTML5", icon: <FaHtml5 size={40} className="text-[#E34F26]" />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt size={40} className="text-[#1572B6]" />, color: "#1572B6" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-[#06B6D4]" />, color: "#06B6D4" },
    { name: "Bootstrap", icon: <FaBootstrap size={40} className="text-[#7952B3]" />, color: "#7952B3" },
    { name: "MySQL", icon: <SiMysql size={40} className="text-[#4479A1]" />, color: "#4479A1" },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} className="text-[#4169E1]" />, color: "#4169E1" },
    { name: "Git", icon: <FaGitAlt size={40} className="text-[#F05032]" />, color: "#F05032" },
    { name: "GitHub", icon: <FaGithub size={40} className="text-white" />, color: "#ffffff" },
    { name: "REST API", icon: <MdApi size={40} className="text-[#00ACC1]" />, color: "#00ACC1" },
    { name: "Responsive", icon: <MdDevices size={40} className="text-[#4CAF50]" />, color: "#4CAF50" },
    { name: "UI/UX", icon: <FaLaptopCode size={40} className="text-[#FF6D00]" />, color: "#FF6D00" },
    { name: "Full Stack", icon: <FaLaptopCode size={40} className="text-[#9C27B0]" />, color: "#9C27B0" },
    { name: "Postman", icon: <SiPostman size={40} className="text-[#FF6C37]" />, color: "#FF6C37" },
    { name: "GoDaddy", icon: <DiGo size={40} className="text-[#1EBDBC]" />, color: "#1EBDBC" },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block">
            Technical Arsenal
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-4 text-base max-w-2xl mx-auto">
            Core technologies and frameworks I leverage to build enterprise-grade solutions
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 flex flex-col items-center justify-center gap-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${skill.color}10, ${skill.color}05)`,
              }}
            >
              <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-xs md:text-sm text-center text-gray-300 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </h3>
              <div 
                className="absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ backgroundColor: skill.color }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main Portfolio Component
export default function ProfessionalPortfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const featuredProjects = [
    {
      img: tutorImg,
      title: "Tutor Near Me",
      description:
        "Full-stack educational platform connecting tutors with students, featuring real-time messaging and appointment scheduling.",
      technologies: ["React", "Django REST", "MySQL", "WebSockets"],
      link: "https://tnm-frontend.tutor-nearme.com/",
      github: "https://github.com/Neeha-shirin/tutor-near-me",
    },
    {
      img: hmediaImg,
      title: "Channel H media",
      description:
        "A full-stack news platform that delivers the latest news and updates, featuring real-time content delivery and a responsive user interface.",
      technologies: ["React", "FastAPI", "MySQL", "WebSockets"],
      link: "https://channelhmedia.in/",
    },
    {
      img: prayanzImg,
      title: "Prayanz Holidays",
      description:
        "A modern tour and travel platform offering customized holiday packages, destination planning, hotel booking, and seamless travel experiences.",
      technologies: ["Django", "Chart.js", "PostgreSQL", "Bootstrap"],
      link: "https://prayanzholidays.com/",
     
    },
    {
      img: estateImg,
      title: "Magic Mansion",
      description:
        "Comprehensive real estate portal with advanced property search, virtual tours, and agent management systems.",
      technologies: ["Django", "JavaScript", "PostgreSQL", "Map API"],
      link: "https://magicmansion.ae/",
      
    },
    {
      img: skinStudioImg,
      title: "Skin Studio E-commerce",
      description:
        "Full-featured online store with secure payment integration, inventory management, and customer analytics dashboard.",
      technologies: ["Django", "Stripe API", "PostgreSQL", "Redis"],
      link: "https://ecommerce-pp7v.onrender.com/",
      
    },
    {
      img: foodImg,
      title: "Recipe Discovery Platform",
      description:
        "Interactive React application for recipe search, meal planning, and nutritional analysis using external food APIs.",
      technologies: ["React", "REST APIs", "CSS3", "Local Storage"],
      link: "https://neeha-shirin.github.io/food-web/",
      
    },
    {
      img: learningImg,
      title: "Learning Management System",
      description:
        "Web-based educational platform for student progress tracking, course management, and automated assignment distribution.",
      technologies: ["Django", "Tailwind CSS", "PostgreSQL", "Chart.js"],
      link: "https://github.com/Neeha-shirin/maklearn-student-app",
      
    },
    
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-5">
            <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Neeha <span className="text-blue-500">Shirin</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-500"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 transform transition-transform duration-300 ${
                    activeSection === item.toLowerCase() ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delay"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium animate-pulse-slow">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
                  Full Stack Developer
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white">Hi, I'm </span>
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                    Neeha Shirin
                  </span>
                </h1>
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <p className="text-xl lg:text-2xl text-gray-300 font-light">
                  Full Stack Developer
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <p className="text-gray-300 leading-relaxed text-base">
                  Enterprise Software Engineer specializing in enterprise-grade web applications and scalable solutions. 
                  With extensive experience in Python, Django, React, REST APIs, and PostgreSQL, I architect robust 
                  systems that drive business growth and deliver exceptional digital experiences.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#projects"
                  className="group relative px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaArrowDown className="animate-bounce" /> View Portfolio
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2 hover:bg-gray-800/50"
                >
                  <FaComment /> Let's Talk
                </a>
              </div>
            </div>

            <div ref={addToRefs} className="flex justify-center lg:justify-end animate-slide-in-right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative">
                  <img
                    src={profileImg}
                    alt="Neeha Shirin"
                    className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-gray-800 shadow-2xl group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-3 shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-white whitespace-nowrap">
                        Available for work
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Featured <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              A portfolio of sophisticated web applications demonstrating technical excellence
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-gray-600 flex flex-col h-full hover:transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-48 flex-shrink-0">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <div className="flex gap-2 w-full">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-white text-gray-900 px-3 py-2 rounded-lg font-semibold text-center text-xs flex items-center justify-center gap-2 hover:bg-gray-100 transition"
                        >
                          <FaExternalLinkAlt size={12} /> view website 
                        </a>
                      )}
                      
                    </div>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4 text-sm flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md border border-gray-600 font-medium hover:bg-blue-500/20 hover:text-blue-300 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Let's Create <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Impact</span>
            </h2>
            <div className="w-16 h-0.5 bg-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
              Ready to discuss how we can transform your vision into exceptional digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a
                href="mailto:neehasherin987@gmail.com"
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 overflow-hidden"
              >
                <FaEnvelope /> Send Email
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
              <a
                href="https://www.linkedin.com/in/neeha-shirin-b04989327/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2 hover:bg-gray-800/50"
              >
                <FaLinkedin className="text-[#0077B5]" /> LinkedIn
              </a>
              <a
                href="https://github.com/Neeha-shirin"
                target="_blank"
                className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2 hover:bg-gray-800/50"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-xs">
            © 2025 Neeha Shirin — Professional Full Stack Developer
          </p>
        </div>
      </footer>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 6s ease-in-out infinite 3s;
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}