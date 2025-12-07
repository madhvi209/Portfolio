"use client"

import { useEffect, useState } from "react"

const roles = [
    "Software Engineer",
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "Web Developer",
]

export default function TypingAnimation() {
    const [displayText, setDisplayText] = useState("")
    const [roleIndex, setRoleIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentRole = roles[roleIndex]
        const speed = isDeleting ? 50 : 100

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < currentRole.length) {
                    setDisplayText(currentRole.slice(0, charIndex + 1))
                    setCharIndex(charIndex + 1)
                } else {
                    setIsDeleting(true)
                }
            } else {
                if (charIndex > 0) {
                    setDisplayText(currentRole.slice(0, charIndex - 1))
                    setCharIndex(charIndex - 1)
                } else {
                    setIsDeleting(false)
                    setRoleIndex((prev) => (prev + 1) % roles.length)
                }
            }
        }, speed)

        return () => clearTimeout(timer)
    }, [charIndex, isDeleting, roleIndex])

    return (
        <div className="h-16 flex items-center">
            <h1 className="text-4xl md:text-5xl font-bold">
                {displayText}
                <span className="animate-pulse">|</span>
            </h1>
        </div>
    )
}
