"use client"

import { useEffect, useRef, useState } from "react"

const Code = () => (
  <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const skillCategories = [
  {
    title: "Programming Languages",
    color: "blue",
    skills: ["Python", "Java", "C#", "JavaScript", "SQL"],
  },
  {
    title: "Frontend Development",
    color: "purple",
    skills: ["React", "Angular", "HTML5/CSS", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Cloud & Infrastructure",
    color: "green",
    skills: ["AWS (EC2, S3)", "Azure Cloud", "Linux/Unix", "Windows Server"],
  },
  {
    title: "Database & Backend",
    color: "yellow",
    skills: ["SQL / MySQL / PostgreSQL", "MongoDB (NoSQL)", "REST APIs", "Spring Boot", "Database Design"],
  },
  {
    title: "Networking & Security",
    color: "red",
    skills: ["TCP/IP, DNS, DHCP", "Network Troubleshooting", "Firewalls & Security Groups"],
  },
  {
    title: "Tools & Automation",
    color: "cyan",
    skills: ["Git / GitHub", "PowerShell / Bash", "Visual Studio / VS Code", "Postman", "API Testing"],
  },
]

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/20 border-blue-500/30 text-blue-400",
  purple: "bg-purple-500/20 border-purple-500/30 text-purple-400",
  green: "bg-green-500/20 border-green-500/30 text-green-400",
  yellow: "bg-yellow-500/20 border-yellow-500/30 text-yellow-400",
  red: "bg-red-500/20 border-red-500/30 text-red-400",
  cyan: "bg-cyan-500/20 border-cyan-500/30 text-cyan-400",
}

export function SkillsSection() {
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
    <section id="skills" ref={sectionRef} className="py-16 sm:py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
            Technical Expertise
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
            Technical Skills
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            A comprehensive toolkit for building modern applications
          </p>
        </div>

        {/* Skills Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:border-white/20"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${colorMap[category.color]}`}>
                  <Code />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs sm:text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
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
