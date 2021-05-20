


export const MobileMenuAnimate = (isMenuOpen :boolean) => ({
    transition: { duration: 2, type: "spring", delayChildren: 1 },
    animate: isMenuOpen ? { y:0,} : 
    { 
      y:1200,
      transition: { type: "spring", delay: 0.5, duration: 2.5,  } 
    },
});