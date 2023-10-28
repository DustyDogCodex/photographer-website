import Image from "next/image"

function Hero() {
    return (
        <div>
            <Image 
                src='/mountain.jpg'
                alt=""
                width={400}
                height={400}
                className="w-full h-full"
            />
            <Image 
                src='/couple.jpg'
                alt=""
                width={400}
                height={400}
                className="w-full h-full"
            />
        </div>
    )
}

export default Hero