import React from 'react';

export default function PopularAlbum() {
    return (
        <div className='text-white'>
            <div>인기 앨범</div>
            <div className="flex justify-between bg-black text-white p-4">
                <div className='w-64 h-80 bg-base-bg'>IM HERO</div>
                <div className='w-64 h-80 bg-base-bg'>GOLDEN</div>
                <div className='w-64 h-80 bg-base-bg'>FACE</div>
                <div className='w-64 h-80 bg-base-bg'>Layover</div>
                <div className='w-64 h-80 bg-base-bg'>FRI(END)S</div>
            </div>
        </div>
    );
}