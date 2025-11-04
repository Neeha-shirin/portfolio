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
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef([]);

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

  const featuredProjects = [
    {
      img: tutorImg,
      title: "Tutor Near Me",
      description: "Full-stack educational platform connecting tutors with students, featuring real-time messaging and appointment scheduling.",
      technologies: ["React", "Django REST Framework", "MySQL", "WebSockets"],
      link: "https://tnm-frontend.tutor-nearme.com/",
      github: "https://github.com/Neeha-shirin/tutor-near-me"
    },
    {
      img: estateImg,
      title: "Magic Mansion",
      description: "Comprehensive real estate portal with advanced property search, virtual tours, and agent management systems.",
      technologies: ["Django", "JavaScript", "PostgreSQL", "Map Integration"],
      link: "https://magicmansion.ae/",
      github: "https://github.com/Neeha-shirin/magic-mansion"
    },
    {
      img: learningImg,
      title: "Learning Management System",
      description: "Web-based educational platform for student progress tracking, course management, and automated assignment distribution.",
      technologies: ["Django", "Tailwind CSS", "PostgreSQL", "Chart.js"],
      link: "https://github.com/Neeha-shirin/maklearn-student-app",
      github: "https://github.com/Neeha-shirin/maklearn-student-app"
    },
    {
      img: skinStudioImg,
      title: "Skin Studio E-commerce",
      description: "Full-featured online store with secure payment integration, inventory management, and customer analytics dashboard.",
      technologies: ["Django", "Stripe API", "PostgreSQL", "Redis"],
      link: "https://ecommerce-pp7v.onrender.com/",
      github: "https://github.com/Neeha-shirin/skin-studio"
    },
    {
      img: foodImg,
      title: "Recipe Discovery Platform",
      description: "Interactive React application for recipe search, meal planning, and nutritional analysis using external food APIs.",
      technologies: ["React", "External APIs", "CSS3", "Local Storage"],
      link: "https://neeha-shirin.github.io/food-web/",
      github: "https://github.com/Neeha-shirin/food-web"
    },
    {
      img: employeeImg,
      title: "Employee Management System",
      description: "Enterprise solution for attendance tracking, performance reporting, and workforce analytics with real-time dashboards.",
      technologies: ["Django", "Chart.js", "PostgreSQL", "Bootstrap"],
      link: "https://github.com/Neeha-shirin/workmanage",
      github: "https://github.com/Neeha-shirin/workmanage"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-2xl font-bold text-white tracking-tight">Neeha Shirin</div>
            <div className="hidden md:flex space-x-12">
              {['Home', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-500 border-b-2 border-blue-500' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                  Full Stack Developer
                </div> */}
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                   Hii, I am Neeha <span className="text-blue-500">Shirin</span>
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <p className="text-2xl lg:text-3xl text-gray-300 font-light">
                  Full Stack Developer
                </p>
                {/* <p className="text-xl text-gray-400 font-medium">
                  Python • Django • React • REST APIs • PostgreSQL
                </p> */}
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Enterprise Software Engineer specializing in enterprise-grade web applications and scalable solutions. With extensive experience in Python, Django, React, REST APIs, and PostgreSQL, I architect robust systems that drive business growth and deliver exceptional digital experiences.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 pt-6">
                {/* <a
                  href="#contact"
                  className="bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 border border-blue-500/30"
                >
                  Start Collaboration
                </a> */}
                <a
                  href="#projects"
                  className="bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 border border-blue-500/30"
                >
                  View Portfolio
                </a>
              </div>
            </div>

            <div 
              ref={addToRefs}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 rounded-3xl blur-3xl animate-pulse"></div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
                  <img
                    src={profileImg}
                    alt="Neeha Shirin - Full Stack Developer"
                    className="relative w-96 h-96 rounded-3xl object-cover border-8 border-gray-900 shadow-2xl z-10 hover:scale-105 transition-all duration-500 ease-out"
                  />
                </div>
                
                {/* Professional badge */}
                <div className="absolute -bottom-6 -right-6 bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-800">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-white">Available for Opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Enterprise <span className="text-blue-500">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              A portfolio of sophisticated web applications demonstrating technical excellence 
              and business-focused solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="group bg-gray-800 rounded-3xl shadow-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-gray-600 flex flex-col"
              >
                <div className="relative overflow-hidden flex-shrink-0">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-60 w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex gap-4 w-full">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-white text-gray-900 px-6 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl text-sm font-semibold text-center flex items-center justify-center gap-3"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            View Project
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 text-base flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-4 py-2 bg-gray-700 text-gray-300 text-sm rounded-full border border-gray-600 font-medium hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300"
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Let's Create <span className="text-blue-500">Impact</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto">
              Ready to discuss how we can transform your vision into exceptional digital solutions. 
              Let's connect and explore potential collaborations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-12">
              <a
                href="neehasherin987@gmail.com"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 border border-blue-500/30 flex items-center gap-4 text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/neeha-shirin-b04989327/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-xl font-semibold hover:border-gray-500 hover:bg-gray-900 transition-all duration-300 flex items-center gap-4 text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-6">Neeha Shirin</div>
            <p className="text-gray-400 text-xl mb-8">
              Enterprise Full Stack Developer • Python • Django • React • PostgreSQL
            </p>
            <div className="w-20 h-0.5 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-gray-600 text-sm">
              © 2024 Neeha Shirin. Professional portfolio showcasing enterprise software development expertise.
            </p>
          </div>
        </div>
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
    </div>
  );
}