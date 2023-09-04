import Link from "next/link";
import {
  AiOutlineWindows,
  AiOutlineClose,
  AiOutlineMessage,
} from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { GrSchedulePlay } from "react-icons/gr";
import { LuReceipt } from "react-icons/lu";
import { FaTasks } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import React, { useState } from "react";
import { useRouter } from "next/router";

function SideMenu() {
  const [sideMenu, setSideMenu] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <div className="lg:w-[20%] lg:h-screen border lg:border-0 flex justify-between lg:justify-normal lg:flex-col lg:gap-4">
        <div className="lg:my-8 my-4 ml-2 lg:ml-0 flex justify-center items-center bg-[#ab2622] rounded-full w-14 h-14 lg:w-24 lg:h-24 self-center">
          <p className="font-bold text-xl lg:text-2xl text-[#fdf6f9]">K</p>
        </div>

        {/* mobile */}
        <div className="lg:hidden mr-2 lg:mr-0 relative flex items-center">
          {sideMenu ? (
            <AiOutlineClose
              size={30}
              color="black"
              onClick={() => setSideMenu(false)}
            />
          ) : (
            <FiMenu size={30} color="black" onClick={() => setSideMenu(true)} />
          )}
          {sideMenu && (
            <div className="absolute w-48 -right-2 top-14 border-2 border-[#ddaa3d] bg-white z-50 flex flex-col gap-1">
              <Link href={"/workspace"} className="links">
                <AiOutlineWindows />
                <p>Workspace</p>
              </Link>
              <Link href={"/clients"} className="links">
                <PiUsersThreeDuotone />
                <p>Clients</p>
              </Link>
              <Link href={"/appointment"} className="links">
                <GrSchedulePlay />
                <p>Schedule Appointment</p>
              </Link>
              <Link href={"/payment"} className="links">
                <LuReceipt />
                <p>Payment</p>
              </Link>
              <Link href={"/task"} className="links">
                <FaTasks />
                <p>Task</p>
              </Link>
              <Link href={"/message"} className="links">
                <AiOutlineMessage />
                <p>Message</p>
              </Link>
              <Link href={"/reports"} className="links">
                <TbReport />
                <p>Reports</p>
              </Link>
            </div>
          )}
        </div>

        {/* desktop */}
        <div className="hidden lg:flex flex-col gap-3">
          <Link
            href={"/workspace"}
            className={currentPath === "/workspace" ? "focused" : "links"}
          >
            <AiOutlineWindows />
            <p>Workspace</p>
          </Link>
          <Link
            href={"/clients"}
            className={currentPath === "/clients" ? "focused" : "links"}
          >
            <PiUsersThreeDuotone />
            <p>Clients</p>
          </Link>
          <Link href={"/appointment"} className="links">
            <GrSchedulePlay />
            <p>Schedule Appointment</p>
          </Link>
          <Link href={"/payment"} className="links">
            <LuReceipt />
            <p>Payment</p>
          </Link>
          <Link href={"/task"} className="links">
            <FaTasks />
            <p>Task</p>
          </Link>
          <Link href={"/message"} className="links">
            <AiOutlineMessage />
            <p>Message</p>
          </Link>
          <Link href={"/reports"} className="links">
            <TbReport />
            <p>Reports</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
