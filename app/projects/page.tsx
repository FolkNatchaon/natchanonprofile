// React Icons
import { FaAngleDoubleDown } from "react-icons/fa";

const ProjectsPage = () => {
    return (
        <section className="flex flex-col w-full">
            {/* Title */}
            <div className="flex flex-col px-4 xl:px-8 mt-26">
                <h1 className="font-secondary text-[80px] leading-none">
                    PROJECTS
                </h1>

                <div className="mt-6 flex items-center">
                    <p className="text-[14px]">MY WORK!</p>
                </div>

                <hr className="border-accent-black my-2 w-full border-t" />

                <div className="mt-4 flex items-center justify-between">
                    <FaAngleDoubleDown />

                    <p className="text-[14px]">DISCOVER MORE</p>
                </div>
            </div>

            {/* My Projects */}
            <div className="flex flex-col gap-6 px-4 xl:px-8 mt-10">
                <div className="flex flex-col">
                    <div className="bg-accent-black text-accent-white p-4 rounded-lg shadow-xl">
                        <h3 className="text-xl font-semibold">AIR TAG CLONE SYSTEM USING ESP32</h3>
                        <p className="mt-4">
                            A location tracking system inspired by Apple’s AirTag, built using ESP32 and Bluetooth Low Energy (BLE).
                            The mobile device detects nearby BLE signals from the ESP32 and sends the device’s location data to Firebase in real time.
                            A web interface then displays the live location on Google Maps, allowing for accurate and continuous tracking of tagged items.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="bg-accent-black text-accent-white p-4 rounded-lg shadow-xl">
                        <h3 className="text-xl font-semibold">ENERGY IMPORT DEPENDENCY ANALYSIS USING POWER BI</h3>
                        <p className="mt-4">
                            This project focuses on analyzing and visualizing the relationship between energy production, import, and consumption in Thailand. The goal is to understand the country’s dependency on imported energy sources and identify trends to support strategic decision-making.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="bg-accent-black text-accent-white p-4 rounded-lg shadow-xl">
                        <h3 className="text-xl font-semibold">BASIL LEAF CLASSIFICATION USING AI</h3>
                        <p className="mt-4">
                            This project focuses on developing a Convolutional Neural Network (CNN) model to accurately classify images of two similar types of basil leaves: Holy Basil (กระเพรา) and Thai Basil (โหระพา). By collecting a diverse dataset of leaf images, applying data augmentation techniques to improve robustness, and training the CNN with TensorFlow/Keras, the model learns to distinguish subtle differences in leaf texture, shape, and color. Techniques such as Dropout and EarlyStopping were used during training to prevent overfitting and enhance generalization. The final model achieves high accuracy and can be deployed in applications to assist farmers and food industry professionals in automating herb identification, improving quality control, and streamlining agricultural workflows.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="bg-accent-black text-accent-white p-4 rounded-lg shadow-xl">
                        <h3 className="text-xl font-semibold">TASK MANAGEMENT APP</h3>
                        <p className="mt-4">
                            Developed a cross-platform task management mobile application using .NET MAUI, enabling users to create, edit, and delete tasks with status tracking (e.g., pending, in progress, completed). The app features user authentication to provide personalized task lists and uses local storage (SQLite) to persist data securely on both Android and iOS devices. Emphasizing a clean and intuitive UI, the application improves productivity by helping users organize and manage their daily work efficiently across multiple platforms.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="bg-accent-black text-accent-white p-4 rounded-lg shadow-xl">
                        <h3 className="text-xl font-semibold">SECURITY ASSESSMENT PROJECT</h3>
                        <p className="mt-4">
                            This project was conducted as part of the CS448 course. It involved designing a secure network system for a simulated e-commerce company, evaluating potential security risks, and conducting vulnerability assessments using tools like Nessus. The team performed penetration testing using Kali Linux and Metasploit Framework to identify vulnerabilities and propose actionable solutions. The goal was to improve the system’s security posture and ensure data protection through layered defense strategies.  
                        </p>
                    </div>
                </div>

                <hr className="border-accent-black my-2 w-full border-t" />
            </div>
        </section>
    )
}

export default ProjectsPage;