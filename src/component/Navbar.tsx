import Link from "next/link"

function Navbar() {
    return (
        <div className="w-full flex items-center justify-between">
            <Link href={'/'}>
                Home
            </Link>

            <div className="flex items-center justify-center gap-10">
                <Link href={'/about'}>
                    About
                </Link>
                <Link href={'/portfolio'}>
                    Portfolio
                </Link>
                <Link href={'/contact'}>
                    Contact
                </Link>
            </div>
        </div>
    )
}

export default Navbar