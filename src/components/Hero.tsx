import Image from "next/image"

function Hero() {
    return (
        <div>
            <Image 
                src='/mountain.png'
                alt=""
                width={400}
                height={400}
                className="w-full h-full"
                unoptimized={true}
            />
            <Image 
                src='/couple.png'
                alt=""
                width={400}
                height={400}
                className="w-full h-full"
                unoptimized={true}
            />
        </div>
    )
}

export default Hero