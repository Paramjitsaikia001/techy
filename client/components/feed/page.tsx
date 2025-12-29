import { ChevronDown, Hash } from "lucide-react";
import { post } from "@/app/utils/demoposts/page";
import {
  House,
  Search,
  Bell,
  MessageSquare,
  Bookmark,
  CircleUserRound,
  Settings,
  EllipsisVertical,
} from "lucide-react";
export default function Feed() {
  return (
    <section className="w-[50%] border-r flex flex-col justify-center  border-gray-700 min-h-screen">
      {/* <div className="group sticky w-full top-0 bg-black/50  header h-16 border-b font-medium border-gray-700 flex items-center justify-end px-4 gap-1 cursor-pointer">
        <p className="group-hover:font-semibold transition-transform duration-200">
          For you
        </p>
        <ChevronDown className="group-hover:translate-y-1 hover:font-bold transition-transform duration-200" />
      </div> */}
      <div className="create-post w-full  flex items-center  justify-center h-fit">
        <div className="create-post-section bg-[#121212] p-4 rounded-3xl w-[98%] mt-2 ">
          <div className="inputsection flex gap-1  my-2">
            <div className="profile-logo rounded-full bg-amber-500 h-10 w-10"></div>
            <textarea
              className=" w-[95%] px-4 py-2   rounded-2xl text-white focus:outline-none"
              placeholder="Share your crazy tech experience"
            />
          </div>
          <div className="line w-full justify-end flex my-3">
            <div className="line bg-white/30 w-[95%] h-px"></div>
          </div>
          <div className="create-post-footer-header w-full flex justify-end my-2">
            <div className="create-post-footer w-[95%]  flex justify-between">
              <div className="tags">
                <div className="tag flex justify-center items-center gap-1 border-2 border-gray-700 rounded-md px-2 py-1 hover:bg-gray-700 cursor-pointer">
                  <Hash width={12} />
                  <p className="text-sm font-medium">Tags</p>
                </div>
              </div>
              <div className="post rounded-full text-lg px-5 py-1 flex justify-center items-center bg-white font-medium text-black text-center">
                <p>Post</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="posts relative w-full flex flex-col items-center justify-center mt-2  h-[400rem] ">
        <div className="all-posts h-full   border w-[98%] border-gray-800 rounded-2xl">
          <div className="group sticky  w-full top-0 bg-black/50 backdrop-blur-sm  header h-16 border-b rounded-t-2xl font-medium border-gray-700 flex items-center justify-end  px-4 gap-1 cursor-pointer">
            <p className="group-hover:font-semibold transition-transform duration-200">
              For you
            </p>
            <ChevronDown className="group-hover:translate-y-0.5 hover:font-bold transition-transform duration-200" />
          </div>
          <div className="all-posts h-full   w-full  rounded-2xl">
            <div className="userpost p-4">
              <div className="details ">
                <div className="user-details flex gap-3">
                  <div className="profilelogo rounded-full bg-amber-500 h-10 w-10"></div>
                  <div className="profile-detail-time">
                    <div className="name-time flex justify-center items-center gap-2">
                      <p className="font-semibold">{post.full_name}</p>
                      <div className="dot w-1  h-1 rounded-full bg-white"></div>
                      <p>{post.time}</p>
                    </div>
                    <div className="username text-gray-500">
                      <p >{post.username}</p>
                    </div>
                  </div>
                </div>
                <div className="post-details mx-8 mt-4">
                  <div className="tags flex gap-2">
                    <p className=" p-2 hover:text-amber-200 font-semibold">
                      {post.tags[0]}
                    </p>
                    <p className="p-2 hover:text-red-600 font-semibold">
                      {post.tags[1]}
                    </p>
                  </div>
                  <div className="content">
                    <p className="p-2">{post.post_content}</p>
                  </div>
                </div>
              </div>
              <div className="actions flex justify-evenly my-2">
                <Bell className="cursor-pointer hover:fill-pink-400" />
                <Bookmark className="cursor-pointer hover:fill-pink-400" />
                <House className="cursor-pointer hover:fill-pink-400" />
              </div>
            </div>

<div className="line w-full bg-gray-700 h-px"></div>

            <div className="userpost p-4">
              <div className="details ">
                <div className="user-details flex gap-3">
                  <div className="profilelogo rounded-full bg-pink-500 h-10 w-10"></div>
                  <div className="profile-detail-time">
                    <div className="name-time flex justify-center items-center gap-2">
                      <p className="font-semibold">Trishnashree Saikia</p>
                      <div className="dot w-1  h-1 rounded-full bg-white"></div>
                      <p>12m ago</p>
                    </div>
                    <div className="username text-gray-500">
                      <p>@pagoli</p>
                    </div>
                  </div>
                </div>
                <div className="post-details mx-8 mt-4">
                  <div className="tags flex gap-2">
                    <p className=" p-2 hover:text-amber-200 font-semibold">
                      {post.tags[0]}
                    </p>
                    <p className="p-2 hover:text-red-600 font-semibold">
                      {post.tags[1]}
                    </p>
                  </div>
                  <div className="content">
                    <p className="p-2">I'm very bed girl</p>
                  </div>
                </div>
              </div>
              <div className="actions flex justify-evenly my-2">
                <Bell className="cursor-pointer hover:fill-pink-400" />
                <Bookmark className="cursor-pointer hover:fill-pink-400" />
                <House className="cursor-pointer hover:fill-pink-400" />
              </div>
            </div>
            <div className="line w-full bg-gray-700 h-px"></div>
          </div>
        </div>
      </div>
      <div className="feeds"></div>
    </section>
  );
}
