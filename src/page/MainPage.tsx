import React from 'react'
import SideBar from '../components/SideBar'
import MainContent from '../components/MainContent'

export default function MainPage() {
    return (
        <div className="flex">
            <SideBar />
            <div className="ml-[420px] w-full bg-black">
                <MainContent />
            </div>
        </div>
    )
}