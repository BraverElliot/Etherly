"use client"
import Image from 'next/image'
import Link from 'next/link';
import ChatModal from './components/chatModal';
import { useState } from 'react';
import { BsFillChatFill } from 'react-icons/bs';


export default function Home() {

  const [isChatOpen, setChatOpen] = useState(false);

  const toolsArray = [
    { title: 'Uniswap', path: "/uniswap", description: '', imageUrl: 'https://static.vecteezy.com/system/resources/previews/011/307/370/original/uniswap-uni-badge-crypto-3d-rendering-free-png.png' }
  ]
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className='text-center'>
          <h1 className="relative text-6xl font-bold">
            Etherly
          </h1>
          <h1 className="text-2xl font-bold pt-2">
            Your hub for web3
          </h1>
        </div>

      </div>
      <div className='pt-5'>
        {toolsArray.map((tool, index) => {
          return (
            <Link href={tool.path} key={index}>
              <div className="border border-gray-300 p-4 mb-4 rounded-lg">
                <Image
                  src={tool.imageUrl}
                  alt={tool.title}
                  width={200} // Adjust the width as needed
                  height={150} // Adjust the height as needed
                />
                <h1 className="text-xl font-semibold">{tool.title}</h1>
                <p className="text-gray-600 text-sm">{tool.description}</p>
              </div>
            </Link>
          );
        })}
      </div>

      <div
        onClick={() => setChatOpen(true)}
        className="fixed bottom-4 left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
      >
        <BsFillChatFill className='w-[40px] h-[40px]' />
        {/* Open Chat */}
      </div>
      {/* Render the chat modal */}
      <ChatModal isOpen={isChatOpen} onClose={() => setChatOpen(false)} />
    </main>
  )
}
