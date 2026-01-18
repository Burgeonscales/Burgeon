
export const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -100; // Offset for header
    const elementPosition = element.getBoundingClientRect().top;
    const startPosition = window.scrollY;
    const targetPosition = elementPosition + startPosition + yOffset;
    const distance = targetPosition - startPosition;
    // Reduced duration for faster, snappier response while keeping smoothness
    const duration = 800;
    let start: number | null = null;

    // Cubic easing in/out
    const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
    };

    const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;

        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);

        // Force auto behavior to override any CSS scroll-behavior
        window.scrollTo({ top: run, behavior: 'auto' });

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        } else {
            // Ensure we land exactly on target at end
            window.scrollTo({ top: targetPosition, behavior: 'auto' });
        }
    };

    requestAnimationFrame(animation);
};
