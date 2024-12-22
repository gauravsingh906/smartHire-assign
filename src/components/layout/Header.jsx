import React, { useState } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    RotateCw,
    Grid,
    Link2,
    Plus,
    ArrowLeft,
    ArrowRight,
    File,
    Download,
} from 'lucide-react';
import { BsTerminalSplit } from 'react-icons/bs';

const Header = () => {
    const [tooltip, setTooltip] = useState('');
    const [url, setUrl] = useState('bluereceipt.com');

    const handleRefresh = () => {
        alert('Page refreshed!');
    };

    const handleNavigate = (direction) => {
        alert(`Navigating ${direction}`);
    };

    return (
        <div className="w-full bg-white flex items-center justify-between px-4">
            {/* Left Navigation Controls */}
            <div className="flex items-center gap-5">
                <div className="flex items-center">
                    <button
                        className="space-x-2 flex items-center justify-center rounded-full hover:bg-gray-100"
                        onMouseEnter={() => setTooltip('Menu')}
                        onMouseLeave={() => setTooltip('')}
                    >
                        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                        <div className="w-3 h-3 rounded-full bg-gray-300 mx-0.5"></div>
                        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    </button>
                    <div
                        className="w-8 h-8 m-3 flex items-center justify-center text-gray-400 hover:bg-gray-100"
                        onMouseEnter={() => setTooltip('Split View')}
                        onMouseLeave={() => setTooltip('')}
                    >
                        <BsTerminalSplit className="w-5 h-5" />
                    </div>
                    <div className="flex">
                        <button
                            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-100"
                            onMouseEnter={() => setTooltip('Go Back')}
                            onMouseLeave={() => setTooltip('')}
                            onClick={() => handleNavigate('back')}
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-100"
                            onMouseEnter={() => setTooltip('Go Forward')}
                            onMouseLeave={() => setTooltip('')}
                            onClick={() => handleNavigate('forward')}
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button
                            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-100"
                            onMouseEnter={() => setTooltip('Refresh')}
                            onMouseLeave={() => setTooltip('')}
                            onClick={handleRefresh}
                        >
                            <RotateCw className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* URL Bar */}
            <div className="flex items-center bg-gray-100 w-[250px] justify-between rounded h-8 px-3 gap-2 mx-2">
                <Grid className="w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="bg-transparent text-gray-600 text-sm focus:outline-none"
                />
                <Link2
                    className="w-4 h-4 text-gray-400 cursor-pointer"
                    onClick={() => alert('Copied URL!')}
                />
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
                <button
                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-100"
                    onMouseEnter={() => setTooltip('Download')}
                    onMouseLeave={() => setTooltip('')}
                    onClick={() => alert('Downloading...')}
                >
                    <Download className="w-5 h-5" />
                </button>
                <button
                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-100"
                    onMouseEnter={() => setTooltip('Add New')}
                    onMouseLeave={() => setTooltip('')}
                    onClick={() => alert('Adding a new item...')}
                >
                    <Plus className="w-5 h-5" />
                </button>
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

export default Header;
