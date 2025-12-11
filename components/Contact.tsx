"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { personalInfo } from "@/lib/data"
import { Github, Linkedin, Mail, Send } from "lucide-react"

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />

            <div className="container px-6 mx-auto">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's <span className="text-primary">Connect</span></h2>
                        <p className="text-muted-foreground mb-8">
                            I'm currently opening to new opportunities and collaborations in AI/ML domain.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-4">
                            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                    <Mail className="w-5 h-5" />
                                </div>
                                {personalInfo.email}
                            </a>

                            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                    <Linkedin className="w-5 h-5" />
                                </div>
                                LinkedIn Profile
                            </a>

                            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                    <Github className="w-5 h-5" />
                                </div>
                                GitHub Profile
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-card border border-border rounded-xl p-8 shadow-lg"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="John Doe" className="bg-background/50" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="Your message..." className="bg-background/50 min-h-[120px]" />
                            </div>
                            <Button type="submit" className="w-full gap-2">
                                Send Message <Send className="w-4 h-4" />
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
