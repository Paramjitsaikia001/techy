import Leftpanel from "@/components/layout/leftPanel/page";
import Rightpanel from "@/components/layout/rightPanel/page";

export default function home() {
  return (
    <section className="flex justify-center w-full min-h-screen ">
      <main className="flex   min-h-full justify-between w-7xl ">
        <Leftpanel />
        <p>hello this is the home page</p>
        <Rightpanel />
      </main>
    </section>
  );
}
