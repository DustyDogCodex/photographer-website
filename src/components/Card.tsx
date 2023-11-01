type CardProps = {
    title: string,
    tagLine: string,
    image: string
}

function Card({ title, tagLine, image }: CardProps) {
    return (
        <div className="h-60 w-40">
            <h1>{title}</h1>
            <p>{tagLine}</p>
            <p>{image}</p>
        </div>
    )
}

export default Card