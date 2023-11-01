import Image from "next/image"

function Hero() {
    return (
        <div className="parallax-wrapper text-white pt-20">
            {/* parallax images and text */}
            <header>
                {/* background image */}
                <Image 
                    src='/mountain.png'
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
            </header>

            {/* placeholder text for testing parallax effect */}
            <section className="text-3xl px-40 py-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatibus voluptate sapiente unde consequatur aut rerum fuga aspernatur maiores! Voluptatum, quos? Similique non, sapiente at odio ab fugiat nemo, doloremque iusto repellendus molestiae aliquid asperiores ipsa inventore. In vel dolor aspernatur earum sunt corporis dolores, praesentium quae unde, corrupti similique sit maxime nulla eaque, quis consectetur repudiandae nihil voluptatem expedita nemo minima porro? Corporis, repellat. Ut qui ab beatae distinctio id nulla veniam sint aspernatur nemo in accusamus pariatur, delectus velit labore culpa ratione rerum. Iusto ea veritatis nemo soluta quaerat voluptatem, deserunt, incidunt non itaque doloribus libero! Odio accusantium repellendus, neque suscipit necessitatibus, dignissimos illum nulla et laudantium quidem dicta aspernatur dolorum reprehenderit perferendis eveniet error maiores ea, nesciunt inventore quos rem? Quam, neque ab repudiandae nisi magni ex ea tempore vitae fugit sit commodi officia voluptates porro excepturi ipsam repellat culpa, deleniti sint consequatur. Aliquam omnis reprehenderit rerum culpa eius in modi harum, dolorum officia enim. Modi et magnam cupiditate dolore molestiae, temporibus, vel necessitatibus odio eveniet ipsum tenetur repellat vitae recusandae architecto aperiam placeat deserunt hic earum soluta voluptas aut est! Nulla maiores doloribus quisquam dolore, officia pariatur error at temporibus ab. Cum quasi ratione tenetur quisquam odio delectus nostrum eius odit? Unde voluptatum ut reprehenderit suscipit doloribus amet dicta deserunt eos eaque, illum earum quas. Sunt ad molestias delectus adipisci hic eum facilis similique nisi, quam, vero et placeat quidem quod reiciendis perferendis nemo laudantium quos, officiis asperiores? Deserunt eaque nostrum commodi, eligendi unde vero laudantium nulla expedita quis fugit dolorum veritatis similique? Accusantium sint excepturi modi corporis provident officiis soluta ad maxime ipsam quaerat impedit omnis ab itaque dolor rem cum magnam amet, alias natus. Sit nemo eos quasi amet tempore enim commodi repellendus. Unde molestiae doloribus aspernatur placeat odit qui nam repellat tempore dolor.
            </section>
        </div>
    )
}

export default Hero