"use client";

import Image from "next/image";

// About Section (Hero)
function AboutSection() {
    return (
        <section
            id="about"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 bg-card"
        >
            {/* Left: Image with frame */}
            <div className="relative flex justify-center lg:justify-end pr-0 lg:pr-12">
                <div className="relative w-72 h-80 sm:w-80 sm:h-96">
                    <div className="absolute inset-0 border-[8px] border-background z-20 overflow-hidden rounded-md">
                        <Image
                            src="/images/dp1.png"
                            alt="Madhavi Sharma"
                            fill
                            className="object-cover grayscale-[15%] contrast-110"
                            priority
                            sizes="(max-width: 640px) 100vw, 320px"
                        />
                    </div>
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-500 z-10 clip-triangle" />
                    <div className="absolute -bottom-3 -right-3 w-1/2 h-1/2 border-r-4 border-b-4 border-orange-400/30 z-0 rounded-bl-md" />
                </div>
                <style jsx>{`
                    .clip-triangle {
                        clip-path: polygon(0 100%, 100% 100%, 0 0);
                    }
                `}</style>
            </div>
            {/* Right: Text */}
            <div className="space-y-6 text-center lg:text-left">
                <div>
                    <span className="text-muted-foreground uppercase tracking-widest text-sm font-semibold">
                        About Me
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 leading-tight">
                        Why Hire Me for Your <br className="hidden sm:block" />
                        Next Project?
                    </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 text-lg">
                    I am Madhavi Sharma, a dedicated Software Developer helping businesses and individuals transform digital ideas into engaging products using modern web tools.
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 text-lg">
                    My expertise lies in building scalable full-stack applications (React.js, Next.js, Node.js, TypeScript, MongoDB, Tailwind CSS, and more), delivering clean UI and robust backend solutions for startups and established teams alike.
                </p>
                <div className="pt-4">
                    <a
                        href="#contact"
                        className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded shadow-lg transition-all transform hover:-translate-y-1"
                    >
                        Let&apos;s Connect
                    </a>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
