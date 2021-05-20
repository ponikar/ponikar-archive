


export const MobileMenuAnimate = (isMenuOpen :boolean) => ({
    transition: { duration: 0.6, type: "tween", delayChildren: 0.8 },
    animate: isMenuOpen ? { clipPath: "circle(100% at 100% 50%)" } : { clipPath: "circle(0% at 100% 0%)", transition: { delay: 0.5, duration: 0.6 } },
});