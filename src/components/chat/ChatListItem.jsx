// src/components/Chat/ChatListItem.jsx
export default function ChatListItem({ name, message, time, isActive, hasMessenger }) {
    return (
      <div className={`p-3 rounded-lg ${isActive ? 'bg-blue-50' : 'hover:bg-gray-50'}`}>
        <div className="flex justify-between mb-1">
          <span className="font-medium">{name}</span>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <p className="text-sm text-gray-600 truncate">{message}</p>
      </div>
    );
  }
  