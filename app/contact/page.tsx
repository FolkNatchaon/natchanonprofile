// React Icons
import { FaAngleDoubleDown } from "react-icons/fa";

const ContactPage = () => {
    return (
        <section className="flex flex-col w-full">
            {/* Title */}
            <div className="flex flex-col px-4 xl:px-8 mt-26">
                <h1 className="font-secondary text-[80px] leading-none">
                    CONTACT
                </h1>

                <div className="mt-6 flex items-center">
                    <p className="text-[14px]">LET&apos;S WORK TOGETHER!</p>
                </div>

                <hr className="border-accent-black my-2 w-full border-t" />

                <div className="mt-4 flex items-center justify-between">
                    <FaAngleDoubleDown />

                    <p className="text-[14px]">DISCOVER MORE</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="flex flex-col gap-6 px-4 xl:px-8 mt-10">
                <p className="font-secondary">Phone : <span className="font-primary">098 406 6770</span></p>

                <p className="font-secondary">Email : <span className="font-primary">natchanon.srij@bumail.net</span></p>

                <p className="font-secondary">Address : <span className="font-primary">104/285 Moo 6 , Bangrakpattana, Bangbuathong, Nonthubburi 11110</span></p>
            </div>
        </section>
    )
}

export default ContactPage;