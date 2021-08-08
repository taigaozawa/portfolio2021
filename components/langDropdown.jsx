import React from "react";
import { createPopper } from "@popperjs/core";

const LangDropdown = ({lang, setLang}) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <button
        className={
          "w-40 text-gray-100 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bg-gray-500"
        }
        type="button"
        ref={btnDropdownRef}
        onClick={() => {
          dropdownPopoverShow
            ? closeDropdownPopover()
            : openDropdownPopover();
        }}
      >
        {lang === 'ja' ? '日本語 JAPANESE' : '英語 ENGLISH'}&nbsp;&nbsp;▽
      </button>
      <div
        ref={popoverDropdownRef}
        hidden={!dropdownPopoverShow}
        className="w-40 bg-gray-200 text-base text-center z-50 list-none rounded shadow-lg mt-1"
      >
        <div
          className="cursor-pointer text-sm text-gray-600 pt-1.5 pb-1 border-b border-white hover:text-red-500 transition duration-400"
          onClick={() => {
            setLang('ja');
            setDropdownPopoverShow(false)
          }}
        >
          日本語
        </div>
        <div
          className="cursor-pointer text-sm pt-1.5 pb-1.5 text-gray-600 hover:text-red-400 transition duration-300"
          onClick={() => {
            setLang('en');
            setDropdownPopoverShow(false)
          }}
        >
          ENGLISH
        </div>
      </div>
    </>
  );
};

export default LangDropdown;
