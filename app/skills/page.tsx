// React Icons
import { FaAngleDoubleDown } from "react-icons/fa";

const AboutPage = () => {
    return (
        <section className="flex flex-col w-full">
            {/* Title */}
            <div className="flex flex-col px-4 xl:px-8 mt-26">
                <h1 className="font-secondary text-[80px] leading-none">
                    SKILLS
                </h1>

                <div className="mt-6 flex items-center">
                    <p className="text-[14px]">CHECK IT OUT!</p>
                </div>

                <hr className="border-accent-black my-2 w-full border-t" />

                <div className="mt-4 flex items-center justify-between">
                    <FaAngleDoubleDown />

                    <p className="text-[14px]">DISCOVER MORE</p>
                </div>
            </div>

            {/* My Skills */}
            <div className="flex flex-col gap-6 px-4 xl:px-8 mt-10">
                <h2 className="text-[40px] font-secondary leading-none">PROGRAMMING LANGUAGES</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-8">
                    <div className="bg-accent-black text-accent-white p-4 rounded-lg shadow-xl">
                        <h3 className="text-xl font-semibold">Python</h3>
                        <p className="mt-4">Proficient in building interactive web applications.</p>
                    </div>
                    <div className="bg-accent-black text-accent-white p-4 rounded-lg shadow-xl">
                        <h3 className="text-xl font-semibold">C / C++</h3>
                        <p className="mt-4">Experienced in creating dynamic user interfaces.</p>
                    </div>
                    <div className="bg-accent-black text-accent-white p-4 rounded-lg shadow-xl">
                        <h3 className="text-xl font-semibold">Javascript</h3>
                        <p className="mt-4">Skilled in server-side development.</p>
                    </div>
                </div>
            </div>

            {/* Frameworks */}
            <div className="flex flex-col gap-6 px-4 xl:px-8 mt-10">
                <h2 className="text-[40px] font-secondary leading-none">FRAMEWORKS</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-8">
                    <div className="bg-accent-black text-accent-white p-4 rounded-lg shadow-xl">
                        <h3 className="text-xl font-semibold">.NET MAUI</h3>
                        <p className="mt-4">Mobile App / Cross-platform UI development.</p>
                    </div>
                </div>
            </div>

            {/* Tools */}
            <div className="flex flex-col gap-6 px-4 xl:px-8 mt-10 mb-10">
                <h2 className="text-[40px] font-secondary leading-none">TOOLS</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-8">
                    <div className="bg-accent-black text-accent-white p-4 rounded-lg shadow-xl">
                        <h3 className="text-xl font-semibold">MySQL / PlanetScale</h3>
                        <p className="mt-4">Database management and scaling.</p>
                    </div>
                    <div className="bg-accent-black text-accent-white p-4 rounded-lg shadow-xl">
                        <h3 className="text-xl font-semibold">Git / GitHub</h3>
                        <p className="mt-4">Version control and collaborative development.</p>
                    </div>
                    <div className="bg-accent-black text-accent-white p-4 rounded-lg shadow-xl">
                        <h3 className="text-xl font-semibold">Power BI</h3>
                        <p className="mt-4">Data Analytics & Dashboard creation.</p>
                    </div>
                    <div className="bg-accent-black text-accent-white p-4 rounded-lg shadow-xl">
                        <h3 className="text-xl font-semibold">RapidMiner</h3>
                        <p className="mt-4">Data science and machine learning platform.</p>
                    </div>
                    <div className="bg-accent-black text-accent-white p-4 rounded-lg shadow-xl">
                        <h3 className="text-xl font-semibold">Figma</h3>
                        <p className="mt-4">UI/UX design and prototyping.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPage;