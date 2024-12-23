
import React from 'react';
import { MessageCircle, Sparkles, EllipsisVertical, ChevronDown, Send, MoreVertical, Info, ShoppingBasketIcon, ShoppingCart, Contact, ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
const ChatFull = () => {
  const [message, setMessage] = useState("");
  const [tooltip, setTooltip] = useState("");
  const handleSendMessage = () => {
    if (message.trim()) {
      alert(`Message sent: ${message}`);
      setMessage("");
    }
  };




  return (
    <div className="w-[52%] mb-2 justify-evenly p-2 bg-white  ">
      {/* Header */}
      <div className="p-2 flex h-[8%] items-center justify-between">
        <div className="flex w-11 p-2 bg-[#bfdbfe] h-12 rounded-full items-center gap-3">
          <Image
            src="/profile.png"
            alt="Profile"
            width={32}
            height={32}
            className="w-8 rounded-full"
            priority
          />
          <div>
            <h2 className="font-semibold text-md">Oğuz Yağız Kara</h2>
            <p className="text-sm text-gray-500">oguz@bluereceipt.com</p>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <div className="flex border items-center p-2 rounded-lg gap-3">
            <Image
              src="/messager.png"
              alt="Messenger"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="font-semibold text-md">Messenger</span>
            <ChevronDown className="w-4 h-4 ml-2 text-gray-600" />
          </div>

          <div className="flex gap-5">
            <button
              className="p-2 hover:bg-gray-100 rounded-full"
              onMouseEnter={() => setTooltip("More Options")}
              onMouseLeave={() => setTooltip("")}
            >
              <EllipsisVertical className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center justify-center p-2 rounded-full bg-[#bfdbfe]">
              <Image
                src="/profile.png"
                alt="Profile"
                width={24}
                height={24}
                className="w-6 h-6 rounded-full"
              />
            </div>
            <button
              className="p-2 hover:bg-gray-100 rounded-full"
              onMouseEnter={() => setTooltip("Info")}
              onMouseLeave={() => setTooltip("")}
            >
              <Info className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div
        className="mb-4 p-2  h-[80%] w-full justify-center bg-gray-50 space-y-4"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        {/* System Message */}
        <div className="flex relative w-full  flex-col ">
          <div className="bg-white rounded-lg  p-3 shadow-sm ">
            <div className="flex items-center  gap-2 mb-2">
              <div className='p-2 bg-[#bfdbfe] rounded-full'> <Image
                src="/profile.png"
                alt="Profile"
                width={28}
                height={28}
                className="w-7 h-7 rounded-full"
              />

              </div>
              <div>
                <div className="font-semibold text-sm">Oğuz Yağız Kara</div>
                <div className="text-xs text-gray-500">oguz@bluereceipt.com</div>
              </div>
            </div>
            <p className="text-md p-1">
              This is the very beginning of your direct message history with <span className="text-[#2dd4bf] bg-[#ccfbf1] p-1 rounded-full">@Oğuz Yağız Kara</span>
            </p>
          </div>

          <div className="absolute inset-0 z-0">

            <div className="absolute w-2 h-2 bg-gradient-to-tr from-purple-400 to-blue-500 rounded-full top-3 right-10"></div>
            <div className="absolute w-3 h-3 bg-gradient-to-tr from-pink-400 to-yellow-400 rounded-full top-2 right-14"></div>
            <div className="absolute w-4 h-4 bg-gradient-to-tr from-blue-400 to-green-400 rounded-full top-5 right-6"></div>
            <div className="absolute w-5 h-5 bg-gradient-to-tr from-red-400 to-purple-500 rounded-full top-6 right-8"></div>
            <div className="absolute w-3 h-3 bg-gradient-to-tr from-yellow-400 to-orange-400 rounded-full top-9 right-2"></div>
            <div className="absolute w-4 h-4 bg-gradient-to-tr from-yellow-400 to-indigo-400 rounded top-7 right-16"></div>

          </div>

        </div>
        <div className="text-md  flex justify-center "><span className='px-3 py-1 bg-white self-center rounded font-semibold'>Today</span></div>
        {/* User Message */}
        <div className="flex  items-start p-2 gap-2">
          <div className='p-2 bg-[#bfdbfe] rounded-full'><Image
            src="/profile.png"
            alt="Profile"
            width={24}
            height={24}
            className="w-6 h-6 rounded-full"
          />

          </div>
          <div className="space-y-1 w-[71%]">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div
                className='flex justify-between'><p className="text-sm mb-4">
                  I keep getting "error while creating a new pop up" for the first time setup, so I'm not able to create a pop up. My shop name is PinkSweetHeart
                </p>
                <div className=' w-18 h-18 p-1   rounded-full'> <Image
                  src="/messager.png"
                  alt="Messenger"
                  width={56}
                  height={56}
                  className="w-14"
                />
                </div></div>
              {/* Smart Response */}
              <div className="flex w-full justify-start">
                <div className="bg-gray-100 rounded-lg p-3 flex items-center gap-4 text-sm shadow-md hover:shadow-lg transition-shadow duration-300">
                  {/* Icon with animation */}
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center animate-pulse"
                      title="Smart Response Icon"
                    >
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-md text-gray-800">
                      Smart Response Detected!
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="ml-auto flex items-center gap-3">
                    {/* Cancel Button */}
                    <button
                      className="text-gray-600 border bg-white text-md font-semibold px-4 py-1 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300 transition-all duration-200"
                      title="Cancel this response"
                    >
                      Cancel
                    </button>
                    {/* Select Button */}
                    <button
                      className="bg-blue-600 text-white text-md font-semibold px-4 py-1 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-200"
                      title="Select this response"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-500">12:52PM</div>
          </div>
        </div>




        {/* Template Message */}
        <div className="flex justify-end ">
          <div className="space-y-1 w-[70%]">
            <div className="bg-blue-600  text-white rounded-lg p-3">
              <p className="text-sm">
                Hey, <span className='border-b bg-blue-800'>#firstname</span> I saw you were curious about our products. My name is X from StoreName, feel free to save my number and send me a text if you have any questions or concerns. If you're ready to
              </p>

            </div>
            <div className="flex justify-end text-xs text-gray-500">12:52PM</div>
          </div>

          <div className='p-3 bg-white rounded-full w-11 h-11 justify-center ml-1 items-center'>
            <Sparkles className='w-5 h-5'></Sparkles>
          </div>
        </div>

        {/* Purchase Notification */}
        <div className="flex  w-[95%] m-auto items-center gap-2 bg-white rounded-lg p-2">
          <div className="w-6 h-6  rounded-full flex items-center justify-center text-white">
            <ShoppingCart className="text-[#272dce] w-5 h-5" />
          </div>
          <div className="flex-1 text-sm">
            <span className="text-[#2dd4bf] bg-[#ccfbf1] text-sm p-1 m-1 rounded-full">@Ekrem Kenter</span>
            <span className=" font-medium text-sm">Product purchased!</span>
            <span className=" bg-black text-sm text-white p-1 m-1 rounded-lg">$99</span>
            <span className="font-medium text-sm">SNOW® TEETH WHITENING KIT</span>
          </div>
          <span className="text-xs text-gray-500">2m ago</span>
        </div>
      </div>

      {/* Input Area */}
      <div className="border h-[11%] p-1 rounded-lg gap-5">
        <input
          type="text"
          placeholder="Message Oğuz Yağız"
          className="w-full rounded-lg p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <div className="flex justify-between mt-1">
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <MessageCircle className="w-5 h-5 text-black font-extrabold" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Contact className="w-5 h-5 text-black font-extrabold" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ImageIcon className="w-5 h-5 text-black font-extrabold" />
            </button>
          </div>
          <div className="flex gap-2">
            <button
              className="p-2 hover:bg-gray-100 rounded-full"
              onClick={handleSendMessage}
            >
              <Send className="w-5 h-5 font-extrabold" />
            </button>
            <button className="p-2 hover:bg-gray-100 border-l border-gray-400">
              <ChevronDown className="w-5 h-5 font-extrabold" />
            </button>
          </div>
        </div>
      </div>
      {/* Tooltip */}
      {tooltip && (
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1">
          {tooltip}
        </div>
      )}
    </div>

  );
};

export default ChatFull;
