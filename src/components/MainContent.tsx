import React from 'react'
import PopularArtist from './PopularArtist'
import PopularAlbum from './PopularAlbum'
import PopularRadio from './PopularRadio'
import Header from './Header'
import Footer from './Footer'

export default function MainContent() {
    return (
        <div className='bg-black'>
            <Header />
            <PopularArtist />
            <PopularAlbum />
            <PopularRadio />
            <Footer />
        </div>
    )
}