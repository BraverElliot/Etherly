// ChatModal.js
import { useState } from 'react';

const ChatModal = ({ isOpen, onClose }) => {
    const [inputMessage, setInputMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([
        { text: 'Hello, how can we assist you today?', sender: 'from' },
        // { text: 'Hi, I have a question about your products.', sender: 'to' },
        // Add more initial chat messages as needed
    ]);

    const handleSendMessage = () => {
        if (inputMessage.trim() === '') return;
        setChatMessages([...chatMessages, { text: inputMessage, sender: 'to' }]);
        setInputMessage('');

        // You can add logic here to handle responses or send messages to a server if needed.
    };

    return (
        <div
            className={`fixed bottom-0 left-0 p-4 bg-white shadow-lg w-80 rounded-t-lg ${isOpen ? 'block' : 'hidden'
                }`}
        >
            <div className="flex justify-between items-center bg-blue-500 text-white p-2 rounded-t-lg">
                <h2 className="text-lg font-semibold">Chat Support</h2>
                <button className="text-white" onClick={onClose}>
                    &times;
                </button>
            </div>
            <div className="px-4 py-2 overflow-y-auto max-h-52">
                {chatMessages.map((message, index) => (
                    <div
                        key={index}
                        className={`${message.sender === 'to'
                            ? 'bg-blue-500 text-white rounded-br-lg rounded-tl-lg ml-auto'
                            : 'bg-gray-200 text-gray-700 rounded-bl-lg rounded-tr-lg mr-auto'
                            } p-2 max-w-2/3 break-words`}
                    >
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="flex p-2">
                <input
                    type="text"
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-full mr-2 focus:outline-none focus:ring focus:ring-blue-300 text-black" // Added text-black class
                    placeholder="Type your message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                />
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    onClick={handleSendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatModal;
