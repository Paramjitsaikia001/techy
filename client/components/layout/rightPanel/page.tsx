import Logo from "@/app/utils/logo/page";
import { buttons } from "@/app/utils/styles/page";
import { Inter } from "next/font/google";
import {
  House,
  Search,
  Bell,
  MessageSquare,
  Bookmark,
  CircleUserRound,
  Hash,
  Settings,
  EllipsisVertical,
} from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Rightpanel() {
  return (
    <section className={`w-[20%]  relative pt-12 `}>
      <div className="main w-full ml-2 flex flex-col gap-6">
        <div className="search w-full h-12 border flex items-center pl-3 rounded-full ">
          <Search />
          <input
            className="w-full h-12 outline-none focus:outline-none px-2"
            type="search"
            name=""
            id=""
            placeholder="Search"
          />
        </div>
        <div className="reminder border rounded-2xl ">
          <div className="heading bg-[#ffffff] text-black h-12 rounded-t-2xl">
            <p className="p-3 font-extralight text-xl">Goal Reminder</p>
          </div>
          <div className="content">
            <div className="post01 cursor-pointer group flex items-center justify-between px-2">
              <div className="profilename gap-2 py-3 flex items-center ">
                <div className="profile-logo rounded-full bg-amber-500 h-8 w-8"></div>
                <div className="text-md text-white font-light">
                  <p className="font-extralight text-xs text-gray-700">
                    Paramjit Saikia
                  </p>
                  <p className="text-sm group-hover:font-bold transition-transform duration-700">Hackathon on IIT GU</p>
                  <div className="tags">
                    <div className="tag flex text-xs gap-1  text-gray-700">
                      <div className="tag01  flex justify-center items-center gap-px border border-black hover:border-gray-900 rounded-md px-2 py-px">
                        <Hash width={10} />
                        <p className=" font-extralight ">Hackathon</p>
                      </div>
                      <div className="tag01 flex justify-center items-center gap-px border border-black hover:border-gray-900 rounded-md px-2 py-px">
                        <Hash width={10} stroke="2px"/>
                        <p className=" font-extralight">web dev</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="text-white " href="">
                <EllipsisVertical />
              </a>
            </div>
            <div className="line h-px w-full bg-gray-700"></div>
            <div className="post02 cursor-pointer group flex items-center justify-between px-2">
              <div className="profilename gap-2 py-3 flex items-center ">
                <div className="profile-logo rounded-full bg-amber-500 h-8 w-8"></div>
                <div className="text-md text-white font-light">
                  <p className="font-extralight text-xs text-gray-700">
                    google
                  </p>
                  <p className="text-sm group-hover:font-bold transition-transform duration-700">Devfest</p>
                  <div className="tags">
                    <div className="tag flex text-xs gap-1  text-gray-700">
                      <div className="tag01  flex justify-center items-center gap-px border border-black hover:border-gray-900 rounded-md px-2 py-px">
                        <Hash width={10} />
                        <p className=" font-extralight ">Event</p>
                      </div>
                      <div className="tag01 flex justify-center items-center gap-px border border-black hover:border-gray-900 rounded-md px-2 py-px">
                        <Hash width={10} stroke="2px"/>
                        <p className=" font-extralight">web dev</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="text-white " href="">
                <EllipsisVertical />
              </a>
            </div>
          </div>
          <div className="footer bg-white flex items-center justify-end text-black rounded-b-xl">
<p className="px-6 py-px font-extralight text-sm hover:underline cursor-pointer">more...</p>
          </div>
        </div>


        <div className="topnews border border-[#1100ff] rounded-2xl">
 <div className="heading bg-[#1100ff] text-white h-12 rounded-t-2xl">
            <p className="p-3 font-extralight text-xl">Top Tech News</p>
            
          </div>
          <div className="content">
            <div className="post01 cursor-pointer group flex items-center justify-between px-2">
              <div className="profilename gap-2 py-3 flex items-center ">
                <div className="text-md text-white font-light">
                  <p className=" group-hover:font-bold transition-transform duration-700">Ai something</p>
                  {/* <div className="tags">
                    <div className="tag flex text-xs gap-1  text-gray-700">
                      <div className="tag01  flex justify-center items-center gap-px border border-black hover:border-gray-900 rounded-md px-2 py-px">
                        <Hash width={10} />
                        <p className=" font-extralight ">ai</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <a className="text-white " href="">
                <EllipsisVertical />
              </a>
            </div>
            <div className="line h-px w-full bg-gray-700"></div>
            <div className="post02 cursor-pointer group flex items-center justify-between px-2">
              <div className="profilename gap-2 py-3 flex items-center ">
                <div className="text-md text-white font-light">
                  <p className=" group-hover:font-bold transition-transform duration-700">lay off</p>
                  {/* <div className="tags">
                    <div className="tag flex text-xs gap-1  text-gray-700">
                      <div className="tag01  flex justify-center items-center gap-px border border-black hover:border-gray-900 rounded-md px-2 py-px">
                        <Hash width={10} />
                        <p className=" font-extralight ">company</p>
                      </div>
                      <div className="tag01 flex justify-center items-center gap-px border border-black hover:border-gray-900 rounded-md px-2 py-px">
                        <Hash width={10} stroke="2px"/>
                        <p className=" font-extralight">job</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <a className="text-white " href="">
                <EllipsisVertical />
              </a>
            </div>
            <div className="line h-px w-full bg-gray-700"></div>
                <div className="post03 cursor-pointer group flex items-center justify-between px-2">
              <div className="profilename gap-2 py-3 flex items-center ">
                <div className="text-md text-white font-light">
                  <p className=" group-hover:font-bold transition-transform duration-700">lay off</p>
                  {/* <div className="tags">
                    <div className="tag flex text-xs gap-1  text-gray-700">
                      <div className="tag01  flex justify-center items-center gap-px border border-black hover:border-gray-900 rounded-md px-2 py-px">
                        <Hash width={10} />
                        <p className=" font-extralight ">company</p>
                      </div>
                      <div className="tag01 flex justify-center items-center gap-px border border-black hover:border-gray-900 rounded-md px-2 py-px">
                        <Hash width={10} stroke="2px"/>
                        <p className=" font-extralight">job</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <a className="text-white " href="">
                <EllipsisVertical />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
