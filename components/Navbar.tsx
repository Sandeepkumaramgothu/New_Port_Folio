"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, Terminal } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"

const navItems = [
    { name: "About", href: "#hero" }, // Hero is top
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50)
    })

    // Smooth scroll handler
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault()
        if (href === "#hero") {
            window.scrollTo({ top: 0, behavior: "smooth" })
        } else {
            const element = document.querySelector(href)
            if (element) {
                element.scrollIntoView({ behavior: "smooth" })
            }
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container px-6 mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Terminal className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xl font-bold tracking-tight">Sandeep<span className="text-primary">.dev</span></span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleScroll(e, item.href)}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </a>
                    ))}
                    <Button variant="outline" size="sm" asChild>
                        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            Resume
                        </Link>
                    </Button>
                    <ThemeToggle />
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 md:hidden shadow-xl"
                >
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleScroll(e, item.href)}
                                className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                            >
                                {item.name}
                            </a>
                        ))}
                        <Button className="w-full mt-4" asChild>
                            <Link href="/resume.pdf" target="_blank">Download Resume</Link>
                        </Button>
                    </nav>
                </motion.div>
            )}
        </header>
    )
}
