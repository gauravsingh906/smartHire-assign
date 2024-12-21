import React from 'react';
import { MessageCircle,  Sparkles,EllipsisVertical, ChevronDown,Image, Send, MoreVertical, Info, ShoppingBasketIcon, ShoppingCart, Contact } from 'lucide-react';

const ChatFull = () => {
  return (
    <div className="w-[52%] mb-2 justify-evenly p-2 bg-white  ">
      {/* Header */}
      <div className="p-2 flex h-[8%] items-center justify-between ">
        <div className="flex w-11 p-2  bg-[#bfdbfe] h-12 rounded-full  items-center gap-3">
          <img 
            src="/profile.png"
            alt="Profile" 
            className="w-8 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-md">Oğuz Yağız Kara</h2>
            <p className="text-sm text-gray-500 text-sm">oguz@bluereceipt.com</p>
          </div>
        </div>
     
 <div className='flex justify-end  gap-4'>       <div className="flex border items-center  p-2 rounded-lg gap-3">
          <img 
            src="messager.png" 
            className="w-6 h-6"
            alt="Messenger"
          />
          <span className=" font-semibold text-md">Messenger</span>
          <ChevronDown className="w-4 h-4 ml-2 text-gray-600" />
        </div>
       
        <div className="flex gap-5">

          <div className="flex items-center ">
            <img src="tick.png" alt="Messenger" className="w-3 h-3" />
          
          </div>
          <button>
         <EllipsisVertical  className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center justify-center p-2 rounded-full bg-[#bfdbfe] ">
            <img src="profile.png" alt="Messenger" className="w-6 h-6" />
            
          </div>
         
         
          <button>
          <ChevronDown className="w-5 h-5 text-gray-600" />
          </button>
          <button>
            <Info className="w-5 h-5 text-gray-600" />
          </button>
        </div></div>
      </div>

      {/* Chat Area */}
      <div
  className="mb-4 p-2  h-[80%] w-full justify-center bg-gray-50 space-y-4"
  style={{ backgroundImage: "url('/bg.jpg')"}}
>
     {/* System Message */}
        <div className="flex relative w-full  flex-col ">
          <div className="bg-white rounded-lg  p-3 shadow-sm ">
            <div className="flex items-center  gap-2 mb-2">
             <div className='p-2 bg-[#bfdbfe] rounded-full'> <img 
                src="profile.png"
                alt="Profile" 
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
          
  <div class="absolute inset-0 z-0">
   
    <div class="absolute w-2 h-2 bg-gradient-to-tr from-purple-400 to-blue-500 rounded-full top-3 right-10"></div>
    <div class="absolute w-3 h-3 bg-gradient-to-tr from-pink-400 to-yellow-400 rounded-full top-2 right-14"></div>
    <div class="absolute w-4 h-4 bg-gradient-to-tr from-blue-400 to-green-400 rounded-full top-5 right-6"></div>
    <div class="absolute w-5 h-5 bg-gradient-to-tr from-red-400 to-purple-500 rounded-full top-6 right-8"></div>
    <div class="absolute w-3 h-3 bg-gradient-to-tr from-yellow-400 to-orange-400 rounded-full top-9 right-2"></div>
    <div class="absolute w-4 h-4 bg-gradient-to-tr from-yellow-400 to-indigo-400 rounded top-4 right-16"></div>
    <div class="absolute w-6 h-3 bg-gradient-to-tr from-red-400 to-green-400 rounded-[.5rem] top-10 right-16"></div>
  </div>
         
        </div>
        <div className="text-md  flex justify-center "><span className='px-3 py-1 bg-white self-center rounded font-semibold'>Today</span></div>
        {/* User Message */}
        <div className="flex  items-start p-2 gap-2">
        <div className='p-2 bg-[#bfdbfe] rounded-full'> <img 
                src="profile.png"
                alt="Profile" 
                className="w-6 h-6 rounded-full"
              />
              </div>
          <div className="space-y-1 w-[71%]">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div
              className='flex justify-between'><p className="text-md mb-4">
                I keep getting "error while creating a new pop up" for the first time setup, so I'm not able to create a pop up. My shop name is PinkSweetHeart
              </p>
              <div className=' w-18 h-18 p-1   rounded-full'> <img 
                src="messager.png" 
                alt="Profile" 
                className="w-14  "
              />
              </div></div>
                   {/* Smart Response */}
        <div className="flex  justify-start ">
          <div className="bg-gray-100 rounded-lg p-2 flex items-center gap-2 text-sm">
            <div className="flex items-center mr-4 gap-1">
              <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                <MessageCircle className="w-3 h-3 text-white" />
              </div>
              <span className="font-medium ml-2 text-md font-semibold">Smart Response Detected!</span>
            </div>
            <button className="text-gray-600 border text-md font-semibold px-4 py-1 rounded">Cancel</button>
            <button className="bg-blue-600 text-white text-md font-semibold px-4 py-1 rounded">Select</button>
          </div>
        </div>
            </div>
            <div className="text-xs text-gray-500">12:52PM</div>
          </div>
        </div>

   

        {/* Template Message */}
        <div className="flex  justify-end ">
        <div className="space-y-1 w-[70%]">
          <div className="bg-blue-600  text-white rounded-lg p-3 max-w-md">
            <p className="text-md">
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
        <div className="flex  w-[96%] m-auto items-center gap-2 bg-white rounded-lg p-2">
          <div className="w-6 h-6  rounded-full flex items-center justify-center text-white">
          <ShoppingCart className="text-[#272dce] w-5 h-5" />
          </div>
          <div className="flex-1 text-sm">
            <span className="text-[#2dd4bf] bg-[#ccfbf1]  p-1 m-1 rounded-full">@Ekrem Kenter</span>
            <span className=" font-medium">Product purchased!</span>
            <span className=" bg-black text-white p-1 m-1 rounded-lg">$99</span>
            <span className="font-medium">SNOW® TEETH WHITENING KIT</span>
          </div>
          <span className="text-sm text-gray-500">2m ago</span>
        </div>
      </div>

      {/* Input Area */}
      <div className=" border  h-[11%] p-1 rounded-lg gap-5">
      <div className='mb-[1.5]'>
        <input
          type="text"
          placeholder="Message Oğuz Yağız"
          className="w-full  rounded-lg p-2"
          />
      </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <MessageCircle className="w-5 h-5 text-black font-extrabold" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Contact className=" w-5 h-5 text-black font-extrabold" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Image className="w-5 h-5 text-black font-extrabold" />
            </button>
          </div>
          <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Send className="w-5 h-5 font-extrabold" />
          </button>
          <button className="p-2  hover:bg-gray-100 border-l border-gray-400">
            <ChevronDown className="w-5 h-5 font-extrabold" />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatFull;