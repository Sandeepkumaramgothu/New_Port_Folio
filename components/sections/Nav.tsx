"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-gradient">
                    AI<span className="text-primary">.Engineer</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:glow-text"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-white/10">
                        <Link href="https://github.com/Sandeepkumaramgothu" target="_blank">
                            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-white/5">
                                <Github className="w-5 h-5" />
                            </Button>
                        </Link>
                        <Link href="https://linkedin.com" target="_blank">
                            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-white/5">
                                <Linkedin className="w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10"
                    >
                        <div className="container mx-auto px-6 py-8 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-foreground/80 hover:text-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex items-center space-x-4 pt-4 mt-4 border-t border-white/10">
                                <Link href="https://github.com/Sandeepkumaramgothu" target="_blank">
                                    <Button variant="ghost" size="icon">
                                        <Github className="w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link href="https://linkedin.com" target="_blank">
                                    <Button variant="ghost" size="icon">
                                        <Linkedin className="w-5 h-5" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
