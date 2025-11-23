"use client"

import { useEffect, useRef, useState } from "react"

const User = () => (
  <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
)

const Briefcase = () => (
  <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-16 sm:py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
            Get to Know Me
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
            About Me
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            From Environmental Engineering to Software Development
          </p>
        </div>

        {/* Main Content Cards */}
        <div
          className={`grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Background Card */}
          <div className="group">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 h-full hover:bg-white/10 transition-all duration-500 hover:border-blue-400/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <User />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-400">My Journey</h3>
              </div>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4">
                I am a Software Development and Network Engineering student at Sheridan College with a 3.75 GPA. I'm
                passionate about cloud computing, systems administration, and full-stack development.
              </p>

              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                I used to be an environmental engineer at a water treatment plant. I switched careers to learn coding
                because of my interest in software technology. Although I only studied coding for one year in school, I
                had already studied coding knowledge on my own for a long time before that, and I am very confident in
                my ability to learn new knowledge.
              </p>
            </div>
          </div>

          {/* Philosophy Card */}
          <div className="group">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 h-full hover:bg-white/10 transition-all duration-500 hover:border-green-400/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-green-500/20">
                  <Briefcase />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-green-400">What I Bring</h3>
              </div>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                I'm proficient in multiple programming languages including Python, Java, and C#, familiar with AWS/Azure
                cloud platforms, and skilled in database management and network configuration.
              </p>

              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                I believe in building efficient and reliable technical solutions through continuous learning and
                hands-on practice.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Facts Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-xl sm:text-2xl font-bold text-white mb-2">Sheridan</div>
            <p className="text-white/70 text-xs sm:text-sm">College</p>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-xl sm:text-2xl font-bold text-white mb-2">3.75</div>
            <p className="text-white/70 text-xs sm:text-sm">GPA</p>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-xl sm:text-2xl font-bold text-white mb-2">2027</div>
            <p className="text-white/70 text-xs sm:text-sm">Expected Graduation</p>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-xl sm:text-2xl font-bold text-white mb-2">Oakville</div>
            <p className="text-white/70 text-xs sm:text-sm">ON, Canada</p>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 col-span-2 md:col-span-1">
            <div className="text-xl sm:text-2xl font-bold text-white mb-2">3</div>
            <p className="text-white/70 text-xs sm:text-sm">Languages</p>
          </div>
        </div>
      </div>
    </section>
  )
}
