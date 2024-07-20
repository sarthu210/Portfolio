import React from 'react'
import { motion, useScroll } from "framer-motion";

export default function MotionScroll() {
    const { scrollYProgress } = useScroll()

    return <motion.div style={{ scaleX: scrollYProgress }} />
}
