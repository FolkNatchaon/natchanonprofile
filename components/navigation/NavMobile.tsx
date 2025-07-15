"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

// UI Components
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const links = [
    {
        Header: "Home",
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

const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <nav>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger>
                        <p>MENU</p>
                </SheetTrigger>

                <SheetContent>
                    <SheetHeader>
                        <SheetTitle></SheetTitle>

                        <SheetDescription></SheetDescription>
                    </SheetHeader>

                    {/* Navigation Links */}
                    <div className="mt-10 px-4">
                        {links.map((item, index) => {
                            return (
                                <div key={index} className="flex flex-col items-center">
                                    <Link
                                        href={item.Path}
                                        onClick={handleLinkClick}
                                        className={`${item.Path === pathname
                                                ? "text-accent-blue"
                                                : "text-accent-black"
                                            } font-secondary text-[56px] leading-none md:text-[80px]`}
                                    >
                                        {item.Header}
                                    </Link>

                                    <hr className="border-accent-black my-2 w-full border-t" />
                                </div>
                            )
                        })}
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default NavMobile