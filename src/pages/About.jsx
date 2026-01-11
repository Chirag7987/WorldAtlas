import React from 'react'
import countryData from '../api/countryData.json'
const About = () => {

    return (
        <section className='section-about container'>
            <h2 className='container-title'>
                Here is some intresting data about the world
                <br />
                we're proud of
            </h2>
            <div className='gradient-cards'>
                {
                    countryData.map((country) => {
                        const { id, countryName, capital, population, interestingFact } = country;
                        return (
                            <div className="card" key={id}>
                                <div className="flip-card">
                                    <div className="flip-card-inner">

                                        {/* FRONT (same content) */}
                                        <div className="flip-card-back">
                                            <div className="container-card bg-green-box">
                                                <p className="card-title">{countryName}</p>
                                                <p>
                                                    <span className="card-description">Capital:</span> {capital}
                                                </p>
                                                <p>
                                                    <span className="card-description">Population:</span> {population}
                                                </p>
                                                <p>
                                                    <span className="card-description">interestingFact:</span> {interestingFact}
                                                </p>
                                            </div>
                                        </div>

                                        {/* BACK (details) */}
                                        <div className="flip-card-front">
                                            <div className="container-card bg-green-box">
                                                <p className="card-title">{countryName} — Details</p>
                                                <p>More info goes here…</p>
                                                {/* add whatever details you want */}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        
                        )

                    })
                }
            </div>
        </section>
    )
}

export default About