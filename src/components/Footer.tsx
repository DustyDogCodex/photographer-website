import Image from 'next/image'

function Footer() {
    return (
        <footer className="w-full h-[600px] relative">
            {/* footer text */}
            <div className='font-marker w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center z-10'>
                <h1 className='text-5xl'>email@email.com</h1>
                <span className='text-3xl mt-10'>LOGO!</span>
                <span className='text-xl'>© Author / Designed by Varun Malaviya</span>
            </div>

            <div className='absolute right-0 top-0 w-1/2 h-full'>
                <Image
                    src="/footer-image.jpg"
                    alt=''
                    height={300}
                    width={300}
                    className='object-cover h-full w-full'
                    unoptimized={true}
                />

                {/* <BlackSmokeRising /> */}
                {/* smokey black effect on left and top of image */}
                <div className="absolute w-[150px] top-0 left-0 h-full bg-gradient-to-r from-black via-black/60 to-transparent" />
                <div className="absolute h-[150px] top-0 left-0 w-full bg-gradient-to-b from-black via-black/60 to-transparent" />
            </div>
        </footer>
    )
}

export default Footer