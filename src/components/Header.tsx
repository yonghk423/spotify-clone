import React, { useState, useEffect } from 'react';

export default function Header() {
    return (
        <div className='bg-black flex text-white justify-between'>
            <div>버튼 아이콘</div>
            <div className='flex'>
                <h1 className="">가입하기</h1>
                <h1 className="">로그인하기</h1>
            </div>
        </div>
    )
}