import Image from "next/image"

type CardProps = {
    title: string,
    tagLine: string
}

function Card({ title, tagLine }: CardProps) {
    return (
        <div className="h-80 w-64 relative odd:mt-20"> 
            <Image 
                src={`/${title.toLowerCase()}.jpg`}
                alt={`${title} image`}
                width={300}
                height={300}
                className="w-full h-full"            
            />        

            {/* overlay */}
            <div className="absolute top-0 z-20">
                <h1>{title}</h1>
                <p>{tagLine}</p>
            </div>
        </div>
    )
}

export default Card