import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import { PageTransition } from "@/components/page-transition"
import { NavigationTransition } from "@/components/navigation-transition"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Dancing_Script, Caveat } from "next/font/google"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
})

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mingda Bi - Software Engineering Student | Portfolio",
  description:
    "Software Development and Network Engineering student at Sheridan College. Passionate about cloud computing, full-stack development, and systems administration. Explore my projects and experience.",
  generator: "v0.app",
  keywords: [
    "Software Engineering",
    "Full Stack Developer",
    "Cloud Computing",
    "AWS",
    "Azure",
    "React",
    "Python",
    "Java",
  ],
  authors: [{ name: "Mingda Bi" }],
  openGraph: {
    title: "Mingda Bi - Software Engineering Portfolio",
    description:
      "Software Development and Network Engineering student passionate about building efficient technical solutions",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased ${dancingScript.variable} ${caveat.variable}`}>
        <Suspense fallback={null}>
          <NavigationTransition />
          <PageTransition>{children}</PageTransition>
        </Suspense>
        <SpeedInsights />
      </body>
    </html>
  )
}
