

  // src/components/Chat/ChatInput.tsx
const ChatInput = () => {
    return (
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center space-x-2">
          <div className="flex-1 border border-gray-200 rounded-lg p-2">
            <textarea
              placeholder="Message Oğuz Yağız"
              className="w-full resize-none focus:outline-none"
              rows={1}
            />
            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex space-x-2">
                <button className="p-1 hover:bg-gray-100 rounded">📎</button>
                <button className="p-1 hover:bg-gray-100 rounded">😊</button>
              </div>
              <button className="px-4 py-1 bg-blue-600 text-white rounded-full text-sm">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default  ChatInput;