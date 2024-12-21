"use client"

import Sidebar from '@/components/layout/Sidebar.jsx'

import Chat from '@/components/chat/ChatFull.jsx'
import UserInfoPanel from '@/components/userInfo/UserInfoPanel.jsx'
import Header from '@/components/layout/Header.jsx'


export default function Home() {
  return (
    <div className='flex flex-col p-2 min-h-screen justify-center content-center'>
      <Header></Header>
    <div className="flex m-auto p-2 m-2 border  rounded-lg ">
      <Sidebar />
      <Chat />
      <UserInfoPanel />
    </div>
    </div>
  )
}