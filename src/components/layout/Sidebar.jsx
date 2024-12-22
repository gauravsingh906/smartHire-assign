"use client";

import React, { useState } from 'react';
import { ChevronLeft, Search, Plus, Users, Filter, MessageCircleCodeIcon, ArrowLeft, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState('messages');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedMessageId, setSelectedMessageId] = useState(null);

    const messages = [
        {
            id: 1,
            user: "Oğuz Yağız Kara",
            avatar: "/api/placeholder/32/32",
            message: "I keep getting \"error while creating a new pop up\"...",
            time: "5m",
            platform: "message",
            online: true,
            isSend: false,
            isRead: false
        },
        {
            id: 2,
            user: "George Klein",
            avatar: "/api/placeholder/32/32",
            message: "Wow, this is really epic man! Thanks...",
            time: "1h 54m",
            platform: "messenger",
            online: false,
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
            online: false,
            isSend: true,
            isRead: true
        }, {
            id: 4,
            user: "Erşad Başbağ",
            initials: "EB",
            message: "There will be changes to next week's presentation due to the recent poll...",
            time: "6h 21m",
            platform: "instagram",
            isSend: false,
            online: false,
            isRead: false
        }
    ];

    // Filtered messages based on search input
    const filteredMessages = messages.filter((msg) =>
        msg.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
        msg.message.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-[24%] bg-white min-h-screen p-2 flex flex-col border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <ArrowLeft className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600" />
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
                    <Search className="w-5 text-gray-900 cursor-pointer hover:text-blue-600" />
                    <div className='rounded-lg border-2 p-2 cursor-pointer hover:bg-gray-100'>
                        <Plus className="w-4 h-4 text-gray-900" />
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex w-full p-1 bg-gray-100 rounded-lg space-x-2 mb-4">
                <button
                    onClick={() => setActiveTab('messages')}
                    className={`px-4 py-1.5 w-[50%] border rounded-lg text-md font-bold ${activeTab === 'messages' ? 'bg-blue-500 text-white' : 'bg-white'}`}
                >
                    Messages
                </button>
                <button
                    onClick={() => setActiveTab('segments')}
                    className={`px-4 py-1.5 w-[50%] border rounded-lg text-md ${activeTab === 'segments' ? 'bg-blue-500 text-white' : 'bg-white'}`}
                >
                    Segments
                </button>
            </div>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Filters */}
            <div className="flex items-center justify-between  mb-4">
                <div className="flex items-center gap-2">
                    <Users className="w-5  text-gray-900" />
                    <span className="text-sm font-semibold">All</span>
                    <span className="text-sm bg-indigo-200 text-indigo-600 px-2 py-1 rounded-full font-semibold">232</span>
                    <ChevronDown className='w-5 ml-1 text-gray-500'></ChevronDown>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                    <Filter className="w-4 text-gray-600" />
                    <span className="text-sm text-black font-semibold">Oldest</span>
                    <ChevronDown className='w-4 text-gray-500'></ChevronDown>
                </div>
            </div>

            {/* Message List */}
            <div className="space-y-1">
                {messages.map((message) => (
                    <div key={message.id} className="p-2 border-b-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <div className="flex items-start space-x-3 ">
                            {message.avatar ? (
                                message.avatar.startsWith('/api') ? (
                                    <div className='bg-[#bae6fd] p-1 rounded-full'>
                                        <Image
                                            src="/profile.png"     // Replace with your image path
                                            alt={message.user}     // Dynamic alt text based on message.user
                                            width={32}             // Convert "w-8" to pixel value (8 * 4 = 32px)
                                            height={32}            // Convert "h-8" to pixel value (8 * 4 = 32px)
                                            className="rounded-full"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-8 h-8 flex bg-yellow-200 rounded-full  items-center justify-center text-xl">
                                        {message.avatar}
                                    </div>
                                )
                            ) : (
                                <div className="w-8 h-8 bg-[#bae6fd]  text-blue-600 rounded-full flex items-center justify-center text-sm">
                                    {message.initials}
                                </div>
                            )}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <span className="font-medium text-md">{message.user}</span>
                                        {message.platform === 'messenger' &&
                                            <Image
                                                src="/messager.png"     // Path to the WhatsApp icon
                                                alt={message.user}      // Dynamic alt text based on message.user
                                                width={24}              // Convert "w-6" to pixel value (6 * 4 = 24px)
                                                height={24}             // Convert "h-6" to pixel value (6 * 4 = 24px)
                                                className="rounded-full"
                                            />

                                        }
                                        {message.platform === 'message' &&
                                            <MessageCircleCodeIcon className='w-5 text-blue'></MessageCircleCodeIcon>
                                        }
                                        {message.platform === 'whatsapp' &&
                                            <Image
                                                src="/whatsapp.png"     // Path to the WhatsApp icon
                                                alt={message.user}      // Dynamic alt text based on message.user
                                                width={29}              // Convert "w-6" to pixel value (6 * 4 = 24px)
                                                height={29}             // Convert "h-6" to pixel value (6 * 4 = 24px)
                                                className="rounded-full"
                                            />}
                                        {message.platform === 'instagram' &&
                                            <Image
                                                src="/insta.png"       // Replace with your image path
                                                alt={message.user}     // Dynamic alt text based on message.user
                                                width={24}             // Convert "w-6" to pixel value (6 * 4 = 24px)
                                                height={24}            // Ensure height matches width for a square shape
                                                className="rounded-full"
                                            />}
                                    </div >
                                    <div
                                        className={`text-s ${message.online ? 'text-blue-600' : 'text-black'} flex flex-col`}
                                    >
                                        {message.online ? (
                                            <div className="inline-flex items-center text-sm">
                                                {message.time}
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