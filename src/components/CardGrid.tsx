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

function CardGrid() {
    return (
        <section className="bg-black h-[600px] flex justify-center items-center">
            <div className="lg:container grid grid-cols-2 md:grid-cols-4 gap-5">
                {cardContent.map((card,index) => 
                    <Card
                        key={index} 
                        title={card.title}
                        tagLine={card.tagLine}
                    />
                )}
            </div>
        </section>
    )
}

export default CardGrid