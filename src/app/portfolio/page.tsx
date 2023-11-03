'use client'
import { Tabs, Tab,  } from "@mui/material"
import { useState } from "react"
import Masonry from '@mui/lab/Masonry'
import Image from "next/image"
import useMediaQuery from "@/hooks/useMediaQuery"
import Earth1 from '/public/Earth1.jpg'
import Space1 from '/public/Space1.jpg'
import Space2 from '/public/Space2.jpg'
import Space3 from '/public/Space3.jpg'
import Space4 from '/public/Space4.jpg'

function Page() {
    const [value, setValue] = useState<string>('all')

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    /* images array with tags */
    const images = [
        {
            image: Earth1,
            tag: 'Earth'
        },
        {
            image: Space1,
            tag: 'Space'
        },
        {
            image: Space2,
            tag: 'Space'
        },
        {
            image: Space3,
            tag: 'Space'
        },
        {
            image: Space4,
            tag: 'Space'
        }
    ]

    //determine screensize
    const aboveSmallScreens = useMediaQuery('(min-width: 768px)')

    return (
        <div className="flex min-h-screen flex-col items-center justify-between bg-black">
            <div className="container pt-16 text-white flex flex-col items-center">
                {/* Tabs for filtering categories */}
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="inherit"
                    indicatorColor="primary"
                    aria-label="photo gallery"
                    className="my-5"
                >
                    <Tab value="all" label="ALL" />
                    <Tab value="Space" label="SPACE" />
                    <Tab value="Earth" label="EARTH" />
                </Tabs>

                {/* Masonry grid for images */}
                <div className="overflow-auto w-full p-2">
                    <Masonry columns={ aboveSmallScreens ? 3 : 1 } spacing={2}>
                        {value === 'all' 
                            ?
                            (
                                images.map((pic, index) => (
                                    <Image 
                                        key={index} 
                                        src={pic.image}
                                        alt="image"
                                        height={200}
                                        width={250}   
                                        placeholder="blur"
                                    />
                                ))
                            )
                            :
                            (
                                images.filter(pic => pic.tag === value).map((pic,index) => 
                                    <Image 
                                        key={index} 
                                        src={pic.image}
                                        alt="image"
                                        height={200}
                                        width={250}   
                                        placeholder="blur"
                                    />
                                )
                            )
                        }   
                    </Masonry>
                </div>
            </div>
        </div>
    )
}

export default Page