import React from 'react';

export default function SideBar() {
    return (
        <div className="fixed h-full w-420 bg-black text-white p-4">
            <div className='flex gap-2'>
                <img src="/Spotify_icon.png" alt="Logo" className="w-8 h-8 mb-4" /> {/* 이미지의 크기를 조절합니다. */}
                <h2 className="text-2xl font-bold mb-4">Spotify</h2>
            </div>
            <h2 className="text-2xl font-bold mb-4">홈</h2>
            <h2 className="text-2xl font-bold mb-4">검색하기</h2>
            <h2 className="text-2xl font-bold mb-4">내 라이브러리</h2>
        </div>
    )
}