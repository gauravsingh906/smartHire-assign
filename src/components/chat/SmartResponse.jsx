const SmartResponse = () => {
    return (
      <div className="mb-4">
        <div className="bg-blue-100 p-3 rounded-lg mb-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Smart Response Detected!</span>
            <div className="space-x-2">
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-200 rounded">Cancel</button>
              <button className="px-3 py-1 text-sm text-white bg-blue-600 rounded">Select</button>
            </div>
          </div>
          <p className="text-sm">
            Hey, #firstname! I saw you were curious about our products. My name is X from StoreName, feel free to save my number and send me a text if you have any questions or concerns. If you're ready to
          </p>
        </div>
      </div>
    );
  };

  export default SmartResponse;