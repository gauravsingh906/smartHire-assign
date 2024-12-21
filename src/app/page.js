"use client"

import Sidebar from '@/components/Layout/Sidebar'

import Chat from '@/components/chat/ChatFull'
import UserInfoPanel from '@/components/UserInfo/UserInfoPanel'
import Header from '@/components/layout/Header'


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