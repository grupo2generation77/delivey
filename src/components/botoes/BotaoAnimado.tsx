"use client"

import type { Variants } from "motion/react"
import * as motion from "motion/react-client"
import { useEffect, useRef, useState } from "react"

export default function BotaoAnimado() {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const { height } = useDimensions(containerRef)

    return (
        <div className="relative flex items-center justify-start w-[300px]">
            <motion.nav 
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                className="relative w-72 bg-gray-100 rounded-lg p-4"
            >
                <motion.div className="absolute inset-0 bg-gray-200 rounded-lg" variants={sidebarVariants} />
                <Navigation />
            </motion.nav>
            <div className="absolute left-2 top-2">
                <MenuToggle toggle={() => setIsOpen(!isOpen)} />
            </div>
            <div className="absolute right-2 top-2">
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-24 h-10 border border-red-800 bg-red-50 relative overflow-hidden group shadow-[2px_2px_0px_rgba(155,44,44,1)]"
                >
                    <span className="absolute inset-0 bg-red-800 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"></span>
                    <span className="relative z-10 text-red-800 group-hover:text-white transition-colors duration-300">Menu</span>
                </button>
            </div>
        </div>
    )
}

const sidebarVariants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
}

const Navigation = () => (
    <motion.ul className="list-none p-4 m-0">
        {[0, 1, 2, 3, 4].map((i) => (
            <MenuItem i={i} key={i} />
        ))}
    </motion.ul>
)

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]

const MenuItem = ({ i }: { i: number }) => {
    const border = `2px solid ${colors[i]}`
    return (
        <motion.li
            className="flex items-center mb-4 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="w-10 h-10 rounded-full mr-4" style={{ border }} />
            <div className="w-40 h-5 rounded" style={{ border }} />
        </motion.li>
    )
}

const Path = (props: any) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
)

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
    <button onClick={toggle} className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent border-none cursor-pointer">
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path variants={{ closed: { d: "M 2 2.5 L 20 2.5" }, open: { d: "M 3 16.5 L 17 2.5" } }} />
            <Path d="M 2 9.423 L 20 9.423" variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} transition={{ duration: 0.1 }} />
            <Path variants={{ closed: { d: "M 2 16.346 L 20 16.346" }, open: { d: "M 3 2.5 L 17 16.346" } }} />
        </svg>
    </button>
)

const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
    const dimensions = useRef({ width: 0, height: 0 })

    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth
            dimensions.current.height = ref.current.offsetHeight
        }
    }, [ref])

    return dimensions.current
}
