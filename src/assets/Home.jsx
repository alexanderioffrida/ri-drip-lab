import RotatingRiWord from '../components/RotatingRiWord';
import { useState } from 'react';
import OpportunitiesNetwork from '../components/OpportunitiesNetwork';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
    const [activeImage, setActiveImage] = useState(`${import.meta.env.BASE_URL}default-image.png`)

    const features = [
        {
            title: "Peer-to-Peer Mentorship",
            description: "Review research papers, posters, and projects with other students. The Ri Platform nurtures a community of peers who are eager to receive and provide feedback on research, and who are eager to help advance all fields of study.",
            image: `${import.meta.env.BASE_URL}peer-to-peer-mentorship.png`,
        },
        {
            title: "Finding Opportunities",
            description: "Find research opportunities, internships, and academic or industry jobs. The Ri Platform is a hub for undergraduate research, and we connect students with opportunities to showcase their work and gain real-world experience.",
            image: `${import.meta.env.BASE_URL}feature2.png`,
        },
        {
            title: "Receiving Graduate School Advice",
            description: "Talk with graduate students for admissions advice and research pathways. The Ri Platform offers multiple avenues for students to connect with graduate students and to receive advice on their research and future career paths.",
            image: `${import.meta.env.BASE_URL}graduate-school-advice.jpg`,
        },
    ];
    
    return (
        <main className="flex flex-col overflow-x-hidden">
            {/* Hero Section with Background Image */}
            <section
                className="relative flex flex-col items-center justify-center text-center h-screen bg-cover bg-center"
                style={{ backgroundImage: `url('${import.meta.env.BASE_URL}ri-platform-bg.jpg')` }}
            >
                <div className="absolute inset-0 bg-black/50 z-0"></div>
                
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10"></div>
                
                <div className="relative z-10 flex flex-col items-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl font-medium mb-4 text-white"
                        style={{ fontFamily: "'EB Garamond', serif"}}
                    >
                        Driving Research and Innovation
                    </motion.h1>
                    {/* <h1 className="text-6xl font-medium mb-4 text-white" style={{ fontFamily: "'EB Garamond', serif"}}>
                        Driving Research and Innovation
                    </h1> */}

                    {/* Rotating Word Animation */}
                    {/* <RotatingRiWord /> */}

                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-xl text-lg font-extralight mt-6 text-white"
                    >
                        The 'Ri' Platform helps undergraduates connect, collaborate, and showcase their research across disciplines.
                    </motion.p>
                    {/* <p className="max-w-xl text-lg font-extralight mt-6 text-white">
                        The 'Ri' Platform helps undergraduates connect, collaborate, and showcase their research across disciplines.
                    </p> */}

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Link to="/about" className="group border font-extralight border-white text-white px-6 py-2 text-lg rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition-colors mt-8">
                            About the Ri Platform
                            <span className="transform transition-transform group-hover:translate-x-2">→</span>
                        </Link>
                    </motion.div>

                    {/* <button className="group border font-extralight border-white text-white px-6 py-2 text-lg rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition-all mt-8">
                        About the Ri Platform
                        <span className="transform transition-transform group-hover:translate-x-2">→</span>
                    </button> */}
                </div>
            </section>

            {/* Explore Section */}
            <section className="flex flex-col items-center justify-center py-20 px-4 bg-black text-white">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-4xl font-medium mb-4"
                    style={{ fontFamily: "'EB Garamond', serif" }}
                >
                    Explore Our Features
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="max-w-xl text-lg mb-8 text-center font-extralight"
                >
                    Discover the Ri Platform and how it can help you connect, collaborate, and showcase your research.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <Link to="/features" className="group border font-light border-white text-white px-6 py-2 text-lg rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                        Explore Features
                        <span className="transform transition-transform group-hover:translate-x-2">→</span>
                    </Link>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-16 bg-black text-white items-center">

                {/* Text Column */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col gap-8 group" onMouseLeave={() => setActiveImage('/default-image.png')}
                >
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="cursor-pointer group/feature transition-colors"
                            onMouseEnter={() => setActiveImage(feature.image)}
                            onMouseLeave={() => setActiveImage(`${import.meta.env.BASE_URL}default-image.png`)}
                        >
                            <h2 className={`
                                text-3xl font-medium transition-colors
                                group-hover:text-gray-500
                                group-hover/feature:text-white
                            `}style={{ fontFamily: "'EB Garamond', serif"}}>
                                {feature.title}
                            </h2>

                            <p className={`
                                text-white font-extralight mt-2 max-w transition-colors
                                group-hover:text-gray-500
                                group-hover/feature:text-white
                            `}>
                                {feature.description}
                            </p>
                            
                            <div className="h-px w-full bg-gray-700 mt-4 group-hover/feature:bg-white"></div>
                        </div>
                    ))}
                </motion.div>

                {/* Image Column */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex justify-center items-center"
                >
                        <div className="w-[500px] h-[500px] flex justify-center items-center overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={activeImage}
                                alt="Feature Image"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                </motion.div>
            </section> 

            {/* Showcase Section */}
            <section className="flex flex-col items-center justify-center py-20 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-4xl font-medium mb-4"
                    style={{ fontFamily: "'EB Garamond', serif" }}
                >
                    Showcase Your Work
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="max-w-xl text-lg mb-8 text-center font-extralight"
                >
                    Share your research, collaborate with peers, and get recognized across disciplines.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <Link to="/showcase" className="group border font-light border-black text-black px-6 py-2 text-lg rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition-colors">
                        Explore Showcase
                        <span className="transform transition-transform group-hover:translate-x-2">→</span>
                    </Link>
                </motion.div>
            </section>

            {/* Newsletter / Media Teaser */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-16 bg-gray-100">
                
                {/* Newsletter */}
                <motion.div
                    initial={{ opacity: 0, x: -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="p-6 border rounded flex flex-col justify-between"
                >
                    <h2 className="text-2xl font-medium mb-2" style={{ fontFamily: "'EB Garamond', serif" }}>Newsletter</h2>
                    <p className="mb-4 font-extralight">Stay updated with undergraduate research highlights and platform news.</p>
                    <Link to="/newsletter" className="group border font-light border-black text-black px-4 py-2 rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition-colors">
                        Subscribe
                        <span className="transform transition-transform group-hover:translate-x-2">→</span>
                    </Link>
                </motion.div>

                {/* Media */}
                <motion.div
                    initial={{ opacity: 0, x: 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="p-6 border rounded flex flex-col justify-between"
                >
                    <h2 className="text-2xl font-medium mb-2" style={{ fontFamily: "'EB Garamond', serif" }}>Media & Interviews</h2>
                    <p className="mb-4 font-extralight">Watch interviews with professors, graduate students, industry experts, and leading undergraduate researchers.</p>
                    <Link to="/media" className="group border font-light border-black text-black px-4 py-2 rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition-colors">
                        Watch Now
                        <span className="transform transition-transform group-hover:translate-x-2">→</span>
                    </Link>
                </motion.div>

            </section>

            {/* Conference Teaser */}
            <section className="flex flex-col items-center justify-center py-20 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-4xl font-medium mb-4"
                    style={{ fontFamily: "'EB Garamond', serif" }}
                >
                    Annual National Conference
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="max-w-xl text-lg mb-8 text-center font-extralight"
                >
                    Join undergraduate researchers from across the country to present your work, network, and collaborate.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <Link to="/conference" className="group border font-light border-black text-black px-6 py-2 text-lg rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition-colors">
                        Learn More
                        <span className="transform transition-transform group-hover:translate-x-2">→</span>
                    </Link>
                </motion.div>
            </section>

            <footer className="w-full bg-black text-white font-light text-center text-sm py-4">
                Copyright © 2025 The Founders and Partners of DRIP Lab
            </footer>

        </main>
    );
}
