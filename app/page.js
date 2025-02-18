import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <div className="flex md:grid mt-14 self-center items-center justify-items-center p-8 pb-10 sm:p-10">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Body />
        </main>
      </div>
      <Footer />
    </>
  );
}
