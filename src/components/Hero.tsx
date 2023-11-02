import Image from "next/image"
import About from "./About"
import CardGrid from "./CardGrid"
import Footer from "./Footer"

function Hero() {
    return (
        <div className="parallax-wrapper text-white w-full">
            {/* parallax images and text */}
            <header>
                {/* background image */}
                <Image 
                    src='/mountain3.png'
                    alt=""
                    width={300}
                    height={300}
                    className="background w-full h-full absolute top-0 object-cover -z-10"
                    unoptimized={true}
                />

                {/* foreground image */}
                <Image 
                    src='/couple.png'
                    alt=""
                    width={300}
                    height={300}
                    className="foreground w-full h-full absolute top-0 object-cover -z-10"
                    unoptimized={true}
                />

                <h1 className="text-6xl">Awe Inspiring</h1>

                {/* black smokey effect at the bottom */}
                <div className="absolute h-[150px] bottom-0 w-full bg-gradient-to-t from-black via-black/90 to-transparent" />
            </header>
            
            <CardGrid />
            <About />
            <Footer />
        </div>
    )
}

export default Hero