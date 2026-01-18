import React from 'react';
import { motion, useMotionTemplate } from 'framer-motion';
import ParticleDrift from './ParticleDrift';
import ShootingStars from './ShootingStars';

const LiveHeroBackground = ({ mouseX, mouseY }: { mouseX: any, mouseY: any }) => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            <ParticleDrift />
            <ShootingStars />
            <motion.div
                className="absolute top-[20%] left-[20%] w-72 h-72 bg-blue-600/20 rounded-full blur-[100px]"
                animate={{
                    x: [0, 50, -30, 0],
                    y: [0, -40, 30, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-[30%] right-[20%] w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"
                animate={{
                    x: [0, -60, 40, 0],
                    y: [0, 50, -50, 0],
                    scale: [1, 1.1, 0.8, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-[20%] left-[40%] w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px]"
                animate={{
                    x: [0, 30, -50, 0],
                    y: [0, 20, -60, 0],
                    scale: [1, 1.3, 0.9, 1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Cursor Spotlight Effect */}
            <motion.div
                className="absolute inset-0 z-10"
                style={{
                    background: useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.1), transparent 80%)`,
                }}
            />
        </div>
    );
};

export default LiveHeroBackground;
