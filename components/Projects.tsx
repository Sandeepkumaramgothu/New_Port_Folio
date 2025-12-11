"use client"

import { motion } from "framer-motion"
import { projects } from "@/lib/data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-muted/30">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-accent">Projects</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Showcasing practical applications of AI, ML, and Data Engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col overflow-hidden border-border/50 hover:border-accent/50 transition-all hover:shadow-[0_0_20px_-10px_theme('colors.accent.DEFAULT')]">
                                {/* Placeholder Image Area */}
                                <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center border-b border-border/50">
                                    <span className="text-4xl">🚀</span>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl">{project.title}</CardTitle>
                                    <CardDescription className="line-clamp-2 mt-2">{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="px-2 py-0.5 text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex gap-4 pt-4 border-t border-border/50">
                                    <Button variant="outline" size="sm" asChild className="w-full">
                                        <a href={project.github} target="_blank" rel="noreferrer">
                                            <Github className="w-4 h-4 mr-2" /> Code
                                        </a>
                                    </Button>
                                    <Button variant="neon" size="sm" asChild className="w-full">
                                        <a href={project.link} target="_blank" rel="noreferrer">
                                            <ExternalLink className="w-4 h-4 mr-2" /> Demo
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
