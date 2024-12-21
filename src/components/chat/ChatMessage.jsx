// src/components/Chat/ChatMessage.tsx
const ChatMessage = ({ content, timestamp, type }) => {
    return (
        <div className={`mb-4 ${type === 'system' ? 'text-center text-gray-500' : ''}`}>
            <div className={`inline-block rounded-lg p-3 ${
                type === 'user' ? 'bg-gray-100' : 
                type === 'response' ? 'bg-blue-600 text-white' : ''
            }`}>
                {content}
            </div>
            <div className="text-xs text-gray-500 mt-1">{timestamp}</div>
        </div>
    );
};
export default ChatMessage;
  
  