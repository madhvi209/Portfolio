"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
    const router = useRouter()

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="max-w-md w-full text-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-9xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                        404
                    </h1>
                    <h2 className="text-3xl font-bold text-foreground">Page Not Found</h2>
                    <p className="text-muted-foreground">
                        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
                    >
                        <Home className="w-5 h-5" />
                        Go Home
                    </Link>
                    <button
                        onClick={() => router.back()}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors font-medium"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </div>

                <div className="pt-8">
                    <p className="text-sm text-muted-foreground">
                        If you believe this is an error, please contact support.
                    </p>
                </div>
            </div>
        </div>
    )
}

