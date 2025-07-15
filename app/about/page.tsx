// React Icons
import { FaAngleDoubleDown } from "react-icons/fa";

const AboutPage = () => {
    return (
        <section className="flex flex-col w-full">
            {/* Title */}
            <div className="flex flex-col px-4 xl:px-8 mt-26">
                <h1 className="font-secondary text-[80px] leading-none">
                    ABOUT ME
                </h1>

                <div className="mt-6 flex items-center justify-between">
                    <p className="text-[14px]">EMBARKED ON THE JOURNEY IN</p>

                    <p className="text-[14px]">YEARS</p>
                </div>

                <hr className="border-accent-black my-2 w-full border-t" />

                <div className="my-4 flex items-center justify-between">
                    <h2 className="text-[40px] font-secondary leading-none">18 JULY 2022</h2>

                    <h2 className="text-[40px] font-secondary leading-none">03</h2>
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <p className="text-[14px]">LOCATION</p>
                </div>

                <hr className="border-accent-black my-2 w-full border-t" />

                <div className="my-4 flex items-center justify-between">
                    <h2 className="text-[40px] font-secondary leading-none">BANGKOK UNIVERSITY</h2>
                </div>

                <hr className="border-accent-black my-2 w-full border-t" />

                <div className="mt-4 flex items-center justify-between">
                    <FaAngleDoubleDown />

                    <p className="text-[14px]">DISCOVER MORE</p>
                </div>
            </div>

            {/* My Story */}
            <div className="flex flex-col gap-6 px-4 xl:px-8 mt-10">
                <h2 className="text-[40px] font-secondary leading-none">MY STORY</h2>

                <p>
                    Hello! My name is <span className="font-semibold">Natchanon Srijudanu</span>, and I am currently studying at the Faculty of Information Technology and Innovation at Bangkok University.
                </p>

                <p>
                    I created this website to introduce myself, showcase my skills, and share the projects I’ve worked on.
                </p>

                <p>
                    Whether you're here to learn more about my academic background, explore my work, or connect professionally—welcome!
                </p>

                <hr className="border-accent-black my-2 w-full border-t" />
            </div>
        </section>
    )
}

export default AboutPage;