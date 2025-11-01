import { useState, useEffect, useRef } from "react";
import profileImg from "./assets/profile.jpg";
import skinStudioImg from "./assets/skinstudio.jpg";
import employeeImg from "./assets/employee.jpg";
import studentImg from "./assets/student.jpg";
import foodImg from "./assets/food.jpg";
import learningImg from "./assets/learning.jpg";
import estateImg from "./assets/estate.jpg";
import tutorImg from "./assets/tutor.jpg";

export default function ProfessionalPortfolio() {
  const [showCV, setShowCV] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef([]);

  const toggleCV = () => {
    setShowCV(!showCV);
    if (!showCV) {
      setTimeout(() => {
        document.getElementById('cv-section')?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
    }
  };

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const professionalSkills = {
    technical: [
      "Python & Django Framework",
      "React & Modern JavaScript (ES6+)",
      "RESTful API Development",
      "HTML5, CSS3, Responsive Design",
      "PostgreSQL & Database Design",
      "Bootstrap & Tailwind CSS"
    ],
    tools: [
      "Git Version Control",
      "Docker Containerization",
      "Google Cloud Platform",
      "Railway & Render Deployment",
      "Figma UI/UX Design",
      "cPanel & Domain Management"
    ]
  };

  const professionalExperience = [
    {
      period: "2024",
      company: "Makbig, Kannur, Kerala",
      role: "Web Developer",
      achievements: [
        "Developed and maintained a production-grade Student Management Application",
        "Engineered eCommerce solutions with Django featuring secure authentication systems",
        "Implemented custom admin interfaces with comprehensive CRUD operations and role-based access control",
        "Integrated payment processing systems and optimized database performance with PostgreSQL"
      ]
    },
    {
      period: "2025",
      company: "Dhanwis Techinfo Solutions, Kannur, Kerala",
      role: "Python Developer",
      achievements: [
        "Led full-stack development and deployment of a Real Estate Web Application on cPanel, managing domain configuration and production hosting",
        "Architected 'Find Tutor Near Me' platform using Django REST Framework backend and React frontend",
        "Designed secure REST APIs ensuring seamless frontend-backend integration and data integrity",
        "Implemented responsive user interfaces and optimized application performance for production environments"
      ]
    }
  ];

  const featuredProjects = [
    {
      img: tutorImg,
      title: "Tutor Near Me",
      description: "Full-stack educational platform connecting tutors with students, built with React frontend and Django REST API backend.",
      technologies: ["React","Python", "Django REST Framework", "MySQL"],
      link: "https://tnm-frontend.tutor-nearme.com/"
    },
    {
      img: estateImg,
      title: "Magic Mansion",
      description: "Comprehensive real estate portal featuring property listings, search functionality, and agent management systems.",
      technologies: ["Python","Django", "JavaScript", "HTML/CSS"],
      link: "https://magicmansion.ae/"
    },
    {
      img: learningImg,
      title: "Learning Management System",
      description: "Web-based educational platform for student progress tracking, course management, and assignment distribution.",
      technologies: ["Django", "Tailwind", "postgreSQL"],
      link: "https://github.com/Neeha-shirin/maklearn-student-app"
    },
    {
      img: skinStudioImg,
      title: "Skin Studio E-commerce",
      description: "Full-featured online store with secure payment integration, inventory management, and customer analytics.",
      technologies: ["Django", "Stripe API", "PostgreSQL"],
      link: "https://ecommerce-pp7v.onrender.com/"
    },
    {
      img: foodImg,
      title: "Recipe Discovery Platform",
      description: "Interactive React application for recipe search and meal planning using external food APIs.",
      technologies: ["React", "API", "CSS3"],
      link: "https://neeha-shirin.github.io/food-web/"
    },
    {
      img: employeeImg,
      title: "Employee Management System",
      description: "Enterprise solution for attendance tracking, performance reporting, and workforce analytics.",
      technologies: ["Django", "Chart.js", "postgreSQL"],
      link: "https://github.com/Neeha-shirin/workmanage"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex flex-col items-center px-4 py-8 lg:py-12">
      {/* Hero Section */}
      <div 
        ref={addToRefs}
        className={`flex flex-col items-center transition-all duration-1000 ease-out max-w-4xl w-full ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="relative mb-6">
          <img
            src={profileImg}
            alt="Neeha Shirin - Full Stack Developer"
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg relative z-10 hover:scale-105 transition-all duration-300 ease-out"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
          Neeha Shirin
        </h1>
        <div className="w-16 h-0.5 bg-blue-6000 mb-4 rounded-full"></div>
        <p className=" text-2xl text-gray-600 mb-6 text-center font-bold">
          Full Stack Developer
        </p>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 max-w-2xl mb-8">
          <p className="text-gray-700 text-center leading-relaxed text-base">
            Passionate Full Stack Developer specializing in building scalable web applications 
            with <strong className="text-gray-900 font-semibold">Python, Django, REST API and React</strong>. 
            I deliver robust solutions with clean code, responsive design, and optimal user experiences.
          </p>
        </div>

        {/* CV Toggle */}
        <button
          onClick={toggleCV}
          className="bg-gray-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow mb-12 flex items-center gap-2 group text-sm"
        >
          <span>{showCV ? "Hide Professional Profile" : "View Professional Profile"}</span>
          <svg 
            className={`w-4 h-4 transition-transform duration-300 ${showCV ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Professional Profile Section */}
      <div 
        id="cv-section"
        ref={addToRefs}
        className={`w-full max-w-4xl transition-all duration-500 ease-in-out ${
          showCV 
            ? 'opacity-100 max-h-[2000px] mb-12 translate-y-0' 
            : 'opacity-0 max-h-0 mb-0 overflow-hidden -translate-y-4'
        }`}
      >
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Professional Profile</h2>
            <div className="w-12 h-0.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          {/* Skills Section */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Technical Expertise</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Development Stack
                </h4>
                <ul className="space-y-2">
                  {professionalSkills.technical.map((skill, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  Tools & Platforms
                </h4>
                <ul className="space-y-2">
                  {professionalSkills.tools.map((tool, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700 text-sm">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Professional Experience</h3>
            <div className="space-y-6">
              {professionalExperience.map((exp, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-5 border border-gray-200 hover:border-gray-300 transition-all duration-200"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {exp.role}
                    </h4>
                    <span className="text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded text-sm mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium mb-4 text-sm">
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-3 text-gray-700 leading-relaxed text-sm">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div 
        ref={addToRefs}
        className="w-full max-w-6xl mt-8"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Projects</h2>
          <div className="w-12 h-0.5 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
            A curated collection of projects demonstrating full-stack development.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow transition-all duration-200 border border-gray-200 hover:border-gray-300 flex flex-col"
            >
              <div className="relative overflow-hidden flex-shrink-0">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-60 w-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded border border-gray-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium text-sm transition-all duration-200 group/link mt-auto hover:gap-3 border border-gray-300 hover:border-gray-400 px-3 py-2 rounded"
                  >
                    View Project
                    <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-600 border-t border-gray-200 pt-8 w-full max-w-4xl">
        <p className="mb-2 font-medium text-sm">© 2024 Neeha Shirin. All rights reserved.</p>
        <p className="text-xs text-gray-500">Full Stack Developer specializing in Python, Django & React</p>
      </footer>

      <style jsx>{`
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
        .animate-fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
    </section>
  );
}