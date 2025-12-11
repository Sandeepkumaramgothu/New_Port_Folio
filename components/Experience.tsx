"use client"

import { motion } from "framer-motion"
import { experience } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-background">
            <div className="container px-6 mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center"
                >
                    Professional <span className="text-secondary">Journey</span>
                </motion.h2>

                <div className="relative border-l border-primary/30 ml-4 md:ml-10 space-y-12">
                    {experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <span className="absolute -left-[5px] top-4 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />

                            <Card className="border-muted bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                        <CardTitle className="text-xl font-bold text-primary">{job.role}</CardTitle>
                                        <Badge variant="outline" className="w-fit">{job.period}</Badge>
                                    </div>
                                    <CardDescription className="text-lg font-semibold text-foreground">
                                        {job.company}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">{job.description}</p>
                                    <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
                                        {job.achievements.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
