import React from 'react';
import { ChevronLeft, Search, Plus, Users, Filter, MessageCircleCodeIcon, ArrowLeft, ChevronDown, Dot, Disc, Disc2 } from 'lucide-react';
import { FaCircle } from "react-icons/fa";
const Sidebar = () => {
    const messages = [
        {
            id: 1,
            user: "Oğuz Yağız Kara",
            avatar: "/api/placeholder/32/32",
            message: "I keep getting \"error while creating a new pop up\" for the first time setu...",
            time: "5m",
            platform: "message",
            online:true,
            isSend: false,
            isRead: false
        },
        {
            id: 2,
            user: "George Klein",
            avatar: "/api/placeholder/32/32",
            message: "Wow, this is really epic man! Thank...",
            time: "1h 54m",
            online:false,
            platform: "messenger",
            isSend: true,
            isRead: false
        },
        {
            id: 3,
            user: "847-401-1944",
            avatar: "😊",
            message: "Haha oh man, this is amazing!",
            time: "6h 21m",
            platform: "whatsapp",
            online:false,
            isSend: true,
            isRead: true
        },
        {
            id: 4,
            user: "Erşad Başbağ",
            initials: "EB",
            message: "There will be changes to next week's presentation due to the recent poll...",
            time: "6h 21m",
            platform: "instagram",
            isSend: false,
            online:false,
            isRead: false
        }
    ];

    return (
        <div className="w-[24%] bg-white min-h-screen p-2  flex flex-col border-gray-200">
            {/* Header */}

            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-lg">●</span>
                        </div>
                        <div>
                            <div className="font-bold tracking-wide text-lg">BlueChat</div>
                            <div className="text-md text-gray-500">Inbox</div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-3 gap-2">
                    <div className='rounded-lg'>     <Search className="w-5 text-bold text-gray-900" /></div>
                    <div className='rounded-lg border-2 p-2'><Plus className="w-4 h-4 text-bold text-gray-900" /></div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex w-full p-1 bg-gray-100 tracking-wide  items-center rounded-lg space-x-2 mb-4">
                <button className="px-4 py-1.5 w-[50%] shadow-3xl border rounded-lg text-md font-bold">
                    Messages
                </button>
                <button className="px-4 py-1.5 w-[50%] text-gray-400 text-md ">
                    Segments
                </button>
            </div>

            {/* Filters */}
            <div className="flex items-center justify-between  mb-4">
                <div className="flex items-center gap-4">
                    <Users className="w-5  text-gray-900" />
                    <span className="text-md font-semibold">All</span>
                    <span className="text-md bg-indigo-200 text-indigo-600 px-2 py-1 rounded-full font-semibold">232</span>
                    <ChevronDown className='w-5 text-gray-500'></ChevronDown>
                </div>
                <div className="flex items-center gap-4 text-gray-500">
                    <Filter className="w-4 text-gray-600" />
                    <span className="text-md text-black font-semibold">Oldest</span>
                    <ChevronDown className='w-4 text-gray-500'></ChevronDown>
                </div>
            </div>

            {/* Message List */}
            <div className="space-y-1">
                {messages.map((message) => (
                    <div key={message.id} className="p-3 border-b-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <div className="flex items-start space-x-3">
                            {message.avatar ? (
                                message.avatar.startsWith('/api') ? (
                                    <img
                                        src='profile.jpeg'
                                        alt={message.user}
                                        className="w-8 h-8 rounded-full"
                                    />
                                ) : (
                                    <div className="w-8 h-8 flex items-center justify-center text-xl">
                                        {message.avatar}
                                    </div>
                                )
                            ) : (
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm">
                                    {message.initials}
                                </div>
                            )}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <span className="font-medium text-md">{message.user}</span>
                                        {message.platform === 'messenger' &&
                                            <img
                                                src='messager.png'
                                                alt={message.user}
                                                className="w-5  rounded-full"
                                            />
                                        }
                                        {message.platform === 'message' &&
                                            <MessageCircleCodeIcon className='w-5 text-blue'></MessageCircleCodeIcon>
                                        }
                                        {message.platform === 'whatsapp' &&
                                            <img
                                                src='whatsapp.png'
                                                alt={message.user}
                                                className="w-6  rounded-full"
                                            />}
                                        {message.platform === 'instagram' &&
                                            <img
                                                src='insta.png'
                                                alt={message.user}
                                                className="w-6 rounded-full"
                                            />}
                                    </div >
                                    <div
  className={`text-s ${message.online ? 'text-blue-600' : 'text-black'} flex flex-col`}
>
  {message.online ? (
    <div className="inline-flex items-center text-sm">
     <FaCircle className='mr-2 w-2' /> {message.time}
    </div>
  ) : (
    <span className='text-sm'>{message.time}</span>
  )}
</div>


                                </div>
                                <div className='flex justify-between content-baseline'>
                                    <div className='w-[90%]'>
                                        <p className="text-sm text-gray-600">{message.message}</p>
                                    </div>
                                    <div className='flex items-end'>  <span className="text-gray-400">
                                        {message.isRead ? (
                                            <span className="text-blue-600">✓✓</span>
                                        ) : message.isSend ? (
                                            <span className="text-gray-400">✓✓</span>
                                        ) : (
                                            <span>✓</span>
                                        )}


                                    </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Sidebar;