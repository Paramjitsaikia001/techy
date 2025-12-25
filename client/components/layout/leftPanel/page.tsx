import Logo from "@/app/utils/logo/page";
import { buttons } from "@/app/utils/styles/page";
import { Inter } from 'next/font/google'
import { House,Search,Bell,MessageSquare,Bookmark,CircleUserRound,Hash,Settings,EllipsisVertical } from "lucide-react";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function leftpanel() {
  return (
    <section className={`w-[20%] pr-8 font-${inter.className} relative pt-12 border-r border-gray-700`}>
      <div className="logo flex pl-3">
        <Logo />
      </div>
      <nav className="flex mt-8 flex-col">
        <a className={buttons.primary} href="#">
            <House/>
          <p>Home</p>
        </a>
        <a className={buttons.primary} href="#">
            <Search/>
          <p>Explore</p>
        </a>
        <a className={buttons.primary} href="#">
          <Bell/>
          <p>Notification</p>
        </a>
        <a className={buttons.primary} href="#">
            <MessageSquare/>
            <p>Messages</p>
        </a>
        <a className={buttons.primary} href="#">
            <Bookmark/>
            <p>Bookmarks</p>
        </a>
         <a className={buttons.primary} href="#">
            <Hash/>
            <p>Tags</p>
        </a>
        <a className={buttons.primary} href="#">
          <CircleUserRound/>
          <p>Profile</p>
        </a>
        <a className={buttons.primary} href="#">
            <Settings/>
          <p>Settings</p>
        </a>

        <div className="flex flex-col gap-3 pt-12">

        <a className={`rounded-full text-xl px-4 py-3 bg-white font-semibold text-black text-center`} href="#">
          Post
        </a>
        <a className={`rounded-full text-xl px-4 py-3 bg-blue-500 font-semibold text-white text-center`}  href="#">
          ads
        </a>
        </div>
      </nav>
      <footer className=" absolute bottom-2 px-2 w-full">
        <div className="flex items-center rounded-full hover:bg-[#1a1a1a]  px-3 justify-between">
          <div className="profilename gap-2 py-3 flex items-center ">
            <div className="profile-logo rounded-full bg-amber-500 h-8 w-8"></div>
            <p className="text-xl text-white font-medium">Paramjit saikia</p>
          </div>
          <a className="text-white " href="">
            <EllipsisVertical/>
          </a>
        </div>
      </footer>
    </section>
  );
}
