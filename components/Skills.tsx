"use client"

import { motion } from "framer-motion"
import { skills } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-muted/30">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-primary">Arsenal</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive stack of tools and technologies I leverage to build intelligent solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-colors"
                        >
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                {/* Icon could go here based on category.name */}
                                <span className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                                {category.name}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <motion.div key={skill} variants={item}>
                                        <Badge variant="secondary" className="px-3 py-1 text-sm bg-background hover:bg-primary/20 hover:text-primary transition-colors cursor-default">
                                            {skill}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
