import { Link } from "react-router-dom";
import Divider from "../components/Divider";
import experience from "../lib/experience.json";
import projects from "../lib/projects.json";
import skills from "../lib/skills.json";
import certifications from "../lib/certifications.json";
import { useEffect } from "react";
import Splash from "../components/Splash";
import { LuArrowUpRight, LuCode } from "react-icons/lu";
import { FaBehance, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Home: React.FC = () => {
    useEffect(() => {
        setTimeout(() => {
            const sections = document.querySelectorAll(".to-animate");
            sections.forEach((section, index) => {
                setTimeout(
                    () => {
                        section.classList.add("animate-intro");
                    },
                    (index + 1) * 100
                );
            });
        }, 3500);
    }, []);

    return (
        <>
            <Splash />
            <div className="absolute top-0 left-0 w-svw -translate-y-40 rotate-180 blur-md">
                <svg
                    width="100%"
                    height="100%"
                    id="svg"
                    viewBox="0 0 1440 390"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition delay-150 duration-300 ease-in-out">
                    <defs>
                        <linearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%">
                            <stop offset="0%" stop-color="#060606"></stop>
                            <stop offset="100%" stop-color="#363636"></stop>
                        </linearGradient>
                    </defs>
                    <path
                        d="M 0,400 L 0,150 C 56.45243556542111,145.99782957208038 112.90487113084222,141.99565914416078 165,146 C 217.09512886915778,150.00434085583922 264.8329510420521,162.0151929954372 323,165 C 381.1670489579479,167.9848070045628 449.7633247009495,161.9435688740905 501,177 C 552.2366752990505,192.0564311259095 586.1137501541497,228.21053150820077 629,223 C 671.8862498458503,217.78946849179923 723.7816746824518,171.21430509310642 786,135 C 848.2183253175482,98.78569490689357 920.7595511160437,72.93224811937353 982,79 C 1043.2404488839563,85.06775188062647 1093.180120853373,123.05670242939945 1139,145 C 1184.819879146627,166.94329757060055 1226.5199654704647,172.8409421630287 1276,171 C 1325.4800345295353,169.1590578369713 1382.7400172647676,159.57952891848566 1440,150 L 1440,400 L 0,400 Z"
                        stroke="none"
                        stroke-width="0"
                        fill="url(#gradient)"
                        fill-opacity="1"
                        className="path-0 transition-all delay-150 duration-300 ease-in-out"></path>
                </svg>
            </div>
            <div className="px-3 py-6 md:px-30 lg:px-60">
                <section className="to-animate">
                    <div className="block md:flex md:justify-between">
                        <div className="flex gap-4">
                            <img src="./images/profile-photo.png" className="h-20 w-20 rounded-full" />
                            <div className="block">
                                <h1 className="text-2xl font-bold text-white">
                                    I&apos;m{" "}
                                    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                        Mohit Sundrani
                                    </span>
                                </h1>
                                <p>Full Stack Web Developer & UI/UX Designer</p>
                                <p>Delhi, India</p>
                            </div>
                        </div>
                        <div className="mt-4 flex gap-4 md:mt-0">
                            <Link to="https://linkedin.com/in/mohitsundrani" target="_blank">
                                <FaLinkedin size={20} className="transition-colors ease-in-out hover:text-[#0077b5]" />
                            </Link>
                            <Link to="https://github.com/mohit-sundrani" target="_blank">
                                <FaGithub size={20} className="transition-colors ease-in-out hover:text-[#69758a]" />
                            </Link>
                            <Link to="https://be.net/mohitsundrani" target="_blank">
                                <FaBehance size={20} className="transition-colors ease-in-out hover:text-[#053eff]" />
                            </Link>
                            <Link to="https://x.com/mohit4sundrani" target="_blank">
                                <FaXTwitter size={20} className="transition-colors ease-in-out hover:text-[#ffffff]" />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Link
                            to="https://linkedin.com/in/mohitsundrani"
                            className="hover:bg-primary rounded-full bg-white px-3 py-2 text-black transition-colors ease-in-out"
                            target="_blank">
                            Contact / Hire
                        </Link>
                    </div>
                </section>

                <Divider className="to-animate" />

                <section className="to-animate">
                    <h1 className="text-heading mb-4 text-2xl font-semibold">Experience</h1>
                    <div className="flex flex-col gap-6">
                        {experience.map((exp, index) => (
                            <div className="block w-full lg:flex lg:justify-between" key={index}>
                                <div className="flex items-center gap-2">
                                    <img src={exp.logo} className="h-10 w-10 rounded-full" />
                                    <div className="block">
                                        <h3 className="font-medium text-white">{exp.title}</h3>
                                        <Link
                                            to={exp.website.link}
                                            className="hover:text-primary flex items-center gap-1 underline transition-colors ease-in-out">
                                            {exp.website.name}
                                            <LuArrowUpRight size={14} className="mt-0.5" />
                                        </Link>
                                    </div>
                                </div>
                                <p className="mt-4 lg:mt-0">{exp.duration}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <Divider className="to-animate" />

                <section className="to-animate">
                    <h1 className="text-heading mb-4 text-2xl font-semibold">Projects</h1>
                    <div className="flex flex-col gap-6">
                        {projects.map((project, index) => (
                            <div className="block w-full md:flex md:items-center md:justify-between" key={index}>
                                <div className="block">
                                    <h3 className="font-medium text-white">{project.name}</h3>
                                    <div className="mt-2 flex w-full flex-wrap items-center gap-2">
                                        {project.tech.map((tech, index) => (
                                            <p
                                                className="bg-foreground border-secondary rounded-full border px-3 py-2 pb-2 text-xs"
                                                key={index}>
                                                {tech}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-4 flex gap-4 md:mt-0">
                                    <Link
                                        to={project.source}
                                        target="_blank"
                                        className="text-body hover:text-primary transition-colors ease-in-out">
                                        <LuCode size={20} />
                                    </Link>
                                    <Link to={project.live} className="text-primary" target="_blank">
                                        <LuArrowUpRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <Divider className="to-animate" />

                <section className="to-animate">
                    <h1 className="text-heading mb-4 text-2xl font-bold">Skills</h1>
                    <div className="flex flex-col gap-4">
                        {skills.map((skill, index) => (
                            <div className="" key={index}>
                                <h3 className="py-1 pr-4 text-left font-medium text-white underline">{skill.title}</h3>
                                <p className="py-1">{skill.skill}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <Divider className="to-animate" />

                <section className="to-animate">
                    <h1 className="text-heading mb-4 text-2xl font-semibold">Certifications</h1>
                    <div className="flex flex-col gap-6">
                        {certifications.map((certification, index) => (
                            <div className="block w-full md:flex md:items-center md:justify-between" key={index}>
                                <div className="block">
                                    <h3 className="font-medium text-white">{certification.name}</h3>
                                    <p>{certification.issuedBy}</p>
                                </div>
                                <div className="mt-4 flex gap-4 md:mt-0">
                                    <Link to={certification.link} className="text-primary" target="_blank">
                                        <LuArrowUpRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
