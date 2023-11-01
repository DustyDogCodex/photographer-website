import Image from "next/image"
import Card from "./Card"

const cardContent = [
    {
        title: 'Portfolio',
        tagLine: 'VIEW PORTFOLIO'
    },
    {
        title: 'title2',
        tagLine: 'XYZ',
    },
    {
        title: 'title3',
        tagLine: 'ABC',
    },
    {
        title: 'title4',
        tagLine: 'EFG',
    }
]

function Hero() {
    return (
        <div className="parallax-wrapper text-white w-full">
            {/* parallax images and text */}
            <header>
                {/* background image */}
                <Image 
                    src='/mountain3.png'
                    alt=""
                    width={400}
                    height={400}
                    className="background w-full h-full absolute top-0 object-cover -z-10"
                    unoptimized={true}
                />

                {/* foreground image */}
                <Image 
                    src='/couple.png'
                    alt=""
                    width={400}
                    height={400}
                    className="foreground w-full h-full absolute top-0 object-cover -z-10"
                    unoptimized={true}
                />

                <h1 className="text-6xl">Awe Inspiring</h1>

                {/* black smokey effect at the bottom */}
                <div className="absolute h-[150px] bottom-0 w-full bg-gradient-to-t from-black via-black/90 to-transparent" />
            </header>

            {/* images redirecting to portfolio and other works etc */}
            <section className="px-40 bg-black h-[600px] flex justify-center items-center">
                <div className="container grid grid-cols-2 md:grid-cols-4 gap-5">
                    {cardContent.map((card,index) => 
                        <Card
                            key={index} 
                            title={card.title}
                            tagLine={card.tagLine}
                        />
                    )}
                </div>
            </section>
        </div>
    )
}

export default Hero