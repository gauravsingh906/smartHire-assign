import React from 'react';
import { ChevronLeft, ChevronRight, RotateCw, Grid, Link2, Plus, ArrowLeft, ArrowRight, File, Download } from 'lucide-react';
import { BsTerminalSplit } from "react-icons/bs";

const Header = () => {
  return (
    <div className="w-full bg-white  flex items-center justify-between px-4">
      {/* Left Navigation Controls */}
      <div className="flex items-center gap-5">
        <div className="flex items-center ">
          <button className="space-x-2 flex  items-center justify-center rounded-full hover:bg-gray-100">
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300 mx-0.5"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          </button>
          <div className="w-8 h-8 m-3 flex items-center justify-center text-gray-400 hover:bg-gray-100">
            <BsTerminalSplit className="w-5 h-5" />
          </div>
          <div className='flex  '>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-100">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-100">
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-100">
            <RotateCw className="w-4 h-4" />
          </button>
          </div>
        </div>
      </div>

      {/* URL Bar */}

        <div className="flex items-center bg-gray-100 w-[250px] justify-between justify-center rounded h-8 px-3 gap-2   mx-2">
          <Grid className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600 text-sm">bluereceipt.com</span>
          <Link2 className="w-4 h-4 text-gray-400"></Link2>
        </div>


      {/* Right Actions */}
      <div className="flex items-center gap-2">
        <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-100">
          <Download className="w-5 h-5" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-gray-400   ml-1 pl-2">
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Header;