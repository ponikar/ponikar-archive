
const transition = {
        type: "spring",
        duration:0.6,
    }


export const navAnimatedProps = {
    variants: {
        opened: {
            width: "224px"
        },
        closed: {
            width: "45px",
        }
    },
    transition
}

export const linkAnimatedProps = {
    variants: {
        opened: {
           display: "block",    
           x:0,
           opacity:1
        },
        closed: {
            display: "none",
            x:100,
            opacity:0
        }
    },
    transition: {
        ...transition,
    }
}