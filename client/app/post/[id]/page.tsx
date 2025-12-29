import Leftpanel from "@/components/layout/leftPanel/page"
import Rightpanel from "@/components/layout/rightPanel/page"
export default function Post(){
    return(
        <section className="flex justify-center w-full min-h-screen ">
             <main className="flex min-h-full justify-center w-[99%]">
               <Leftpanel />
               <section className="w-[50%] border-r flex flex-col justify-center  border-gray-700 min-h-screen">

               <p>this is my first post</p>
               </section>
               <Rightpanel />
             </main>
           </section>
    )
}