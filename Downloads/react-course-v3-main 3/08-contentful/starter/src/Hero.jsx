import React from 'react'
import heroImg from './assets/undraw.svg'

const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>Messenger bag truffaut affogato locavore. Artisan jawn crucifix quinoa. Pork belly grailed pour-over, messenger bag tousled butcher raclette Brooklyn big mood truffaut before they sold out photo booth godard succulents tonx. Bitters slow-carb plaid humblebrag.</p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt='women with browser' className='image'/>
            </div>
        </div>
    </section>
  )
}

export default Hero;