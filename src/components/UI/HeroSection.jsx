import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const HeroSection = () => {
    return (
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className='heading-xl'>Explore The World With WorldAtlas</h1>
                    <p className='paragraph'>Discover countries, cultures, and landmarks from around the globe. Your adventure starts here!</p>
                    <NavLink to="/country">
                        <button className="btn btn-darken btn-inline bg-white-box">Get Started <FaLongArrowAltRight />
                        </button>
                    </NavLink>
                </div>
                <div className='hero-image'>
                    <img className='banner-image' src="/images/world.png" alt="world beauty" />
                </div>
            </div>
        </main>
    )
}

export default HeroSection