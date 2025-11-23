"use client"

import { useEffect, useRef, useState } from "react"

const Briefcase = () => (
  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const experiences = [
  {
    title: "LED System Technician",
    company: "LED-PRO TECH",
    location: "Mississauga, ON",
    period: "November 2024 - Present",
    highlights: [
      "Install, configure, and calibrate LED display systems, ensuring optimal hardware and controller performance across multiple client sites",
      "Perform technical troubleshooting for hardware, software, and network connectivity issues, minimizing system downtime through systematic diagnostics",
      "Provide end-user training and create technical documentation (quick-start guides, configuration logs) to facilitate knowledge transfer and reduce support requests",
      "Collaborate with sales and operations teams on site surveys and project implementations, ensuring compliance with safety protocols and technical specifications",
    ],
    skills: ["System Configuration", "Troubleshooting", "Technical Documentation", "Network Diagnostics"],
    color: "green",
  },
  {
    title: "Operations Supervisor - Water Treatment Facility",
    company: "Beijing Drainage Group - Huaifang Water Reclamation Plant",
    location: "Beijing, China",
    period: "August 2016 - July 2023",
    highlights: [
      "Coordinated cross-functional teams and managed daily operations in a high-stakes regulatory environment, demonstrating strong interpersonal and communication skills",
      "Monitored and analyzed operational data using SCADA systems and performance metrics to support decision-making and ensure system reliability",
      "Applied project management tools and methodologies to plan, track, and deliver operational improvements",
      "Prepared comprehensive technical reports and operational documentation for management and stakeholders",
      "Developed systematic problem-solving and troubleshooting approaches in a 24/7 critical infrastructure environment",
    ],
    skills: ["SCADA Systems", "Data Analysis", "Project Management", "Team Collaboration", "Technical Documentation"],
    color: "blue",
  },
]

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-16 sm:py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
            Professional Background
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
            Work Experience
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Building expertise across technical domains
          </p>
        </div>

        {/* Experience Timeline */}
        <div
          className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 hover:border-white/20"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${exp.color === "green" ? "bg-green-500/20" : "bg-blue-500/20"}`}>
                      <Briefcase />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{exp.title}</h3>
                  </div>
                  <p className="text-white/80 font-medium mb-1">{exp.company}</p>
                  <p className="text-white/60 text-sm">{exp.location}</p>
                </div>
                <div className="text-white/70 text-sm sm:text-base whitespace-nowrap">{exp.period}</div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                        exp.color === "green" ? "bg-green-400" : "bg-blue-400"
                      }`}
                    ></div>
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed">{highlight}</p>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs sm:text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
