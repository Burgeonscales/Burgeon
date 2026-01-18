import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ShootingStars = () => {
    const [stars, setStars] = useState<Array<{ id: number; top: number; left: number; delay: number }>>([]);

    useEffect(() => {
        const newStars = Array.from({ length: 6 }).map((_, i) => ({
            id: i,
            // Focus start positions mostly in the top-right quadrant for diagonal fall
            top: Math.random() * 40 - 10, // -10% to 30%
            left: Math.random() * 40 + 50, // 50% to 90%
            delay: Math.random() * 15,
        }));
        setStars(newStars);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        width: '150px',
                        boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
                    }}
                    initial={{ opacity: 0, x: 0, y: 0, rotate: 135 }}
                    animate={{
                        opacity: [0, 1, 0],
                        x: -600, // Move left
                        y: 600,  // Move down
                    }}
                    transition={{
                        duration: 2.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: Math.random() * 10 + 5,
                        delay: star.delay,
                    }}
                />
            ))}
        </div>
    );
};

export default ShootingStars;
