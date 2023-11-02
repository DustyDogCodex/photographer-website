import Image from "next/image"

function About() {
    return (
        <div className="w-full">
            <Image 
                src='/about-bg.jpg'
                alt=""
                height={300}
                width={300}
                className="w-full h-fit"
                unoptimized={true}
            />

            {/* about me paragraph */}
            <div className="lg:container w-full">
                <p className="text-white p-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum alias debitis, mollitia dolorem illum neque adipisci repudiandae exercitationem labore maxime. Tenetur ut quae id officiis explicabo, unde error illo, sapiente magnam ad inventore? Quisquam omnis suscipit repellendus eius assumenda ullam pariatur voluptates molestias quos odio hic possimus minima voluptate, cumque asperiores! Officiis, impedit odit dolore non veritatis provident doloribus reiciendis, amet quos tempore odio inventore minus eaque eveniet fugiat quia assumenda ut distinctio sit corporis sequi maxime? Molestias libero vel sit eligendi commodi rem quis dolorum unde ipsam deleniti incidunt, totam tempora. Voluptatum, odio. Sint rem nostrum alias numquam voluptatem.
                </p>
            </div>
        </div>
    )
}

export default About