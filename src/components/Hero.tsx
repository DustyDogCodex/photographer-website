import Image from "next/image"

function Hero() {
    return (
        <div className="relative w-full min-h-screen">
            <Image 
                src='/mountain.png'
                alt=""
                width={400}
                height={400}
                className="w-full h-full absolute top-0"
                unoptimized={true}
            />
            <Image 
                src='/couple.png'
                alt=""
                width={400}
                height={400}
                className="w-full h-full absolute top-0"
                unoptimized={true}
            />
        </div>
    )
}

export default Hero