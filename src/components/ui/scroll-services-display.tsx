"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion"

interface ServiceItem {
    badge: string
    title: string
    description: string
    cta: string
}

interface ScrollServicesDisplayProps {
    items: ServiceItem[]
}

export function ScrollServicesDisplay({ items }: ScrollServicesDisplayProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    // Scroll Logic
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    // Map scroll progress to index
    // We have N items.
    // 0 -> 1/N : Index 0
    // 1/N -> 2/N : Index 1
    // ...
    useTransform(scrollYProgress, (value) => {
        const total = items.length
        const index = Math.min(Math.floor(value * total), total - 1)
        if (index !== activeIndex) {
            setActiveIndex(index)
        }
    })

    // Listen to scrollYProgress change to update state
    // useTransform doesn't trigger state updates directly in render, we use an effect or onChange?
    // framer-motion useTransform returns a MotionValue. We can listen to it.

    useEffect(() => {
        return scrollYProgress.on("change", (latest) => {
            const total = items.length
            // Ensure we handle exactly 1.0 correctly (usually mapped to last index)
            const index = Math.min(Math.floor(latest * total), total - 1)
            setActiveIndex(index)
        })
    }, [scrollYProgress, items.length])


    // Mouse position for magnetic effect (legacy from testimonial, nice to keep)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 200 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    const numberX = useTransform(x, [-200, 200], [-20, 20])
    const numberY = useTransform(y, [-200, 200], [-10, 10])

    const handleMouseMove = (e: React.MouseEvent) => {
        // We need to target the sticky container for mouse move, which is inside
        // But since the parent is tall, let's just listen on the sticky wrapper?
        // Actually, let's keep it simple.
    }

    const current = items[activeIndex]

    return (
        // Tall container to allow scrolling
        // Height = 100vh * number of items (or slightly less to make it faster)
        // Let's say 200vh for 2 items is fine.
        <div
            ref={containerRef}
            className="relative w-full bg-background"
            style={{ height: `${items.length * 100}vh` }}
        >
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className="relative w-full max-w-5xl px-4 md:px-0">

                    {/* Oversized index number */}
                    <motion.div
                        className="absolute -left-8 top-1/2 -translate-y-1/2 text-[20rem] md:text-[28rem] font-bold text-foreground/[0.03] select-none pointer-events-none leading-none tracking-tighter"
                        style={{ x: numberX, y: numberY }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="block"
                            >
                                {String(activeIndex + 1).padStart(2, "0")}
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>

                    {/* Main content - asymmetric layout */}
                    <div className="relative flex flex-col md:flex-row">

                        {/* Left column - vertical text (Testimonial -> SERVICE) */}
                        <div className="hidden md:flex flex-col items-center justify-center pr-16 border-r border-border">
                            <motion.span
                                className="text-xs font-mono text-muted-foreground tracking-widest uppercase"
                                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                Services
                            </motion.span>

                            {/* Vertical progress line */}
                            <div className="relative h-32 w-px bg-border mt-8">
                                <motion.div
                                    className="absolute top-0 left-0 w-full bg-foreground origin-top"
                                    style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                                />
                            </div>
                        </div>

                        {/* Center - main content */}
                        <div className="flex-1 md:pl-16 py-12 flex flex-col justify-center">
                            {/* Badge (Company -> Badge) */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.4 }}
                                    className="mb-8"
                                >
                                    <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        {current.badge}
                                    </span>
                                </motion.div>
                            </AnimatePresence>

                            {/* Quote -> Description */}
                            <div className="relative mb-8 md:mb-12 min-h-[140px]">
                                <AnimatePresence mode="wait">
                                    <motion.h3
                                        key={activeIndex}
                                        className="text-3xl md:text-5xl font-light text-foreground leading-[1.15] tracking-tight"
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={{
                                            hidden: { opacity: 0 },
                                            visible: { opacity: 1 },
                                            exit: { opacity: 0 }
                                        }}
                                    >
                                        {/* Split words animation */}
                                        {current.description.split(" ").map((word, i) => (
                                            <motion.span
                                                key={i}
                                                className="inline-block mr-[0.3em]"
                                                variants={{
                                                    hidden: { opacity: 0, y: 20, rotateX: 90 },
                                                    visible: {
                                                        opacity: 1,
                                                        y: 0,
                                                        rotateX: 0,
                                                        transition: {
                                                            duration: 0.5,
                                                            delay: i * 0.05,
                                                            ease: [0.22, 1, 0.36, 1],
                                                        },
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        y: -10,
                                                        transition: { duration: 0.2, delay: i * 0.02 },
                                                    },
                                                }}
                                            >
                                                {word}
                                            </motion.span>
                                        ))}
                                    </motion.h3>
                                </AnimatePresence>
                            </div>

                            {/* Author/Role -> Title/CTA */}
                            <div className="flex items-end justify-between">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                        className="flex items-center gap-4"
                                    >
                                        {/* Animated line */}
                                        <motion.div
                                            className="w-8 h-px bg-foreground"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                            style={{ originX: 0 }}
                                        />
                                        <div>
                                            <p className="text-xl md:text-2xl font-bold text-foreground mb-1">{current.title}</p>
                                            <p className="text-sm text-blue-400 font-medium tracking-wide uppercase">{current.cta}</p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
