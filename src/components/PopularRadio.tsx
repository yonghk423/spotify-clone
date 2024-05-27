import React from 'react';

export default function PopularRadio() {
    return (
        <div>
            <div>인기 라디오</div>
            <div className="flex justify-between bg-black text-white p-4">
                <div className='w-64 h-80 bg-base-bg'>BIG Naughty</div>
                <div className='w-64 h-80 bg-base-bg'>aespa 라디오</div>
                <div className='w-64 h-80 bg-base-bg'>ILLIT 라디오</div>
                <div className='w-64 h-80 bg-base-bg'>NewJeans 라디오</div>
                <div className='w-64 h-80 bg-base-bg'>아이유 라디오</div>
            </div>
        </div>
    );
}