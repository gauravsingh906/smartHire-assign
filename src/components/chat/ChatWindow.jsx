  // src/components/Chat/ChatWindow.jsx
  import ChatMessage from './ChatMessage';
  import ChatInput from './ChatInput';
  import SmartResponse from './SmartResponse';
  
  export default function ChatWindow() {
    return (
      <div className="flex-1 flex flex-col">
        <div className="border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              <div>
                <h2 className="font-medium">Oğuz Yağız Kara</h2>
                <span className="text-sm text-gray-500">oguz@bluereceipt.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Messenger</button>
              <button className="px-4 py-2 hover:bg-gray-100 rounded-lg">⋮</button>
            </div>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          <ChatMessage 
            content="This is the very beginning of your direct message history"
            timestamp="Today"
            type="system"
          />
          <ChatMessage 
            content="I keep getting 'error while creating a new pop up'"
            timestamp="12:52 PM"
            type="user"
          />
          <SmartResponse />
        </div>
        
        <ChatInput />
      </div>
    );
  }
  