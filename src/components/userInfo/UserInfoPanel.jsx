
import React, { useState } from 'react';
import {
  Phone,
  Video,
  MoreHorizontal,
  Eye,
  Search,
  User,
  Clock,
  Mail,
  ChevronDown,
  ChevronUp,
  Plus,
  ShoppingCart,
  X,
  Dot,
} from 'lucide-react';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import Image from 'next/image';

const UserInfoPanel = () => {
  const [isInformationExpanded, setIsInformationExpanded] = useState(true);
  const [isTagsExpanded, setIsTagsExpanded] = useState(true);
  const [isMoreExpanded, setIsMoreExpanded] = useState(false);

  const tags = [
    { id: 1, name: 'Abandoned Cart User' },
    { id: 2, name: 'Popup' },
    { id: 3, name: 'Shop Error' },
    { id: 4, name: 'Successful' },
  ];

  return (
    <div className="w-[24%] p-2  bg-white min-h-screen  border-gray-100">
      {/* Profile Header */}
      <div className="text-center mb-6">
        <div className="relative inline-block">
          <div className="w-20 p-1 h-20 bg-[#bae6fd] rounded-full mb-2">
          <Image
  src="/profile.png" // Replace with your image path
  alt="Profile"       // Provide an appropriate alt text
  width={90}          // Specify width
  height={90}         // Specify height
  className="rounded-full"
/>
          </div>
          <div className="absolute bottom-1 h-6 right-0 w-6 bg-blue-600 rounded-full flex items-center justify-center">
            <Dot className="text-white" />
          </div>
        </div>
        <h2 className="font-semibold text-l mb-1">Oğuz Yağız Kara</h2>
        <p className="text-sm text-gray-500">11:59pm in Ankara, Turkey</p>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        <button className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg">
          <Phone className="w-5 h-5 text-gray-600 mb-1" />
          <span className="text-lg">Call</span>
        </button>
        <button className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg">
          <Video className="w-5 h-5 text-gray-600 mb-1" />
          <span className="text-lg">Video</span>
        </button>
        <button className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg">
          <MoreHorizontal className="w-5 h-5 text-gray-600 mb-1" />
          <span className="text-lg">More</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="bg-gray-50 rounded-lg p-1 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="border-2 rounded-lg p-2">
            <div className="flex items-center text-md text-gray-600 mb-1">
              <RiMoneyDollarCircleFill className="w-4 h-4 mr-1" />
              Revenue
            </div>
            <div className="font-bold text-[1.4rem]">$3,452</div>
            <div className="text-sm text-gray-500">3 Orders</div>
          </div>
          <div className="border-2 rounded-lg p-2">
            <div className="flex items-center text-md text-gray-600 mb-1">
              <Eye className="w-4 h-4 mr-1" />
              Web Visits
            </div>
            <div className="font-bold text-[1.4rem]">42</div>
            <div className="text-sm text-gray-500">4 Link Clicks</div>
          </div>
        </div>
      </div>

      {/* Action Icons */}
      <div className="grid grid-cols-3 rounded-lg p-1 bg-gray-100 mb-4 gap-1">
        <button className="p-2 bg-white hover:bg-gray-50 rounded-lg">
          <User className="w-5 text-gray-900 mx-auto" />
        </button>
        <button className="p-2 hover:bg-gray-50 rounded-lg">
          <Mail className="w-5 text-gray-900 mx-auto" />
        </button>
        <button className="p-2 hover:bg-gray-50 rounded-lg">
          <Clock className="w-5 text-gray-900 mx-auto" />
        </button>
      </div>

      {/* Search */}
      <div className="relative bg-gray-300 rounded-lg mb-4">
        <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
        <input
          type="text"
          placeholder="Search in general..."
          className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Information Section */}
      <div className="mb-4 p-2">
        <div
          className="flex items-center justify-between mb-2 cursor-pointer"
          onClick={() => setIsInformationExpanded(!isInformationExpanded)}
        >
          <div className="flex items-center">
            {isInformationExpanded ? (
              <ChevronDown className="w-4 h-4 mr-2" />
            ) : (
              <ChevronUp className="w-4 h-4 mr-2" />
            )}
            <span className="font-semibold text-lg">Information</span>
          </div>
          <button className="text-blue-600 text-md flex items-center">
            <Plus className="w-4 h-4 mr-1" />
            Add
          </button>
        </div>

        {isInformationExpanded && (
          <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-sm">
              <User className="w-4 h-4 text-gray-400 mr-3" />
              <span className="text-gray-600">Segment</span>
            </div>
            <div className="flex items-center text-sm">
              <ShoppingCart className="w-4 h-4 text-gray-400 mr-3" />
              <span className="font-semibold text-black">Abandoned Cart</span>
            </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-gray-400 mr-3" />
                <span className="text-gray-600">Email</span>
              </div>
              <span  className='font-semibold text-black'>oguzyagixkara@gmail.com</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-gray-400 mr-3" />
                <span className="text-gray-600">Phone</span>
              </div>
              <span  className='font-semibold text-black'>+90 535 646 81 77</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-gray-400 mr-3" />
                <span className="text-gray-600">Last Visited</span>
              </div>
              <span className='font-semibold text-black'>8 Aug, 2021</span>
            </div>
          </div>
        )}
      </div>

      {/* Show More Section */}
      <div className="mb-4 p-2 border-2  flex  content-center py-[1px] flex-col rounded-lg">
        <div
          className="flex items-center justify-between mb-2 cursor-pointer"
          onClick={() => setIsMoreExpanded(!isMoreExpanded)}
        >
          <div className="flex items-center">
            {isMoreExpanded ? (
              <ChevronUp className="w-4 h-4 mr-2" />
            ) : (
              <ChevronDown className="w-4 h-4 mr-2" />
            )}
            <span className="font-semibold text-lg">Show more</span>
          </div>
        </div>

        {isMoreExpanded && (
          <div className="space-y-3">
            <p>Show more options</p>
          </div>
        )}
      </div>

      {/* Tags Section */}
      <div>
        <div
          className="flex p-2 items-center justify-between mb-2 cursor-pointer"
          onClick={() => setIsTagsExpanded(!isTagsExpanded)}
        >
          <div className="flex items-center">
            {isTagsExpanded ? (
              <ChevronDown className="w-4 h-4 mr-2" />
            ) : (
              <ChevronUp className="w-4 h-4 mr-2" />
            )}
            <span className="font-semibold text-lg">Tags</span>
          </div>
          <button className="text-blue-600 text-md flex items-center">
            <Plus className="w-4 h-4 mr-1" />
            Add
          </button>
        </div>

        {isTagsExpanded && (
          <div className="flex flex-wrap  gap-2">
            {tags.map((tag) => (
              <div
                key={tag.id}
                className="flex items-center justify-between text-black bg-gray-200 rounded-lg px-3 py-1 font-semibold text-sm"
              >
                {tag.name}
                <button className="ml-1">
                  <X className="w-3 h-3 text-gray-500" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfoPanel;
