import Head from 'next/head'
import Humburger from '../components/humburger';
import { useState, useEffect } from 'react';
import useInterval from 'use-interval';
import Link from 'next/link';

const Home = () => {
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [messageTimer, setMessageTimer] = useState(0);
  const welcomeMessages = [
    'ようこそ！',
    'Welcome!',
  ]
  const messageBuffer = 20;
  const messagePatterns = welcomeMessages.map(msg => {
    const patterns: string[] = Array(msg.length + messageBuffer).fill('');
    return patterns.map((p, i) => msg.slice(0, i + 1));
  }).flat();

  useInterval(() => {
    setMessageTimer(messageTimer + 1);
    setDisplayedMessage(messagePatterns[messageTimer % messagePatterns.length]);
  }, 120);

  return (
    <div>
      <Head>
        <title>TaigaOzawa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header className="fixed top-0 w-screen">
          <div className="px-4 pt-3 pb-2 flex justify-between bg-white">
            <div className=" text-xl font-montserrat ">
              TaigaOzawa
            </div>
            <div>
              <Humburger className="fill-current text-gray-500" />
            </div>
          </div>
        </header>
        <main className="bg-gray-50 min-h-screen">
          <div className="flex justify-center">
            <div className="mt-36 text-4xl font-bold ">
              <div className="px-3 border-b-4 border-yellow-300">{displayedMessage}</div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <div className="text-xl font-bold text-gray-600">
              小澤泰河
            </div>
            <div className="text-xl font-bold text-gray-600 pl-2.5 ml-3 border-l border-gray-400">
              Taiga Ozawa
            </div>
          </div>
          <div className="flex justify-center mt-3 text-gray-500">
            <span>筑波大学&nbsp;</span>
            <span>物理学学位プログラム（M2）</span>
          </div>
          <div className="flex justify-center text-gray-500">
            <span>Master&apos;s Program in Physics,&nbsp;</span>
            <span>University of Tsukuba</span>
          </div>

          <div className="flex justify-center mt-12">
            <div className="px-2 pt-2 pb-1.5 rounded bg-sky-600 hover:bg-sky-700 transition text-white cursor-pointer">
              <span className="font-bold">
                詳しいプロフィール&nbsp;
              </span>
              Detailed profile</div>
          </div>
          <div className="flex justify-center mt-2">
            <Link href="/notes">
              <div className="px-2 pt-2 pb-1.5 rounded bg-pink-600 hover:bg-pink-700 transition text-white cursor-pointer">
                <span className="font-bold">
                  ノート
                </span> Notes
              </div>
            </Link>
          </div>

        </main>
        <footer></footer>
      </div>
    </div>
  )
};

export default Home;