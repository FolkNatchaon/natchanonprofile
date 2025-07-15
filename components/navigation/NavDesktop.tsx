import Link from "next/link";

const links = [
    {
        Header: "HOME",
        Path: "/",
    },
    {
        Header: "ABOUT ME",
        Path: "/about",
    },
    {
        Header: "PROJECTS",
        Path: "/projects",
    },
    {
        Header: "SKILLS",
        Path: "/skills",
    },
    {
        Header: "CONTACT",
        Path: "/contact",
    },
]

const NavDesktop = () => {
    return (
        <nav className="flex items-center">
            <div className="flex items-center gap-8">
                {links.map((item, index) => {
                    return (
                        <div key={index}>
                            <Link
                                href={item.Path}
                                className="text-[20px] font-secondary hover:text-accent-blue transition-all duration-300"
                            >
                                {item.Header}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </nav>
    )
}

export default NavDesktop;