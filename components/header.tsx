import Humburger from './humburger';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-screen border-b bg-white">
        <div className="px-4 pt-3 pb-2  mx-auto max-w-7xl">
          <div className="flex justify-between">
            <Link href="/" passHref>
              <div className=" text-xl font-montserrat cursor-pointer">
                TaigaOzawa
              </div>
            </Link>
            <div>
              <div className="cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
                <Humburger className="fill-current text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="top-12 fixed w-screen bg-white border-t-2 z-50" hidden={!showMenu} >
        <div className=" px-4 py-4 max-w-7xl mx-auto text-gray-500 ">
          <Link href="/" passHref>
            <div
              className="pb-1 hover:text-red-400 cursor-pointer border-b transition duration-200"
              onClick={() => { setShowMenu(false) }}
            >
              <span className="font-bold">トップ</span>
              <span>&nbsp;Top</span>
            </div>
          </Link>
          <Link href="/profile" passHref>
            <div
              className="pb-1 pt-2 hover:text-red-400 cursor-pointer border-b transition duration-200"
              onClick={() => { setShowMenu(false) }}
            >
              <span className="font-bold">プロフィール</span>
              <span>&nbsp;Profile</span>
            </div>
          </Link>
          <Link href="/notes" passHref>
            <div
              className="pt-1.5 hover:text-red-400 cursor-pointer transition duration-200"
              onClick={() => { setShowMenu(false) }}
            >
              <span className="font-bold">ノート・ブログ</span>
              <span>&nbsp;Notes & Blog</span>
            </div>
          </Link>
        </div>
        <div
          className="fixed w-screen h-screen opacity-80 z-10 bg-gray-600"
          onClick={() => setShowMenu(false)}>
        </div>
      </div>

    </>
  );
};

export default Header;
