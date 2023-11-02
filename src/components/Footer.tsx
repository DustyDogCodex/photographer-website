import Image from 'next/image'

function Footer() {
    return (
        <footer className="w-full h-[600px] border border-emerald-600 relative">
            <Image
                src="/footer-image.jpg"
                alt=''
                height={300}
                width={300}
                className='object-cover absolute right-0 h-full w-1/2'
                unoptimized={true}
            />

            {/* footer text */}
            <div className='font-marker'>
                <h1 className='text-5xl font-marker'>email@email.com</h1>
                <span>LOGO!</span>
                <span>© Author / Designed by Varun Malaviya</span>
            </div>
        </footer>
    )
}

export default Footer