'use client'
import { Tabs, Tab,  } from "@mui/material"
import { useState } from "react"
import Masonry from '@mui/lab/Masonry'
import Image from "next/image"
import useMediaQuery from "@/hooks/useMediaQuery"

function Page() {
    const [value, setValue] = useState<string>('all')

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    const images = [
        {
            image: '/Earth1.jpg',
            tag: 'Earth'
        },
        {
            image: '/Space1.jpg',
            tag: 'Space'
        },
        {
            image: '/Space2.jpg',
            tag: 'Space'
        },
        {
            image: '/Space3.jpg',
            tag: 'Space'
        },
        {
            image: '/Space4.jpg',
            tag: 'Space'
        }
    ]

    //determine screensize
    const aboveSmallScreens = useMediaQuery('(min-width: 768px)')

    return (
        <div className="flex min-h-screen flex-col items-center justify-between bg-black">
            <div className="container pt-12 text-white flex flex-col items-center">
                <h1 className="text-5xl text-center">PORTFOLIO</h1>

                {/* Tabs for filtering categories */}
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="inherit"
                    indicatorColor="primary"
                    aria-label="secondary tabs example"
                    className="my-5"
                >
                    <Tab value="all" label="All" />
                    <Tab value="Space" label="Space" />
                    <Tab value="Earth" label="Earth" />
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