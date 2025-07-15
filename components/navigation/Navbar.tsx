import Link from "next/link"

// Components
import NavDesktop from "@/components/navigation/NavDesktop"
import NavMobile from "@/components/navigation/NavMobile"

const Navbar = () => {
	return (
		<nav className="fixed flex w-full items-center justify-between p-4 xl:p-8 bg-accent-white">
			<Link href="/">
				<h1 className="text-[24px] font-secondary">PORTFOLIO</h1>
			</Link>

			{/* Desktop Navigation */}
			<div className="hidden xl:flex">
				<NavDesktop />
			</div>

			{/* Mobile Navigation */}
			<div className="flex xl:hidden">
				<NavMobile />
			</div>
		</nav>
	)
}

export default Navbar