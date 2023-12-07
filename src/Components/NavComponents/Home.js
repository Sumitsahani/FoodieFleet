import React from 'react'
import Nav from '../Nav'
import '../NavComponents/Home.css'
import tiffin from '../NavComponents/Img/tiffin.png'
const Home = () => {
    return (
        <>
            <Nav />
            <div className='title'>
                <img className='Img' src={tiffin} alt="Image" />
                <div>
                    <h1>FOODIEFLEET</h1>
                    <h4 className='slogan'>The Tiffin Box Company</h4>
                </div>
            </div>
        </>
    )
}

export default Home
