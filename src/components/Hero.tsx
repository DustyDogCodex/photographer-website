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
            />
            <Image 
                src='/couple.png'
                alt=""
                width={400}
                height={400}
                className="w-full h-full"
            />
            <img src="/couple.png" alt="" />
        </div>
    )
}

export default Hero