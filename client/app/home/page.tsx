import Leftpanel from "@/components/layout/leftPanel/page";
import Rightpanel from "@/components/layout/rightPanel/page";
import Feed from "@/components/feed/page";
export default function home() {
  return (
    <section className="flex justify-center w-full min-h-screen ">
      <main className="flex min-h-full justify-center w-[99%]">
        <Leftpanel />
        <Feed />
        <Rightpanel />
      </main>
    </section>
  );
}
