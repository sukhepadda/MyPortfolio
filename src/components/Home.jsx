import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs"
import me from "../assets/me.png"

function Home() {
    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,

            },
            whileInView: {
                x: "0",
                opacity: 1,

            },
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,

            },
            whileInView: {
                y: "0",
                opacity: 1,

            },
        },
    };
    return (
        <div id='home'>
            <section>
                <div>
                    <motion.h1 {...animations.h1} >
                        Hi, I Am <br /> Sukhwant
                    </motion.h1>
                    <Typewriter options={{
                        strings: ["A Developer", "A Designer", "A Creator"],
                        autoStart: true,
                        loop: true,
                        cursor: "",
                        wrapperClassName: "typewriterpara",
                    }}
                    />

                    <div>
                        <a href="mailto:paddasukhwantsingh@gmail.com">
                            Hire Me
                        </a>
                        <a href="#works">
                            Projects <BsArrowUpRight />
                        </a>
                    </div>

                    <article>
                        <p>+
                            <span>100</span></p>
                        <span>Client WorldWide</span>
                    </article>

                    <aside>
                        <article>
                            <p>+
                                <span>500</span></p>
                            <span>Projects Made</span>
                        </article>
                    </aside>
                    <article data-special >
                        <p>Contact</p>
                        <span>paddasukhwantsingh@gmail.com</span>
                        <span>Client WorldWide</span>
                    </article>

                </div>
            </section>
            <section>
                <img src={me} alt="Sukhwant" />
            </section>
            <BsChevronDown />
        </div>
    )
}

export default Home