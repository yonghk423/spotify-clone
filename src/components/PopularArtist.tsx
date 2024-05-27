import React from 'react';

export default function PopularArtist() {
    return (
        <div>
            <div>인기 아티스트</div>
            <div className="flex justify-between bg-black text-white p-4">
                <div className='w-64 h-80 bg-base-bg' >NewJeans</div>
                <div className='w-64 h-80 bg-base-bg'>지코</div>
                <div className='w-64 h-80 bg-base-bg'>ILLIT</div>
                <div className='w-64 h-80 bg-base-bg'>LE SSERAFIM</div>
                <div className='w-64 h-80 bg-base-bg'>aespa</div>
            </div>
        </div>
    );
}  