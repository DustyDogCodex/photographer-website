'use client'
import { useState } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

function NavBar() {
    //using state to toggle navbar menu
    const [ menuToggled, setMenuToggled ] = useState<boolean>(false)

    //checking to see if window is above a small screen with custom hook
    const aboveSmallScreens: boolean = useMediaQuery("(min-width: 768px)")

    return (
        <nav
            className="fixed top-0 z-40 w-full flex items-center justify-center text-white"
        >
            <div
                className='w-full flex items-center justify-between py-5 px-5 xl:w-4/5'
            >
                {/* menu options */}
                {aboveSmallScreens
                    ?
                    <div className="flex justify-between items-center w-full font-marker">
                        <Link 
                            href={'/portfolio'} 
                            className='text-3xl'    
                        >
                            Portfolio
                        </Link>
                        <Link 
                            href={'/'}
                            className='text-6xl'
                        >
                            AWESOME!
                        </Link>
                        <Link 
                            href={'/contact'}
                            className='text-3xl'
                        >
                            Get In Touch!
                        </Link>
                    </div>
                    :
                    /* this is what NavBar will look like for smaller screens when menu is toggled off */
                    <button
                        className="rounded-full p-2 flex items-center justify-center hover:scale-125 transition duration-300"
                        onClick={() => setMenuToggled(true)}
                    >
                        <FontAwesomeIcon 
                            icon={faBars} 
                            style={{color: "#f5c211", height:'30px', width:'30px'}} 
                        />
                    </button>
                }

                {/* toggleable side menu for small/mobile screens */}
                {/* menu will slide in from top when user clicks the menu icon */}
                {/* after user clicks on a link, the menu will close automatically */}
                {(
                    <div 
                        className={`${ aboveSmallScreens ? 'hidden' : '' } fixed ${ menuToggled ? 'top-0' : '-top-[250px]'} h-[250px] right-0 w-full bg-primary-bg rounded-b-xl ease-in-out duration-700`}
                    >
                        {/* X button on top to close menu */}
                        <div className="flex justify-end px-4 pt-5 mr-8">
                            <button 
                                onClick={() => setMenuToggled(!menuToggled)}
                                className="p-2 rounded-full flex items-center"
                            >
                                <FontAwesomeIcon 
                                    icon={faX} 
                                    style={{color: "#f5c211", height:'30px', width:'30px'}} 
                                />
                            </button>
                        </div>

                        {/* links inside menu */}
                        <div 
                            className="flex flex-col items-center gap-8 text-2xl"
                            /* closes menu after a link is clicked */
                            onClick={() => setMenuToggled(!menuToggled)}
                        >
                            <Link href={'/about'}>
                                About
                            </Link>
                            <Link href={'/portfolio'}>
                                Portfolio
                            </Link>
                            <Link href={'/contact'}>
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar