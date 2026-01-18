import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ParticleDrift = () => {
    const [particles, setParticles] = useState<Array<{
        top: number;
        left: number;
        size: number;
        duration: number;
        delay: number;
        xMove: number;
        yMove: number;
    }>>([]);

    useEffect(() => {
        // Generate 30 random particles
        const newParticles = Array.from({ length: 30 }).map(() => ({
            top: Math.random() * 100,
            left: Math.random() * 100,
            size: Math.random() * 3 + 1, // 1px to 4px
            duration: Math.random() * 10 + 10, // 10s to 20s
            delay: Math.random() * 5,
            xMove: Math.random() * 100 - 50, // -50 to 50
            yMove: Math.random() * 100 - 150, // -150 to -50 (upward drift)
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white/30 rounded-full"
                    style={{
                        top: `${p.top}%`,
                        left: `${p.left}%`,
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        x: [0, p.xMove],
                        y: [0, p.yMove],
                        opacity: [0, 0.8, 0],
                        scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay,
                    }}
                />
            ))}
        </div>
    );
};

export default ParticleDrift;
