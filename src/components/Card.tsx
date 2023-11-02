import Image from "next/image"

type CardProps = {
    title: string,
    tagLine: string
}

function Card({ title, tagLine }: CardProps) {
    return (
        <div className="h-72 lg:h-80 w-48 lg:w-72 relative odd:mt-16"> 
            <Image 
                src={`/${title.toLowerCase()}.jpg`}
                alt={`${title} image`}
                width={300}
                height={300}
                className="w-full h-full"            
            />        

            {/* overlay */}
            <div className="absolute top-0 z-20 w-full h-full flex flex-col items-center justify-evenly">
                <h1 className="text-xl md:text-3xl">{title}</h1>
                <p className="text-base md:text-md">{tagLine}</p>
            </div>
        </div>
    )
}

export default Card