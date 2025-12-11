"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Terminal } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

// Placeholder for the complex Neural Network 3D component
function NeuralNetworkMesh() {
    return (
        <mesh>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                    color="#0EA5E9"
                    attach="material"
                    distort={0.5}
                    speed={1.5}
                    roughness={0}
                    metalness={1}
                />
            </Sphere>
        </mesh>
    );
}

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-10" />
                <Canvas className="w-full h-full opacity-60">
                    <Suspense fallback={null}>
                        <NeuralNetworkMesh />
                    </Suspense>
                </Canvas>
            </div>

            {/* Content Overlay */}
            <div className="container relative z-20 px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-left"
                >
                    <div className="inline-flex items-center px-3 py-1 mb-6 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm">
                        <span className="w-2 h-2 mr-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-medium text-primary">Available for Hire</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Intelligence</span> <br />
                        at Scale
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                        Senior AI/ML Data Engineer building robust pipelines and deploying scalable machine learning models.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="#contact">
                            <Button size="lg" className="w-full sm:w-auto gap-2 group">
                                Let's Talk <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/resume.pdf" target="_blank">
                            <Button variant="neon" size="lg" className="w-full sm:w-auto gap-2">
                                Download CV <Download className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center gap-4 text-sm text-muted-foreground font-mono">
                        <Terminal className="w-4 h-4 text-primary" />
                        <span>Stack: Python, PyTorch, AWS, Docker, Kubernetes</span>
                    </div>
                </motion.div>

                {/* Hero Visual/Profile */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hidden lg:flex justify-center relative"
                >
                    <div className="relative w-80 h-80 rounded-full bg-gradient-to-tr from-primary to-secondary p-[2px] animate-spin-slow">
                        <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                            {/* Placeholder for Profile Image */}
                            <span className="text-9xl">👨‍💻</span>
                        </div>
                    </div>
                    {/* Orbiting Icons Effect could go here */}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground text-sm flex flex-col items-center gap-2 cursor-pointer"
            >
                <span>Scroll to Explore</span>
                <div className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-1 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
