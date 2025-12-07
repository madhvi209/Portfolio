import { Github, Linkedin, Instagram, Mail } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-card border-t border-border mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Madhavi Sharma</h3>
                        <p className="text-sm text-muted-foreground">
                            Full-stack developer crafting scalable web applications with modern technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#blogs" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Blogs
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="mailto:madhavi@example.com"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    madhavisharma207@gmail.com
                                </a>
                            </li>
                            <li className="text-muted-foreground">+91 7488167264</li>
                            <li className="text-muted-foreground">Noida, India</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-semibold mb-4">Follow</h4>
                        <div className="flex gap-4">
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">© 2025 Madhavi Sharma. All rights reserved.</p>
                    <p className="text-sm text-muted-foreground">Crafted with modern technologies and passion.</p>
                </div>
            </div>
        </footer>
    )
}
