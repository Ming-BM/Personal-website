"use client"
import type React from "react"
import type { ComponentProps, ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react"

interface FooterLink {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

interface FooterSection {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: "Navigation",
    links: [
      { title: "About", href: "#about" },
      { title: "Skills", href: "#skills" },
      { title: "Projects", href: "#projects" },
      { title: "Experience", href: "#experience" },
    ],
  },
  {
    label: "Connect",
    links: [
      { title: "Email", href: "mailto:bimin@sheridancollege.ca", icon: MailIcon },
      { title: "Phone", href: "tel:+13653516300", icon: PhoneIcon },
      { title: "GitHub", href: "https://github.com/Ming-BM", icon: GithubIcon },
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/%E9%93%AD%E8%BE%BE-%E6%AF%95-02b545227/",
        icon: LinkedinIcon,
      },
    ],
  },
  {
    label: "Info",
    links: [
      { title: "Sheridan College", href: "#" },
      { title: "Software Development", href: "#" },
      { title: "GPA: 3.75", href: "#" },
      { title: "Grad 2027", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <div className="w-16 h-16 flex items-center justify-center bg-white text-black rounded-full font-bold text-2xl">
            MB
          </div>
          <p className="text-white/70 text-sm max-w-xs">
            Software Development & Network Engineering Student building efficient technical solutions.
          </p>
          <div className="text-muted-foreground mt-8 text-sm md:mt-0 md:block hidden">
            <p>© {new Date().getFullYear()} Mingda Bi. All rights reserved.</p>
          </div>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs">{section.label}</h3>
                <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="hover:text-foreground inline-flex items-center transition-all duration-300"
                        {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                      >
                        {link.icon && <link.icon className="me-1 size-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      <div className="md:hidden mt-8 text-center space-y-2">
        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Mingda Bi. All rights reserved.</p>
        <p className="text-muted-foreground text-xs">Oakville, ON, Canada</p>
      </div>

      <div className="hidden md:block mt-8 pt-6 border-t border-foreground/10 w-full">
        <p className="text-muted-foreground text-xs text-center">Based in Oakville, ON, Canada</p>
      </div>
    </footer>
  )
}

type ViewAnimationProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>["className"]
  children: ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return children
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
