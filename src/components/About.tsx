import Image from "next/image"
import Link from "next/link"

function About() {
    return (
        <div className="w-full font-inconsolata">
            <Image 
                src='/about-bg.jpg'
                alt=""
                height={300}
                width={300}
                className="w-full max-h-[700px] object-cover"
                unoptimized={true}
            />

            {/* about me paragraph */}
            <div className="w-full flex items-center justify-center">
                <div className="lg:container px-3 md:px-40 py-20">
                    <p className="text-white py-12 text-xl">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum alias debitis, mollitia dolorem illum neque adipisci repudiandae exercitationem labore maxime. Tenetur ut quae id officiis explicabo, unde error illo, sapiente magnam ad inventore? Quisquam omnis suscipit repellendus eius assumenda ullam pariatur voluptates molestias quos odio hic possimus minima voluptate, cumque asperiores! Officiis, impedit odit dolore non veritatis provident doloribus reiciendis, amet quos tempore odio inventore minus eaque eveniet fugiat quia assumenda ut distinctio sit corporis sequi maxime? Molestias libero vel sit eligendi commodi rem quis dolorum unde ipsam deleniti incidunt, totam tempora. Voluptatum, odio. Sint rem nostrum alias numquam voluptatem.
                    </p>

                    {/* collection of skewed images that redirect to portfolio page */}
                    <div className="h-full md:h-[700px] flex items-center justify-center relative border border-red-500">
                        <Image
                            src='/Earth1.jpg'
                            alt=""
                            width={300}
                            height={300}
                            className="z-10 w-72 h-80 object-cover absolute top-[10%] left-[30%] -rotate-6 hover:-translate-y-5 transition duration-300"
                        />

                        <Image
                            src='/Space1.jpg'
                            alt=""
                            width={300}
                            height={300}
                            className="w-96 h-60 object-cover absolute top-[20%] left-[50%] rotate-6 hover:-translate-y-5 transition duration-300"
                        />

                        <Image
                            src='/Space2.jpg'
                            alt=""
                            width={300}
                            height={300}
                            className="w-96 h-64 object-cover absolute bottom-[10%] left-[25%] -rotate-12 hover:translate-y-10 transition duration-300"
                        />

                        <Image
                            src='/Space3.jpg'
                            alt=""
                            width={300}
                            height={300}
                            className="w-64 h-80 object-cover absolute bottom-[10%] left-[55%] rotate-12 hover:translate-x-10 transition duration-300"
                        />
                    </div>

                    <Link 
                        href={'/portfolio'}
                    >
                        <h1 className="text-gray-400 text-xl text-center">View Portfolio</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About