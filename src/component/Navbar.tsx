import Link from "next/link"

function Navbar() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-full lg:w-4/5 flex items-center justify-between">
                <Link href={'/'}>
                    Home
                </Link>

                <div className="flex items-center gap-10">
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
        </div>
    )
}

export default Navbar