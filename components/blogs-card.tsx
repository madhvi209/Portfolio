import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface Blog {
    id: number
    title: string
    description: string
    image: string
}

interface BlogCardProps {
    blog: Blog
}

export default function BlogCard({ blog }: BlogCardProps) {
    return (
        <article className="group relative h-full overflow-hidden rounded-xl bg-white dark:bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-200 to-orange-100">
                <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content Container */}
            <div className="flex flex-col h-full p-5">
                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                    {blog.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 flex-grow line-clamp-3">{blog.description}</p>

                {/* Read More Button - Bottom Right */}
                <div className="flex justify-end">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform group-hover:translate-x-1">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Decorative Border Gradient */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300" />
        </article>
    )
}
