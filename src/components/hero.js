import {useState, useContext, useEffect} from 'react'
import './Hero.css'

function Hero(){
    // define useEffect animation
    const [animate, setAnimate] = useState(false);

    useEffect(() =>{
        // set the state of the image size to true
        setAnimate(true);
        
        // do the animation
        const timeout = setTimeout(() => {
            setAnimate(false);
        }, 1000);
        return () => clearTimeout(timeout)
    },[] )

    return(
    <section className="hero-section">
      <div className={`hero-text ${animate ? 'grow' : '2'}`}>
        Welcome to My Website
      </div>
    </section>

    )
}

export default Hero