import Image from "next/image";
import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

function Header() {
  return (
    <>
      <div className="flex justify-end">
        <div className="flex items-center gap-4 lg:gap-6 mt-5 mb-3 mx-3 lg:mx-12">
          <div className="relative">
            <div className="absolute top-1 right-1 flex items-center justify-center bg-[#af2d2c] w-3 h-3.5 text-white rounded-full text-[9px]">
              <p className="p-[0.3px]">2</p>
            </div>
            <IoIosNotificationsOutline size={30} />
          </div>
          <p className="text-center font-bold text-xs lg:text-sm">Kelin</p>
          <div>
            <Image src={"/user.svg"} alt="user image" width={40} height={40} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
